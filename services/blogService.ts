import { Container, inject, injectable } from 'inversify';
require("reflect-metadata");
import BlogRepository from'../repositories/blogRepository';


@injectable()
class BlogService {
  
  blogRepository: BlogRepository;

  constructor(@inject('BlogRepository') blogRepository: BlogRepository) {
    this.blogRepository = blogRepository;
  }
  
  async getAllBlogs() {
    return await this.blogRepository.getAllBlogs();
  }
  
}

export default BlogService;