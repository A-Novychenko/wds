export const makeTgMsg = (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const { name, email, message } = data;
  const msg = `<b>Повідомлення із сайту</b>\n<b>Імʼя: ${name}</b>\n<b>Емейл: ${email}</b>\n\n<b>Повідомлення: ${message}</b>`;
  return msg;
};
