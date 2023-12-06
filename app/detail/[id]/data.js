import { connectDB } from "@/util/database";

const client = await connectDB;
const db = client.db('Test');
let result = await db.collection('post').find().toArray()

export { result, db };