import clientPromise from 'lib/mongo';
import { NextResponse } from 'next/server';
import { Readable } from 'stream';

export async function GET(request: Request) {
  return new Response('goodbye');
}

export async function POST(request: Request) {
  const data = await request.formData();
  try {
    for (const entry of Array.from(data.entries())) {
      const [key, value] = entry;
      // FormDataEntryValue can either be type Blob or string
      // if its type is object then it's a Blob
      const isFile = typeof value === 'object';

      if (isFile) {
        const blob = value;
        const filename = blob.name;

        //conver the blob to stream
        const buffer = Buffer.from(await blob.arrayBuffer());
        const stream = Readable.from(buffer);

        const client = await clientPromise;
        const db = client.db('planty');
        // let post = await db.collection('image').insertOne({});
      }
    }
  } catch (err) {
    console.error(err);
  }

  return NextResponse.json({ message: 'hello there' }, { status: 200 });
}
