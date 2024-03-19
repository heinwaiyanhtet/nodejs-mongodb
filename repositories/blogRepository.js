const Blog = require('../models/Blog');

class BlogRepository {

  async getAllBlogs() {
    return await Blog.find();
  }
  
}

module.exports = BlogRepository;