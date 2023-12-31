import { MongoClient } from 'mongodb';

const url = process.env.NEXT_PUBLIC_DB_URL;

if (!url) throw new Error('Please add your MongoDB url to .env.local');

let client = new MongoClient(url);

let clientPromise: Promise<MongoClient>;

let globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise: Promise<MongoClient>;
};

if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(url);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(url);
  clientPromise = client.connect();
}

export default clientPromise;
