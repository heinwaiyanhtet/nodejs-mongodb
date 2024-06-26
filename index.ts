
import connectToDatabase from './config/database';
import  createBlog  from './controllers/blogController';
import container  from "./container";
import BlogService from './services/blogService';

async function displayAllBlogs() {

    console.log("Blog Service");

    const blogService = container.get<BlogService>('BlogService');
    
    const blogs = await blogService.getAllBlogs();

    console.log("blogs reached");

    blogs.forEach((blog) => {

        console.log('---');
        console.log(`Title: ${blog.title}`);
        console.log(`Content: ${blog.content}`);
        
    });

}

async function run() {

  try {

    // npx ts-node index.ts

    await connectToDatabase.connect();

    await createBlog("My First Blog", "This is the content of my first blog.");

    await displayAllBlogs();

    await connectToDatabase.close();

  } catch (error) {

    console.error(error);

  }

  

}

run();