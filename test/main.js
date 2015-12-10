#! /usr/local/bin/node

var getSync = require ("..");

process.stderr.write ("BEFORE\n");
getSync ("http://namespace-include.azurewebsites.net/package/abc.js", "abc.js");
process.stderr.write ("AFTER\n");
