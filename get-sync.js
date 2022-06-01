// get-sync provides a simple synchronous command to fetch a url to a local file
// it has no other dependencies; no need for threads, fibers, or other complex
// implementation details

let _cp = require ("child_process");
let _path = require ("path");

let getSync = function (url, path) {
    let httpRequestJs = _path.join(__dirname, "http-request.js");
    _cp.execSync("node " + httpRequestJs + " " + url + " " + path, { stdio: ["ignore", 1, 2] });
};

module.exports = getSync;
