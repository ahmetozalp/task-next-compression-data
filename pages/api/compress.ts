import { NextApiRequest, NextApiResponse } from 'next';
import { compressionMiddleware } from '../middleware/compressionMiddleware';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Veri başarıyla sıkıştırıldı ve gönderildi.' });
};

export default compressionMiddleware(handler);