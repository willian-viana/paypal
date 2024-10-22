import type { NextApiRequest, NextApiResponse } from 'next'
import mock from '../../mock.json'
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  // res.status(500).json({error: 'error'}) // error handling test
  res.status(200).json(mock)
}