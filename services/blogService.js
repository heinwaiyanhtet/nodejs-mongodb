const { Container, injectable } = require('inversify');

require("reflect-metadata");

const BlogRepository = require('../repositories/blogRepository');


// @injectable()
class BlogService {

  constructor(blogRepository) {
    this.blogRepository = blogRepository;
  }

  async getAllBlogs() {
    return await this.blogRepository.getAllBlogs();
  }
  
}

module.exports = BlogService;