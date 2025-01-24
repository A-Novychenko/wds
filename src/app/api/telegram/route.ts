import { NextResponse } from 'next/server';

import axios from 'axios';

export const POST = async (req: Request) => {
  const { TG_TOKEN, TG_METHOD, TG_URL, TG_CHAT_ID } = process.env;

  const BASE_URL = `${TG_URL}${TG_TOKEN}/${TG_METHOD}`;

  const msg = await req.json();

  const payload = { parse_mode: 'html', chat_id: TG_CHAT_ID, text: msg };

  try {
    await axios.post(BASE_URL, payload);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
