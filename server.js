const http = require("http");
const url = require("url");

function start(port, route, handle, log){
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    log.info("Request for " + pathname + " received.");
    var postData = "";

    request.setEncoding("utf8");
    request.on("data", function(chunk) {
      postData += chunk;
      log.trace("Received POST data chunk '"+
      chunk + "'.");
    });

    request.on("end", function() {
      route(handle, pathname, response, postData, log);
    });
  }

  http.createServer(onRequest).listen(port);
  log.info("Server started on port " + port);
}

exports.start = start;
