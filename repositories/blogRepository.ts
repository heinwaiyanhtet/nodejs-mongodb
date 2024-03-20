import {  injectable } from 'inversify';
import Blog from '../models/Blog';


@injectable()
class BlogRepository {

  async getAllBlogs() {
    return await Blog.find();
  }
  
}

export default BlogRepository;