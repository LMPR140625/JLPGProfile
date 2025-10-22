import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_API_KEY_RESEND);

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
                            to: 'jlpg.lrm.lmpr@gmail.com',
                            subject: `Nuevo correo de ... desde la página web`,
                            html: `<p>Se recibió el mensaje .... de parte de ... del correo ...</p>`,
                            text:''
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();