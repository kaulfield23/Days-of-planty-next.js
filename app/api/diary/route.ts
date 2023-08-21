import clientPromise from 'lib/mongo';
import { plantDiary } from 'lib/mongo/models';
import { NextRequest } from 'next/server';

export async function POST(request: Request) {
  const client = await clientPromise;
  const db = client.db('planty');

  const res = await request.json();

  const diary = new plantDiary(res);

  try {
    await db.collection('diary').insertOne(diary);
    return new Response('Post succeeded', {
      status: 200,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function GET(request: NextRequest) {
  const client = await clientPromise;
  const db = client.db('planty');
  const plantId = request.nextUrl.searchParams.get('plantId');

  try {
    const result = await db
      .collection('diary')
      .find({ plantId: plantId })
      .toArray();
    return new Response(JSON.stringify(result));
  } catch (e) {
    console.log(e);
  }
}
