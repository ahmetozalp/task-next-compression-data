import zlib from 'zlib';
import { NextApiRequest, NextApiResponse } from 'next';

export const compressionMiddleware = (handler) => async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Sunucu tarafında gelen veriyi sıkıştır
    const compressedData = zlib.gzipSync(JSON.stringify({ message: 'Merhaba, bu bir örnek veridir.' }));

    // Sıkıştırılmış veriyi yanıt olarak istemciye gönder
    res.setHeader('Content-Encoding', 'gzip');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(compressedData);
  } catch (error) {
    console.error('Middleware hatası:', error);
    res.status(500).end('Internal Server Error');
  }
};
