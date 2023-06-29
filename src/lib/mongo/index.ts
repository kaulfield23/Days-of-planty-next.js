import { MongoClient } from 'mongodb';

const url = process.env.DB_URL;
const options = {};

if (!url) throw new Error('Please add your MongoDB url to .env.local');

let client = new MongoClient(url, options);

let clientPromise: Promise<MongoClient>;

let globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise: Promise<MongoClient>;
};

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(url, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(url, options);
  clientPromise = client.connect();
}

clientPromise = globalWithMongo._mongoClientPromise;

export default clientPromise;
