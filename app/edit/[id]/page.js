import React from 'react'
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

async function page(props) {
  let id = props.params.id
  let data = await (await connectDB).db('Test')
  .collection('post')
  .findOne({ _id: new ObjectId(id)});

  return (
    <div class="p-10">
      <h3>글 작성</h3>
      <form action="/api/post/edit" method='POST'>
        <div class="flex flex-col justify-start space-y-8">
          <input class="invisible" name="_id" defaultValue={id} />
          <input class="w-80 h-10 p-4 text-black" maxLength='20' name="title" placeholder='title' defaultValue={data.title}/>
          <input class="w-[30rem] h-auto p-4 text-black flex-wrap" maxLength='40' name="content" placeholder='content' defaultValue={data.content}/>
          <button class="w-11" type="submit">버튼</button>
        </div>
      </form>
    </div>
  )
}

export default page