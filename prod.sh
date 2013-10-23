#!/usr/bin/env bash

if [[ ! -d sync/prod ]]
then
  mkdir -p sync/prod
fi

rsync -av --delete $(find resources -type f -maxdepth 1) resources/public/js sync/prod

aws s3 --profile p_s3 sync --delete sync/prod/ s3://bibleplan.twonegatives.com/
