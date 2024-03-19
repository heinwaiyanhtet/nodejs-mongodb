const connectToDatabase = require('./config/database');
const container = require('./container');

async function displayAllBlogs() {

    const blogService = container.get('BlogService');
    const blogs = await blogService.getAllBlogs();

    blogs.forEach((blog) => {
        console.log('---');
        console.log(`Title: ${blog.title}`);
        console.log(`Content: ${blog.content}`);
    });
}

async function run() {

  await connectToDatabase();
  
  await displayAllBlogs();

}

run();