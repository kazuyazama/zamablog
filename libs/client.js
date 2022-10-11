//microcms 管理パスなど

import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'zamablog-nextjs',
  apiKey: process.env.API_KEY,
});

