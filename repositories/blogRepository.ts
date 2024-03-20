import Blog from '../models/Blog';

class BlogRepository {

  async getAllBlogs() {
    return await Blog.find();
  }
  
}

export default BlogRepository;