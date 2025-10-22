import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { Resend } from 'resend';

const resend = new Resend(process.env.VITE_API_KEY_RESEND);

export async function httpSendEmail(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.text() || await request.text() || 'world';
    const { data, error } = await resend.emails.send({
                            from: 'Acme <onboarding@resend.dev>',
                            to: 'jlpg.lrm.lmpr@gmail.com',
                            subject: `Nuevo correo de  desde la página web`,
                            html: `<p>Se recibió el mensaje ${request.body} de parte de  del correo }</p>`,
                            text:''
  });

  if (error) {
    console.error({ error });
  }

  console.log({ data });

    return { body: `Hello, ${name}!` };
};

app.http('httpSendEmail', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: httpSendEmail
});
