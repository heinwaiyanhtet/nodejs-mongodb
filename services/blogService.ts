import { Container, injectable } from 'inversify';

require("reflect-metadata");

import BlogRepository = require('../repositories/blogRepository');


// @injectable()
class BlogService {
  
  blogRepository: any;

  constructor(blogRepository: any) {
    this.blogRepository = blogRepository;
  }

  async getAllBlogs() {
    return await this.blogRepository.getAllBlogs();
  }
  
}

export default BlogService;