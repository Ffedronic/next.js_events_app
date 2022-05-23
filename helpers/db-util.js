import { MongoClient } from "mongodb";
require("dotenv").config();

/**
 * It connects to the MongoDB database and returns the client.
 * @returns The client object.
 */
export async function connectDataBase() {
  
  const client = await MongoClient.connect(
    `mongodb+srv://felix:${process.env.MONGODB_PASSWORD}@cluster0.ygtml.mongodb.net/?retryWrites=true&w=majority`
  );

  return client;

}

/**
 * It takes a client, a collection, and a document, and then inserts the document into the collection
 * @param client - The MongoClient object
 * @param collection - The name of the collection you want to insert the document into.
 * @param document - The document to insert.
 * @returns The result of the insert operation.
 */
export async function insertDocuments(client, collection, document) {
  
  const db = await client.db();
  
  const result = await db.collection(collection).insertOne(document);
  
  return result;

}

/**
 * It returns an array of documents from a collection in a database.
 * @param client - The MongoDB client
 * @param collection - The name of the collection you want to query.
 * @returns An array of documents.
 */
export async function getDocuments(client, collection) {
  
  const db = await client.db();
  
  const results = await db
    .collection(collection)
    .find()
    .sort({ _id: -1 })
    .toArray();
  
    return results;

}
