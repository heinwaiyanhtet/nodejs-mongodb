const BlogRepository = require('../repositories/blogRepository');

class BlogService {

  constructor(blogRepository) {
    this.blogRepository = blogRepository;
  }

  async getAllBlogs() {
    return await this.blogRepository.getAllBlogs();
  }
  
}

module.exports = BlogService;