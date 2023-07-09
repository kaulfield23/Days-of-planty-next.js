import type { NextApiRequest, NextApiResponse } from 'next';

export default async function userHandler(
  request: NextApiRequest,
  response: NextApiResponse<any>
) {
  console.info(JSON.stringify(request));
  console.info(request.headers);
  const { query, method } = request;
  const imgData = await request.body;

  if (imgData) {
    for (const entry of Array.from(imgData.entries())) {
      // const [key, value] = entry;
      // const isFile = typeof value == 'object';
      // if (isFile) {
      //   const blob = value;
      //   const filename = blob.name;
      //   console.log(filename, ' filename?');
      // }
    }
    response.status(200).json({ hello: 'hello' });
    // const data = await request.formData();
    // switch (method) {
    //   case 'POST':
    //     // Update or create data in your database
    //     response.status(200).json({ id, name: name || `User ${id}` });
    //     break;
    //   default:
    //     response.setHeader('Allow', ['POST']);
    //     response.status(405).end(`Method ${method} Not Allowed`);
    // }
  }
}
