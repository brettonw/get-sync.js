// get-sync provides a simple synchronous command to fetch a url to a local file
// it has no other dependencies; no need for threads, fibers, or other complex
// implementation details

var _cp = require ("child_process");

var getSync = function (options, path) {
    var options = { stdio: ["ignore", process.stderr, "ignore"] };
    _cp.spawnSync("node", ["./fetch.js", url, path], options);
};

module.exports = getSync;
