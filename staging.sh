#!/usr/bin/env bash

if [[ ! -d sync/staging ]]
then
  mkdir -p sync/staging
fi

rsync -av --delete resources/*.html resources/edn resources/public/whitespace/js sync/staging

sed -i '' 's|resources/public/whitespace/js/||' sync/staging/js/bible-plan.js

aws s3 --profile p_s3 sync --delete sync/staging/ s3://staging.bibleplan.twonegatives.com/
