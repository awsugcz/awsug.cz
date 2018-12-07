#!/bin/bash -eux

SRC_FILE="$1"

convert -quality 80% -resize 1600x1068^ -gravity center -extent 1600x1068 $SRC_FILE ${SRC_FILE%.*}-resized.jpg
