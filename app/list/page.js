import React from 'react'
import { connectDB } from "@/util/database";
import ListItem from './ListItem';

export default async function page() {
  const client = await connectDB;
  const db = client.db('Test');
  let result = await db.collection('post').find().toArray()

  return (
    <div class='flex flex-col items-center'>
      <h4 class='mt-40'>글 목록</h4>
      {result.map((item, index) => (
        <div class="mb-6" key={index}>
          <ListItem item={item} />
        </div>
      ))}
    </div>
  )
}