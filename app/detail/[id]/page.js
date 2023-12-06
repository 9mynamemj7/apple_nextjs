import React from 'react';
import { db } from './data';
import { ObjectId } from 'mongodb';

async function page(props) {
  let id = props.params.id
  let data = await db
  .collection('post')
  .findOne({ _id: new ObjectId(id)});

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>글 제목: {data.title}</h4>
      <p>글 내용: {data.content}</p>
    </div>
  )
}

export default page