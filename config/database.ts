require('dotenv').config();


import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URL;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// async function runMongoConnection() {
//   try {

//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
    
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");

//     return client;
//   }
//   catch(error) 
//   {
//     console.error("Failed to connect to MongoDB:", error);
//     throw error; // 
//   }
// }
export default client;



