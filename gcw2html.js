#!/usr/bin/env node

var wikiwym = require('wikiwym');

var fs = require('fs');
var cli = require('cli').enable('glob', 'status');
var options = cli.parse();

var files = cli.args;

if(files.length) {
  // for (var i = 0; i < files.length; i++) {
  //   var content = fs.readFileSync(files[i], "utf8");
  //   console.log( wikiwym.parse(content) );
  // };

  var content = fs.readFileSync(files[0], "utf8");
  cli.output( wikiwym.parse(content) );
} else {
  cli.withStdin(function(content) {
    cli.output( wikiwym.parse(content) );
  });
}
