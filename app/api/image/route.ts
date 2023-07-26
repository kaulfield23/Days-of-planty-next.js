import clientPromise from 'lib/mongo';
import { plantImages } from 'lib/mongo/models';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return new Response('goodbye');
}

export async function POST(request: Request) {
  const data = await request.formData();
  try {
    for (const entry of Array.from(data.entries())) {
      const [key, value] = entry;

      if (key === 'image') {
        console.info(`key = ${key} is probably image blob`);
        const blob = value as Blob;
        // const filename = blob.name;
        // console.info(`filename = ${filename}`);

        const client = await clientPromise;
        const db = client.db('planty');
        const imageCollection = db.collection('image');

        //conver the blob to stream
        const buffer = Buffer.from(await blob.arrayBuffer());
        // const stream = Readable.from(buffer);

        const imageInfo = {
          image: buffer,
          contentType: blob.type,
          filename: blob.name,
        };
        const uploadImage = new plantImages(imageInfo);
        await imageCollection.insertOne(uploadImage);
      }
    }
  } catch (err) {
    console.error(err);
  }

  return NextResponse.json({ message: 'hello there' }, { status: 200 });
}
