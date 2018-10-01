
'use strict';
const Alexa = require('alexa-sdk'); //import Alexa SDK

//=========================================================================================================================================
//Messages for our Prompt
//=========================================================================================================================================

const APP_ID = undefined;
const SKILL_NAME = 'Greeting Bot';
const SKILL_WELCOME = 'Hi Martin, who you want to say hello?';
const HELP_MESSAGE = 'Just say a name, and I will say hello to this person';
const HELP_REPROMPT = 'Say: Say hello to John';
const STOP_MESSAGE = 'Goodbye!';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers); //register the handlers function
    alexa.execute(); //execute the object
};

const handlers = {
    'LaunchRequest': function () { //invoked on launch
        this.emit('WelcomeIntent');
    },
    'WelcomeIntent': function () {
        this.emit(':ask', SKILL_WELCOME);    //Alexa Ask the question, and wait for your reply
    },
    'SayHalloIntent': function () {
        var speechOutput = '';
        var nameFromBot = '';
        
        nameFromBot = this.event.request.intent.slots.name.value;
        speechOutput = "Hey " + nameFromBot + ", nice to meet you!";

        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE; //assign the help message
        const reprompt = HELP_REPROMPT; //assign the reprompt message

        this.response.speak(speechOutput).listen(reprompt); //setting the help message followed by listen for the reprompt
        this.emit(':responseReady'); //send to Alexa 
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE); //speak Stop message
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE); //speak Stop message
        this.emit(':responseReady');
    },
};