# gcw2html

A simple command-line utility to convert Google Code wiki markup to HTML
using [wikiwm](wikiwym.googlecode.com/), a JavaScript Google Code wiki
library. 

## Instalation

You'll need [node](http://nodejs.org/) and [npm](http://npmjs.org). 

Once you've got those:

    npm install -g gcw2html

## Usage

You can pass in a file...

    > gcw2html filename.wiki

or you can read from STDIN.

    > cat filename.wiki | gcw2html
