#!/usr/bin/env bash

if [[ ! -d sync/staging ]]
then
  mkdir -p sync/staging
fi

rsync -avq --delete $(find resources -type f -maxdepth 1) $(find resources/public/whitespace -type f) sync/staging

s3cmd sync sync/staging/ s3://staging.bibleplan.twonegatives.com/
