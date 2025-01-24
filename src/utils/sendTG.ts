export const sendTG = async (msg: string) => {
  try {
    const res = await fetch(`/api/telegram`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(msg),
    });

    return await res.json();
  } catch (e) {
    console.log('e-sendTG', e);
  }
};
