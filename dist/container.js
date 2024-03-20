"use strict";

require('reflect-metadata');
var _require = require('inversify'),
  Container = _require.Container;
var BlogRepository = require('./repositories/blogRepository');
var BlogService = require('./services/blogService');
var container = new Container();
container.bind('BlogRepository').to(BlogRepository);
container.bind('BlogService').to(BlogService);
module.exports = container;