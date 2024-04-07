require('dotenv').config();


import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


export default client;



