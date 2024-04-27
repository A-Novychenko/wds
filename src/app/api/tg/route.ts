import { NextResponse } from 'next/server';

import axios from 'axios';

const tg = axios.create({
  timeout: 3000,
});

export async function POST(req: Request) {
  const { TOKEN, METHOD, TG_URL, CHAT_ID } = process.env;
  const BASE_URL = `${TG_URL}${TOKEN}/${METHOD}`;

  const msg = await req.json();

  await tg.post(BASE_URL, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: msg,
  });

  return NextResponse.json({
    status: 200,
  });
}
