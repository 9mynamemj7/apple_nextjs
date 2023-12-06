import { MongoClient } from 'mongodb';

const MONGODB_URL = process.env.MONGODB_URL;
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(MONGODB_URL, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(MONGODB_URL, options).connect()
}

export { connectDB };