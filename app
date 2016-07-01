#!/bin/sh

## 起動前に実行したいコマンドをここに追加します。

# babel www/app6.js > www/app5.js

## wwwディレクトリの内容をChrome Appとして起動します。
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --load-and-launch-app=`pwd`/www
