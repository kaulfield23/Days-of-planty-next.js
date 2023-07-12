import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';

export default async function userHandler(
  request: NextApiRequest,
  response: NextApiResponse<any>
) {
  // get the form data
  console.info(`HEADERS`);
  console.log(request.headers);
  console.info(`body`);
  // console.log(request.blob);
  // try {
  //   console.log('Read data');
  //   const data = await request.formData();
  //   console.log('Read data done!');
  // } catch (err) {
  //   console.error(err);
  // }

  const data = await new Promise((resolve, reject) => {
    console.info('formidable');
    const form = formidable();

    form.parse(request, (err, fields, files) => {
      console.info('Files');
      console.info(files);

      if (err) reject({ err });
      resolve({ err, fields, files });
    });
  });

  // for (const entry of Array.from(data.entries())) {
  //   const [key, value] = entry;
  //   // FormDataEntryValue can either be type `Blob` or `string`
  //   // if its type is object then it's a Blob
  //   const isFile = typeof value === 'object';

  //   if (isFile) {
  //     console.log('FILE');
  //     const blob = value;
  //     const filename = blob.name;

  //     //conver the blob to stream
  //     const buffer = Buffer.from(await blob.arrayBuffer());
  //     // const stream = Readable.from(buffer);
  //   }
  // }
  response.status(200).json({ hello: 'hello', body: data });
}
