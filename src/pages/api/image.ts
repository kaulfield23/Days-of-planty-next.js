import type { NextApiRequest, NextApiResponse } from 'next';

export default async function userHandler(
  request: NextApiRequest,
  response: NextApiResponse<any>
) {
  const { query, method } = request;
  const id = parseInt(query.id as string, 10);
  const name = query.name as string;

  // const data = await request.formData();
  switch (method) {
    case 'POST':
      // Update or create data in your database
      response.status(200).json({ id, name: name || `User ${id}` });
      break;
    default:
      response.setHeader('Allow', ['POST']);
      response.status(405).end(`Method ${method} Not Allowed`);
  }
}
