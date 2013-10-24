#!/usr/bin/env bash

# if [[ ! -d sync/prod ]]
# then
#   mkdir -p sync/prod
# fi

rsync -av --delete resources/*.html resources/edn resources/public/js sync/prod

sed -i '' 's|^//@.*$||' sync/prod/js/bible-plan.js

aws s3 --profile p_s3 sync --delete sync/prod/ s3://bibleplan.twonegatives.com/
