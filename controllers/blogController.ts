import Blog from '../models/Blog';
import renderBlog from '../views/blogView';

console.log("creating blogs");

async function createBlog(title: any, content: any) {
  try
  {
      const blog = new Blog({ title, content });
      console.log("new blog title",title);
      console.log("new blog content",content);
      await blog.save();
      renderBlog(blog);
      
  } 
  catch (error) {
    console.error(error);
    throw error;
  }

}

export default createBlog;
