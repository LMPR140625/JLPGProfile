import { useState} from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)



const SkillsComponent = () => {
    const [isFlippedBack1, setIsFlippedBack1] = useState(false)
    const [isFlippedBack2, setIsFlippedBack2] = useState(false)
    const [isFlippedBack3, setIsFlippedBack3] = useState(false)
    const [isFlippedBack4, setIsFlippedBack4] = useState(false)

    const [isFlippedFront1, setIsFlippedFront1] = useState(false)
    const [isFlippedFront2, setIsFlippedFront2] = useState(false)
    const [isFlippedFront3, setIsFlippedFront3] = useState(false)
    const [isFlippedFront4, setIsFlippedFront4] = useState(false)

     const [isFlippedBD1, setIsFlippedBD1] = useState(false)
    const [isFlippedBD2, setIsFlippedBD2] = useState(false)
    const [isFlippedBD3, setIsFlippedBD3] = useState(false)
    const [isFlippedBD4, setIsFlippedBD4] = useState(false)

    const [isFlippedI1, setIsFlippedI1] = useState(false)
    const [isFlippedI2, setIsFlippedI2] = useState(false)
    const [isFlippedI3, setIsFlippedI3] = useState(false)
    const [isFlippedI4, setIsFlippedI4] = useState(false)

    return( 
        <>
        <div className='container lg:container lg:mx-auto py-8 text-3xl pt-20 ssm:px-28 text-white'>
            <h1 className="text-white text-shadow-lg text-shadow-emerald-950 font-bold text-4xl'"> Skills <p className="text-red-600 text-sm">Click para ver detalle</p></h1>
            </div>
        <div className="container lg:container lg:mx-auto py-1 ssm:px-5">
            <div className="grid md:grid-cols-12 ssm:grid-cols-6 md:gap-4 ssm:gap-3 ">
                <div className="col-span-3 ssm:col-span-3 ">
                    <div className="w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer ">
                        <div className={`relative w-full h-full transition-transform duration-800 transform-3d  ${
                                        isFlippedBack1 ? '[transform:rotateY(180deg)]' : ''
                                        }`} onClick={() => setIsFlippedBack1(!isFlippedBack1)}>    
                            {/* Cara Frontal */}
                            {<div  className="absolute md:w-full ssm:w-full md:h-full ssm:h-full bg-cyan-900 text-amber-200 
                             overflow-hidden  shadow-amber-100 rounded-lg shadow-md md:flex ssm:flex items-center justify-center
                              backface-hidden">
                                        <i className="devicon-csharp-plain-wordmark md:text-8xl ssm:text-4xl"></i>
                            </div>}
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[10px]">
                                        • POO • MVC • MVVM • CAPAS • INTERFAZ • FACTORY • SINGLETON • STRATEGY • CLEAN ARQ
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedBack2(!isFlippedBack2)}>
                        <div className={`relative w-full h-full transition-transform duration-800 overflow-visible transform-3d ${
                                        isFlippedBack2 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-900 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                 <i className="devicon-dotnetcore-plain md:text-8xl ssm:text-4xl"></i>
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[10px]">
                                        • APIREST • ADO.NET • ASPX • WS • WCF • WPF • WINFORMS • XAMARIN • MAUI • DAPPER • JWT • SWAGGER
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>


                <div className="col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedBack3(!isFlippedBack3)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedBack3 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-900 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                 <i className="devicon-visualbasic-plain md:text-8xl ssm:text-4xl"></i>
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[15px]">
                                        • WINFORMS • ASPX • VBA
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedBack4(!isFlippedBack4)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedBack4 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-900 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                 <i className="devicon-nodejs-plain-wordmark md:text-8xl ssm:text-4xl"></i>
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[15px]">
                                        • API • JWT • EXPRESS • PRISMA ORM • REVERSE PROXY
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
            
        <div className="container lg:container lg:mx-auto py-3 ssm:px-5">
            <div className="grid md:grid-cols-12 ssm:grid-cols-6 gap-4">
                <div className="col-span-3 ssm:col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedFront1(!isFlippedFront1)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedFront1 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-800 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                 <i className="devicon-react-original-wordmark md:text-8xl ssm:text-4xl"></i>
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[12px]">
                                        • HOOKS • COMPONENTS • REQUESR/RESPONSE • MAQUETACION
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedFront2(!isFlippedFront2)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedFront2 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-800 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                 <i className="devicon-angularjs-plain-wordmark md:text-8xl ssm:text-4xl"></i>
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[15px]">
                                        • MVC • SCOPE • ROOTSCOPE • DIRECTIVAS
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>


                <div className="col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedFront3(!isFlippedFront3)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedFront3 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-800 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                 <i className="devicon-javascript-plain md:text-8xl ssm:text-4xl"></i>
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[12px]">
                                        REQUEST/RESPONSE • FUNCIONES • ESTRUCTURAS DE DATOS
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedFront4(!isFlippedFront4)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedFront4 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-800 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                 <i className="devicon-bootstrap-plain-wordmark md:text-8xl ssm:text-5xl"></i>
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                   <i className="devicon-tailwindcss-plain-wordmark text-amber-200 ssm:text-8xl md:text-9xl "></i>
                            </div>}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="container lg:container lg:mx-auto py-1 ssm:px-5">
            <div className="grid md:grid-cols-12 ssm:grid-cols-6 gap-4">
                <div className="col-span-3 ssm:col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedBD1(!isFlippedBD1)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedBD1 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-700 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                <i className="devicon-microsoftsqlserver-plain-wordmark md:text-8xl ssm:text-4xl"></i> 
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[10px]">
                                        • DML • DDL • STORE PROCEDURES • CURSORES • TABLAS TEMPORALES • TRIGGERS • SUBCONSULTAS • RESPALDOS
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedBD2(!isFlippedBD2)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedBD2 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-700 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                 <i className="devicon-oracle-original md:text-8xl ssm:text-4xl"></i>
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[15px]">
                                        • DML • DDL • STORE PROCEDURES • CURSORES • SUBCONSULTAS
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>


                <div className="col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedBD3(!isFlippedBD3)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedBD3 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-700 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                 <i className="devicon-sqlite-plain-wordmark md:text-8xl ssm:text-4xl"></i>
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[15px]">
                                        CONFIGURACION • DDL • DML
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedBD4(!isFlippedBD4)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedBD4 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-700 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                 <i className="devicon-mongodb-plain-wordmark md:text-8xl ssm:text-4xl"></i>
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[12px]">
                                        • CRUD • FILTROS • DOCUMENTAL • CONFIGURACION EN DOCKER
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="container lg:container lg:mx-auto py-3 ssm:px-5">
            <div className="grid md:grid-cols-12 ssm:grid-cols-6 gap-4">
                <div className="col-span-3 ssm:col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedI1(!isFlippedI1)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedI1 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-600 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                <i className="devicon-docker-plain-wordmark md:text-8xl ssm:text-4xl"></i> 
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[12px]">
                                        • IMAGES • DOCKERFILES • VOLUMES • COMPOSE • CONFIGURACIONES
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedI2(!isFlippedI2)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedI2 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-600 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                 <i className="devicon-git-plain-wordmark md:text-8xl ssm:text-4xl"></i>
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[12px]">
                                        • GITLAB • GITHUB • COMMIT • BRANCH • PUSH • PULL • CLONE • REBASE
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>


                <div className="col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedI3(!isFlippedI3)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedI3 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-600 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                 <i className="devicon-azure-plain-wordmark md:text-8xl ssm:text-5xl"></i>
                            </div>
                            {/* Cara Posterior */}
                           {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    { <p className="px-2 text-center ssm:text-[12px]">
                                        • DEVOPS • REPOSITORIES • PULL REQUEST • WEBAPPS • ACR
                                    </p> }
                            </div>}
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="relative w-64 h-50 ssm:w-32 ssm:h-32 sm:w-32 sm:h-32 sm:text-xs perspective-1000 cursor-pointer" onClick={() => setIsFlippedI4(!isFlippedI4)}>
                        <div className={`relative w-full h-full transition-transform duration-800  transform-3d ${
                                        isFlippedI4 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                                        }`}>
                            {/* Cara Frontal */}
                            <div className="absolute w-full h-full bg-cyan-600 text-amber-200  overflow-hidden  shadow-amber-100 rounded-lg shadow-md flex items-center justify-center backface-hidden">
                                 <i className="devicon-tortoisegit-plain md:text-8xl ssm:text-4xl"></i>
                            </div>
                            {/* Cara Posterior */}
                            {<div className="absolute w-full h-full bg-teal-800 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180 backface-hidden">
                                    
                                    <p className="px-2 text-center ssm:text-[12px]">
                                        • PULL • PUSH • CLONE • COMMIT • COMPARE • CONFLICTOS 
                                    </p>
                            </div>}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default SkillsComponent;