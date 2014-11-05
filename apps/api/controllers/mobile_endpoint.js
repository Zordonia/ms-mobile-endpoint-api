'use strict';

var Q, logger, restler, url, config, querystring, publisher, _;

Q = require('q');
logger = require('../utils/logger');
restler = require('restler-q');
url = require('url');
config = require('../utils/config.js');
querystring = require('querystring');
_ = require('lodash');
publisher = require('./pubsub/publisher.js');

module.exports = function (req, res) {
  logger.debug.write('Processing message from mobile endpoint.');
  logger.debug.write(req.body);
  publisher.publish(req.body).then(function (response) {
    res.json(response);
  });
};
