// get-sync provides a simple synchronous command to fetch a url to a local file
// it has no other dependencies; no need for threads, fibers, or other complex
// implementation details

var _cp = require ("child_process");
var _path = require ("path");

var getSync = function (url, path) {
    var options = { stdio: ["ignore", 1, 2] };
    //process.stderr.write ("get url (" + url + ") to " + path + "\n");
    var httpRequestJs = _path.join(__dirname, "http-request.js");
    _cp.execSync("node " + httpRequestJs + " " + url + " " + path, options);
};

module.exports = getSync;
