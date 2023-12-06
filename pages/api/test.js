export default function handler (request, response) {
  let met = request.method;
  if (met == 'POST') {
    response.status(200).json('post 처리완료');
  } else if (met == 'GET') {
    response.status(200).json('get 처리완료');
  }
}