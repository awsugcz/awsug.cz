#!/bin/bash -eux

SRC_FILE="$1"

# For Photos:
# convert -quality 80% -resize 1600x1068^ -gravity center -extent 1600x1068 "${SRC_FILE}" "${SRC_FILE%.*}-resized.jpg"

# For Screenshots:
convert -quality 80% -resize 1600x1068^ -gravity center "${SRC_FILE}" "${SRC_FILE%.*}-resized.jpg"
