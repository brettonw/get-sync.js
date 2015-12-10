#! /usr/local/bin/node

var getSync = require ("..");
var _path = require ("path");

process.stderr.write ("BEFORE\n");
var url = "http://namespace-include.azurewebsites.net/package/abc.js";
var path =  _path.join (_path.parse (require.main.filename).dir, "abc.js");
getSync (url, path);
process.stderr.write ("AFTER\n");
