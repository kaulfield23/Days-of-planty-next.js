import clientPromise from 'lib/mongo';
import { ObjectId } from 'mongodb';

export async function GET(request: Request) {
  const client = await clientPromise;
  const db = client.db('planty');
  const plants = await db.collection('plants').find({}).toArray();
  return new Response(JSON.stringify(plants));
}

export async function PATCH(request: Request) {
  const client = await clientPromise;
  const db = client.db('planty');

  const res = await request.json();
  try {
    await db.collection('plants').updateOne(
      { _id: new ObjectId(res.plantId) },
      {
        $set: { condition: parseInt(res.newCondition) },
      }
    );
    return new Response('Patch succeeded', {
      status: 200,
    });
  } catch (e) {
    console.log(e);
  }
}
