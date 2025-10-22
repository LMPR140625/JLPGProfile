import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  nombre: string;
  correo: string;
  mensaje: string;
}

const ContactEmail = ({ nombre, correo, mensaje 
                      } : ContactEmailProps) => (
                      <Html>
                        <Head />
                        <Preview>Nuevo correo!!</Preview>
                        <Body className=''>
                          <Container >
                            <Heading >Coming Soon.</Heading>
                            <Text >
                              Nuevo correo desde la página web ....
                              {nombre} con el {correo} nos envió el siguiente correo: \n
                              {mensaje}
                            </Text>
                          </Container>
                        </Body>
                      </Html>
                    );

export default ContactEmail;