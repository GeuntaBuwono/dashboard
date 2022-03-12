import { NextApiRequest, NextApiResponse } from 'next';

export default async function UserHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query) {
    const reqData = await fetch(`https://randomuser.me/api/?results=30`);
    const data = await reqData.json();

    res.status(200).json(data);
  } else {
    res.status(404).json({
      message: 'need page on query string'
    });
  }
}
