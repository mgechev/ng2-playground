"use strict";

var del = require('del');
var path = require('path');
var join = path.join;
var CONFIG = require('../workflow.config');
var PATH = CONFIG.PATH;

module.exports = function (gulp, plugins, config) {
  return function (done) {
    if (config == 'clean' || config == 'clean.dev') {
      del(PATH.dest.all, done);
    }

    if (config == 'clean.app.dev') {
      del([
          CONFIG.APP_SRC,
          join(PATH.dest.dev.all, '**/*'),
          '!' + PATH.dest.dev.lib,
          '!' + join(PATH.dest.dev.lib, '*')
        ], done);
    }

    if (config == 'test') {
      del(config, done);
    }

    if (config == 'tsd_typings') {
      del(config, done);
    }
  };
};
