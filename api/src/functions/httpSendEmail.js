const { app } = require('@azure/functions');

app.http('httpSendEmail', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';
       

        const { data, error } = await resend.emails.send({
                            from: 'Acme <onboarding@resend.dev>',
                            to: 'jlpg.lrm.lmpr@gmail.com',
                            subject: `Nuevo correo de  desde la página web`,
                            html: `<p>Se recibió el mensaje ${request.body} de parte de  del correo }</p>`,
                            text:''
  });
    }
});
