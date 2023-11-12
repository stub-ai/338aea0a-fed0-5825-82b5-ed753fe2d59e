import type { NextApiRequest, NextApiResponse } from 'next'

let counter = 0;

type Data = {
  count: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    counter++;
    res.status(200).json({ count: counter });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}