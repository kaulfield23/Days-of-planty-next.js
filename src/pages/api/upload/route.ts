import { NextResponse } from 'next/server';
import { Readable } from 'stream';

export async function POST(req: Request) {
  // get the form data
  const data = await req.formData();

  // map through all the entries
  for (const entry of Array.from(data.entries())) {
    const [key, value] = entry;
    // FormDataEntryValue can either be type `Blob` or `string`
    // if its type is object then it's a Blob
    const isFile = typeof value === 'object';

    if (isFile) {
      const blob = value;
      const filename = blob.name;

      //conver the blob to stream
      const buffer = Buffer.from(await blob.arrayBuffer());
      const stream = Readable.from(buffer);
    }
  }

  // return the response after all the entries have been processed.
  return NextResponse.json({ success: true });
}
