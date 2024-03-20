const Blog = require('../models/Blog');
const renderBlog = require('../views/blogView');

async function createBlog(title, content) {
  try
  {
      const blog = new Blog({ title, content });
      
      await blog.save();

      renderBlog(blog);

  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = createBlog;