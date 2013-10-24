#!/usr/bin/env bash

environment=${1:-staging}

bucket=bibleplan.twonegatives.com

if [ staging = $environment ]
then
  bucket=staging.$bucket
fi

if [[ ! -d sync ]]
then
  mkdir -p sync
fi

rsync -av --delete resources/*.html resources/edn resources/public/js sync

sed -i '' 's|^//@.*$||' sync/js/bible-plan.js

aws s3 --profile p_s3 sync --delete sync/ s3://$bucket/