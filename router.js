function route(handle, pathname, response, postData, log) {
  log.trace("About to route a request for " + pathname);
  if (typeof handle[pathname] === "function") {
    return handle[pathname](response, postData, log);
  }
  else {
    log.warn("No request handler found for " + pathname);
    response.writeHead(404, {"contentType" : "text/html"});
    response.write("<html><h1>404 not found</h1></html>");
    response.end();
  }
}

exports.route = route;
