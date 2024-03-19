const { Container } = require('inversify');

const BlogRepository = require('./repositories/blogRepository');
const BlogService = require('./services/blogService');

const container = new Container();
container.bind('BlogRepository').to(BlogRepository);
container.bind('BlogService').to(BlogService);

module.exports = container;