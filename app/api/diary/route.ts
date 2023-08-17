import clientPromise from 'lib/mongo';
import { plantDiary } from 'lib/mongo/models';
import { diarySchema } from 'lib/mongo/shcema';
// import { ObjectId } from 'mongodb';

export async function POST(request: Request) {
  const client = await clientPromise;
  const db = client.db('planty');

  const res = await request.json();

  const diary = new plantDiary(res);

  try {
    await db.collection('diary').insertOne(diary);
    return new Response('Patch succeeded', {
      status: 200,
    });
  } catch (e) {
    console.log(e);
  }
}