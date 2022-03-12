import { NextApiRequest, NextApiResponse } from 'next';
import { users } from '../../mock/users';

// TODO integrate with this endpoint
// https://randomuser.me/api/?results=10&page=1&inc=id,picture,name,phone,dob,email&seed=foobar&name=betty
export default function UserHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query) {
    res.status(200).json(users);
  } else {
    res.status(404).json({
      message: 'need query params on query string'
    });
  }
}
