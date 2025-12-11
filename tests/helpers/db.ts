import { MongoClient } from "mongodb";

const MONGO_URL =
  process.env.DATABASE_URL ||
  "mongodb://payload:payload@localhost:27017/nextjs_tailwind_daisyui";

export async function connectDB() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  return client;
}

export async function resetDatabase(client: MongoClient) {
  const db = client.db();
  const collections = await db.listCollections().toArray();

  for (const collection of collections) {
    await db.collection(collection.name).deleteMany({});
  }
}

export async function seedTestData(
  client: MongoClient,
  data: Record<string, any[]>
) {
  const db = client.db();

  for (const [collectionName, documents] of Object.entries(data)) {
    if (Array.isArray(documents) && documents.length > 0) {
      await db.collection(collectionName).insertMany(documents);
    }
  }
}

export async function getCollectionCount(
  client: MongoClient,
  collectionName: string
): Promise<number> {
  const db = client.db();
  return await db.collection(collectionName).countDocuments();
}
