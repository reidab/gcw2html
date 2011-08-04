# gcw2html

A simple command-line utility to convert Google Code wiki markup to HTML
using [wikiwm](http://code.google.com/p/wikiwym/), a JavaScript Google Code wiki
library. 

## Instalation

You'll need [node](http://nodejs.org/) and [npm](http://npmjs.org). 

Once you've got those:

    npm install -g gcw2html

## Usage

You can pass in a file...

    $ gcw2html filename.wiki

or you can read from STDIN

    $ cat filename.wiki | gcw2html

and you'll get HTML out!

Want to save the output to a file? Just redirect!

    $ gcw2html filename.wiki > filename.html


## Converting Google Code wiki markup to __markdown__

I originally wrote this in the process of transferring a moderately-sized
wiki from Google Code to GitHub. For those in similar boat, here's how I
did that using too many tools and the joys of the unix pipe.

You'll need:

  * gcw2html
  * [pandoc](http://johnmacfarlane.net/pandoc/installing.html)
  * ruby (or some other language) to do the final regexp bit in

Conversion party:

    gcw2html filename.wiki \
      | pandoc --from html --to markdown --no-wrap \
      | ruby -e 'puts STDIN.readlines.to_s.gsub(/\[([^\]]*)\]\(http:\/\/code\.google\.com\/p\/[^\/]*\/wiki\/([^\)]*)\)/,"[[\\1 | \\2]]")'


