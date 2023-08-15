import clientPromise from 'lib/mongo';

export async function GET(request: Request) {
  const client = await clientPromise;
  const db = client.db('planty');
  const plants = await db.collection('plants').find({}).toArray();
  return new Response(JSON.stringify(plants));
}

export async function PATCH(request: Request) {
  const res = await request.json();
  console.log(res, ' yeah');
  return new Response('hey');
}
