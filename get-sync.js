// get-sync provides a simple synchronous command to fetch a url to a local file
// it has no other dependencies; no need for threads, fibers, or other complex
// implementation details

var _cp = require ("child_process");
var _url = require ("url");
var _util = require ("util");

var getSync = function (url, path) {
    var options = { stdio: ["ignore", "ignore", 2] };
    process.stderr.write ("get url (" + url + ") to " + path + "\n");
    _cp.spawnSync("node", ["./fetch.js", url, path], options);
};

module.exports = getSync;
