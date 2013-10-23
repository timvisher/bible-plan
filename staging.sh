#!/usr/bin/env bash

if [[ ! -d sync/staging ]]
then
  mkdir -p sync/staging
fi

rsync -av --delete $(find resources -type f -maxdepth 1) resources/public/whitespace/js sync/staging

aws s3 --profile p_s3 sync --delete sync/staging/ s3://staging.bibleplan.twonegatives.com/
