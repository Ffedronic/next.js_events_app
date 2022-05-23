import { MongoClient } from "mongodb";
require("dotenv").config();

export async function connectDataBase() {
  const client = await MongoClient.connect(
    `mongodb+srv://felix:${process.env.MONGODB_PASSWORD}@cluster0.ygtml.mongodb.net/?retryWrites=true&w=majority`
  );
  return client;
}

export async function insertDocuments(client, collection, document) {
  const db = await client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getDocuments(client, collection) {
  const db = await client.db();
  const results = await db
    .collection(collection)
    .find()
    .sort({ _id: -1 })
    .toArray();
  return results;
}
