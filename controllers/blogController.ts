import Blog from '../models/Blog';
import renderBlog from '../views/blogView';

async function createBlog(title: any, content: any) {
  try
  {
      const blog = new Blog({ title, content });
      await blog.save();
      renderBlog(blog);

  } 
  catch (error) {
    console.error(error);
    throw error;
  }

}

export default createBlog;
