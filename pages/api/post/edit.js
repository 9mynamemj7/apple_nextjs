import { connectDB } from "@/util/database";
import { ObjectId } from 'mongodb';

export default async function handler(request, response) {
  const db = (await connectDB).db('Test');
  let result;
  let met = request.method;
  let body = request.body;
  console.log(met);
  console.log(body);
  if (met == 'POST') {
    if (body.title == '') {
      return response.status(500).json('none title');
    }
    result = await db
    .collection('post')
    .updateOne(
      { _id: new ObjectId(body._id)},
      {$set : {
        title: body.title,
        content: body.content
      }}
    );
    return response.status(200).json('성공');
  } else {
    return response.status(500).json('실패');
  }
}