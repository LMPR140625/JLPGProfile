'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faGlobe, faMobile  } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Resend } from 'resend'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const ContactComponent = () =>{
    const resend = new Resend(import.meta.env.VITE_API_KEY_RESEND);
    
    const handleSend = async ( event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            console.log('dataaaaaaaaaaaeeeeeerrrrhgg',event.currentTarget);

            const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'jlpg.lrm.lmpr@gmail.com',
            subject: `Nuevo correo de {nombre} desde la página web`,
            html: '<p> wjwmplo <strong>first email</strong>!</p>'
            })
            .then(response => {
                console.log(response);
                console.log("Enviado!!",data);
            });
            
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
        <div className="md:px-15 ssm:px-3 py-5 bg-">
            <div className="bg-radial-[at_5%_25%] from-cyan-800 to-teal-800 to-50% font-alan-sans md:px-5 ssm:px-3 py-5 container lg:container lg:mx-auto rounded  shadow-lg  shadow-amber-100 md:w-auto md:h-auto sm:w-auto sm:h-auto ssm:w-auto ssm:h-auto">
                <div className='grid md:grid-cols-4 ssm:grid-cols-1 pb-10'>
                    <div className="px-10 md:px-5 sm:3 ssm:px-5 ssm:3">
                        <h1 className="text-lg ssm:px-0 md:px-10 font-extrabold text-gray-900 hover:text-blue-600 dark:text-white md:text-2xl ssm:text-5xl lg:text-4xl ssm:text-center md:text-left"> Alcances
                        </h1>
                        <h2 className="mb-4 text-xl ssm:px-1 md:px-10 font-extrabold ssm:text-3xl text-emerald-300 md:text-2xl lg:text-2xl ssm:text-center md:text-left">  Plataformas
                        </h2>
                    </div>

                    <div className=" text-orange-300 pt-8 ssm:pl-1 md:pl-0">
                            <p className='text-center text-6xl  text-white hover:text-blue-600'>
                                <FontAwesomeIcon icon={faComputer}>                                    
                                </FontAwesomeIcon>
                            </p>
                            <h4 className="text-xl pt-5 font-extrabold ssm:text-4xl text-emerald-300 md:text-2xl lg:text-2xl text-center">  PC - Desktop
                        </h4>                        
                    </div>

                        <div className=" text-orange-300 pt-12">
                            <p className='text-center text-6xl  text-white hover:text-blue-600'>
                                <FontAwesomeIcon icon={faGlobe}>                                    
                                </FontAwesomeIcon>
                            </p>
                            <h4 className="mb-4 pt-5 text-xl font-extrabold ssm:text-4xl text-emerald-300 md:text-2xl lg:text-2xl text-center">  WEB - Páginas - Sistemas - Portafolios - Servicios
                        </h4>                       
                        </div>  

                        <div className=" text-orange-300 pt-20">
                            <p className='text-center text-6xl  text-white hover:text-blue-600'>
                                <FontAwesomeIcon icon={faMobile}>                                    
                                </FontAwesomeIcon>
                            </p>
                            <h4 className="mb-4 pt-5 text-xl font-extrabold ssm:text-4xl text-emerald-300 md:text-2xl lg:text-2xl text-center pr-10">  MOVIL - Android - iOS - Tablets - Celulares - TV's
                            </h4>                           
                        </div> 
                    
                </div>

                <div className="">
                    <div className='grid ssm:grid-cols-1 md:grid-cols-3'>
                        <div className=" px-5 pb-5 text-orange-300 text-justify">
                            <h4 className="mb-4 text-xl font-extrabold ssm:text-4xl text-emerald-300 md:text-2xl lg:text-2xl text-center">  Proyectos personales
                            </h4>
                            <a  className='text-xl  text-white '> Se busca la mejor alternativa a la hora de seleccionar el stack tecnológico para la implementación de 
                                proyectos pequeños como generación de boletos QR, páginas web, administración del hogar y orientación técnica. 
                            </a>                            
                        </div>

                        <div className="px-5 pb-5 text-orange-300 text-justify">
                            <h4 className="mb-4 text-xl font-extrabold ssm:text-4xl text-emerald-300 md:text-2xl lg:text-2xl text-center">  Proyectos MyPymes o para tu negocio
                        </h4>
                            <a className='text-xl text-white '> Construcción de sistemas adecuados a la operación para mejorar el rendimiento
                                de los procesos acompañados de gráficas e indicadores para la toma de desiciones. 
                            </a>                            
                        </div>  

                        <div className="px-5 pb-5 text-orange-300 text-justify">
                            <h4 className="mb-4 text-xl font-extrabold ssm:text-4xl text-emerald-300 md:text-2xl lg:text-2xl text-center">  Proyectos Especializados
                            </h4>
                            <a className='text-xl text-white '> Implementaciones con computo en la nube ó con IA. 
                            </a>                            
                        </div> 
                    </div>                        
                </div>
            </div>

            <div className="container lg:container lg:mx-auto pt-10">                       
                <form onSubmit={ handleSend} className="transparent w-full h-full text-shadow-emerald-900 border-2 border-dashed mb-4 rounded-full sm:rounded-b-md  hover:text-indigo-700 ">
                    <div className='px-20 pt-17 flex justify-center'>
                            <h1 className='text-shadow-emerald-900 text-4xl font-alan-sans hover:text-amber-200'> Contáctame</h1>
                    </div>
                    <div className='flex justify-center pb-2 px-20 pt-10'>
                        {/* Nombre */}
                        
                        <input placeholder=' • Nombre' name='nombre' className="shadow appearance-none border rounded  py-2 px-3 border-amber-450 text-shadow-emerald-900"></input>
                    </div>
                    <div className='pb-2 px-20 pt-5 flex justify-center'>
                        {/* Correo */}
                        <input type='email' placeholder=' @Correo' name='correo' className="font-alan-sans shadow appearance-none border rounded  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-amber-450 text-shadow-emerald-900"></input>
                    </div>
                        
                    <div className='pb-8 px-20 pt-5 flex justify-center'>
                        {/* Mensaje */}
                        <input placeholder=' ≡ Mensaje (Opcional)' name='mensaje' className="font-alan-sans shadow appearance-none border rounded  py-10 px-3 leading-tight focus:outline-none focus:shadow-outline border-amber-450 text-shadow-emerald-900"></input>
                    </div>

                    <div className='pb-5 px-20 pt-4 flex justify-center'>
                            <button type="submit" className="cursor-pointer font-alan-sans text-emerald-200 bg-emerald-900 hover:bg-indigo-900 hover:text-emerald-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Enviar
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
        
    )
}

export default ContactComponent;