// api/getData.ts

import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const clientId = 'YOUR_CLIENT_ID'; // 替换为你的实际 Client ID
    const clientSecret = 'YOUR_CLIENT_SECRET'; // 替换为你的实际 Client Secret

    // const url = 'https://openapi.naver.com/v1/search/shop.xml?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&sort=sim';
    const url = 'https://ddchsp.com/whats19.html';

    const response = await fetch(url, {
      method: 'GET',
      // headers: {
      //   'X-Naver-Client-Id': clientId,
      //   'X-Naver-Client-Secret': clientSecret,
      // },
    });

    if (response.ok) {
      const data = await response.text();
      res.status(200).send(data);
    } else {
      console.error('Error fetching data:', response.status);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
