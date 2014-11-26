'use strict';

var env, config;

// When deployed, retreive configurations from environment variables.
env = process.env;
/**
 * Config object for the entire application.
 */
config = {
  MODE: env.MODE || 'development',
  TOKEN: env.TOKEN || 'token',
  ELASTIC_SEARCH_APIS: env.ELASTIC_SEARCH_APIS || [ 'http://localhost:9200' ],
  PORT: env.PORT || 3002,
  NOTIFICATION_URL: env.NOTIFICATION_URL || '',
  AWS_ACCESSKEYID: env.AWS_ACCESSKEYID || '',
  AWS_SECRETACCESSKEY: env.AWS_SECRETACCESSKEY || '',
  SNS_ARN: env.SNS_ARN || 'arn:aws:sns:us-west-2:036845378506:Mobile_Publication'

};

// Freeze the object that it cannot be modified during runtime.
module.exports = Object.freeze(config);
