import { connectDB } from "@/util/database";

export default async function handler(request, response) {
  const db = (await connectDB).db('Test');
  let result;
  let met = request.method;
  console.log(met);
  console.log(request.body);
  if (met == 'POST') {
    if (request.body.title == '') {
      return response.status(500).json('none title');
    }
    result = await db.collection('post').insertOne(request.body);
    response.redirect(302, '/list');
  } else {
    response.status(500).json('실패');
  }
}