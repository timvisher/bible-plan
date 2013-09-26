#!/usr/bin/env bash

if [[ ! -d sync/prod ]]
then
  mkdir -p sync/prod
fi

rsync -avq --delete $(find resources -type f -maxdepth 2) sync/prod

s3cmd sync sync/prod/ s3://bibleplan.twonegatives.com/
