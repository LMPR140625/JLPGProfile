
import photo from '../resources/photo_profile.jpg'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, faWhatsapp)

const PresentationComponent = () =>{
    return(
        <>
            <div className="container lg:container lg:mx-auto py-8">
                <div className="">
                    <div className='pt-35 sm:pl-70 md:pl-170 ssm:pl-25 ssm:pt-18'>
                        <img className='md:object-center sm:object-center ssm:object-center md:object-cover sm:object-cover
                        ssm:object-cover md:drop-shadow-xl/50 sm:drop-shadow-xl/50 ssm:drop-shadow-xl/50
                         drop-shadow-amber-100 sm:drop-shadow-amber-100 ssm:drop-shadow-amber-100 
                        rounded-full md:rounded-full sm:rounded-full ssm:rounded-full 
                        md:w-64 md:h-64 sm:w-64 sm:h-64 ssm:h-64 ssm:w-64' 
                        src={photo}></img>
                    </div>
                    <div className='flex justify-center md:pr-0 sm:px-15 pt-10'>
                        <span className='flex justify-center sm:pl-5 ssm:pl-3'>
                            <a href='https://www.facebook.com/juch10/' target='_blank'><i className="devicon-facebook-plain text-white  hover:text-indigo-500 text-5xl ssm:text-2xl"></i></a></span>
                        <span className='flex justify-center sm:pl-5 ssm:pl-3'>
                            <a href='https://github.com/JLPlataGonzalez' target='_blank'><i className="devicon-github-original text-white hover:text-black text-5xl ssm:text-2xl"></i></a></span>
                        <span className='flex justify-center sm:pl-5 ssm:pl-3'>
                            <a href='https://www.linkedin.com/in/jose-luis-plata-gonz%C3%A1lez-767746234/' target='_blank'><i className="devicon-linkedin-plain ssm:text-2xl text-white hover:text-blue-400 text-5xl"></i></a>
                        </span>
                        {/* <span className='md:px-3'>
                            <FontAwesomeIcon icon={faWhatsapp}/> 55-38-84-48-60</span> */}
                    </div>
                </div>
                <div className="col-span-6 px-25 py-4 ssm:px-7 sm:col-span-1">
                    <div className="rounded  shadow-lg shadow-amber-100 md:w-auto md:h-auto sm:w-auto sm:h-auto ssm:w-auto ssm:h-auto">
                        <div className="px-18 py-8 md:px-5 sm:3 ssm:px-5 ssm:3">
                            <h1 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl ssm:text-7xl lg:text-6xl"> Jose Luis Plata
                            </h1>
                            <h2 className="mb-4 text-3xl font-extrabold ssm:text-4xl text-emerald-300 md:text-3xl lg:text-3xl">  FullStack Developer - Soluciones, desarrollos y aplicaciones
                            </h2>
                        </div>
                        <div className="px-15 pb-20 md:px-5 sm:3  text-amber-200 font-extrabold text-justify text-2xl">
                            <a> Apasionado a la tecnologia y en constante motivacion para enfocar la atencion al detalle
                                en la mejora de procesos, flujos de operacion y rendimiento. 
                            </a>                            
                        </div>                        
                    </div>
                </div>
                
            </div>
        </>
    )   
}

export default PresentationComponent;