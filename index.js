const log4js = require('log4js');
const log = log4js.getLogger();
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('server.log'));

var server = require("./server");
var config = require("./config");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle['/'] = requestHandlers.index;
handle['/css/test-roskvartal.css'] = requestHandlers.css;
handle['/js/controllers.js'] = requestHandlers.js;
handle['/img/logo.png'] = requestHandlers.imgLogo;
handle['/img/cover.jpg'] = requestHandlers.imgCover;
handle['/img/footer.png'] = requestHandlers.imgFooter;
handle['/img/soc_vk.png'] = requestHandlers.imgSocVK;
handle['/img/soc_facebook.png'] = requestHandlers.imgSocFacebook;
handle['/img/soc_youtube.png'] = requestHandlers.imgSocYoutube;
handle['/img/soc_ig.png'] = requestHandlers.imgSocIG;
handle['/img/next.png'] = requestHandlers.imgBtnNext;
handle['/testCheck'] = requestHandlers.testCheck;

log.setLevel(config.logLevel);
server.start(config.port, router.route, handle, log);
log.info("Log level " + config.logLevel);
