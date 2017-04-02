const fs = require("fs");

function index(response, postData, log) {
  log.info("Request handler 'start' was called");
  fs.readFile("index.html", function(err, html) {
    if (err) {
      log.error("Error in 'start' request handler");
      throw err;
    }
    response.writeHead(200, {"contentType" : "text/html"});
    response.write(html);
    response.end();
  });
}

exports.index = index;
