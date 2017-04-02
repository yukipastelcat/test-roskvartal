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

function css(response, postData, log) {
  log.info("'css/test-roskvartal.css' is requested");
  fs.readFile("./css/test-roskvartal.css", function(err, css) {
    if (err) {
      log.error("Error in 'css' request handler");
      throw err;
    }
    response.writeHead(200, {"Content-Type" : "text/css"});
    response.end(css);
  });
}

function js(response, postData, log) {
  log.info("'js/controllers.js' is requested");
  fs.readFile("./js/controllers.js", function(err, css) {
    if (err) {
      log.error("Error in 'js' request handler");
      throw err;
    }
    response.writeHead(200, {"Content-Type" : "text/js"});
    response.end(css);
  });
}

function imgLogo(response, postData, log) {
  log.info("'img/logo.png' is requested");
  fs.readFile("./img/logo.png", function(err, img) {
    if (err) {
      log.error("Error in 'imgLogo' request handler");
      throw err;
    }
    response.writeHead(200, {"Content-Type" : "image/png"});
    response.end(img);
  });
}

function imgCover(response, postData, log) {
  log.info("'img/cover.jpg' is requested");
  fs.readFile("./img/cover.jpg", function(err, img) {
    if (err) {
      log.error("Error in 'imgCover' request handler");
      throw err;
    }
    response.writeHead(200, {"Content-Type" : "image/jpg"});
    response.end(img);
  });
}

function imgFooter(response, postData, log) {
  log.info("'img/footer.png' is requested");
  fs.readFile("./img/footer.png", function(err, img) {
    if (err) {
      log.error("Error in 'imgFooter' request handler");
      throw err;
    }
    response.writeHead(200, {"Content-Type" : "image/png"});
    response.end(img);
  });
}

function imgSocVK(response, postData, log) {
  log.info("'img/soc_vk.png' is requested");
  fs.readFile("./img/soc_vk.png", function(err, img) {
    if (err) {
      log.error("Error in 'imgSocVK' request handler");
      throw err;
    }
    response.writeHead(200, {"Content-Type" : "image/png"});
    response.end(img);
  });
}

function imgSocFacebook(response, postData, log) {
  log.info("'img/soc_facebook.png' is requested");
  fs.readFile("./img/soc_facebook.png", function(err, img) {
    if (err) {
      log.error("Error in 'imgSocFacebook' request handler");
      throw err;
    }
    response.writeHead(200, {"Content-Type" : "image/png"});
    response.end(img);
  });
}

function imgSocYoutube(response, postData, log) {
  log.info("'img/soc_youtube.png' is requested");
  fs.readFile("./img/soc_youtube.png", function(err, img) {
    if (err) {
      log.error("Error in 'imgSocYoutube' request handler");
      throw err;
    }
    response.writeHead(200, {"Content-Type" : "image/png"});
    response.end(img);
  });
}

function imgSocIG(response, postData, log) {
  log.info("'img/soc_ig.png' is requested");
  fs.readFile("./img/soc_ig.png", function(err, img) {
    if (err) {
      log.error("Error in 'imgSocIG' request handler");
      throw err;
    }
    response.writeHead(200, {"Content-Type" : "image/png"});
    response.end(img);
  });
}

function imgBtnNext(response, postData, log) {
  log.info("'img/next.png' is requested");
  fs.readFile("./img/next.png", function(err, img) {
    if (err) {
      log.error("Error in 'imgBtnNext' request handler");
      throw err;
    }
    response.writeHead(200, {"Content-Type" : "image/png"});
    response.end(img);
  });
}

function testCheck(response, postData, log) {
  console.log("'testCheck' request handler was called");
  console.log(postData);
}

exports.index = index;
exports.css = css;
exports.js = js;
exports.imgLogo = imgLogo;
exports.imgCover = imgCover;
exports.imgFooter = imgFooter;
exports.imgSocVK = imgSocVK;
exports.imgSocFacebook = imgSocFacebook;
exports.imgSocYoutube = imgSocYoutube;
exports.imgSocIG = imgSocIG;
exports.imgBtnNext = imgBtnNext;
exports.testCheck = testCheck;