
const connectToDatabase = require('./config/database');
const createBlog = require('./controllers/blogController');

const container = require('./container');

async function displayAllBlogs() {

    const blogService = container.get('BlogService');

    console.log(blogService);
    // const blogs = await blogService.getAllBlogs();

    // blogs.forEach((blog) => {
    //     console.log('---');
    //     console.log(`Title: ${blog.title}`);
    //     console.log(`Content: ${blog.content}`);
    // });
}

async function run() {

  // await connectToDatabase();

  try {

    await connectToDatabase.connect();

    // await displayAllBlogs();


    // await createBlog("My First Blog", "This is the content of my first blog.");

    // await client.close();

  } catch (error) {
    console.error("Failed to run the application:", error);
  }

  

}

run();