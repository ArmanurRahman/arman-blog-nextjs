import { contact } from "@/type/post";
import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
    const client = await MongoClient.connect();
    return client;
};

export const insetData = async (
    client: MongoClient,
    collection: string,
    document: contact
) => {
    const db = await client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
};
