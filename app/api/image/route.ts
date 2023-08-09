import clientPromise from 'lib/mongo';
import { plantImages } from 'lib/mongo/models';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.formData();
  try {
    for (const entry of Array.from(data.entries())) {
      const [key, value] = entry;

      if (key === 'image') {
        const blob = value as File;
        const client = await clientPromise;
        const db = client.db('planty');
        const imageCollection = db.collection('image');

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
    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (err) {
    console.error(err);
  }

  return NextResponse.json(
    { message: 'Something went wrong' },
    { status: 400 }
  );
}
