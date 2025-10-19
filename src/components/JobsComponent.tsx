import nec from '../resources/nec.png'
import lixil from '../resources/lixil.jpeg'
import Case from '../resources/CaseSolutions.png'

const JobsComponent = () =>{
    return(
        <div className="container lg:container lg:mx-auto pt-20">
            <div className='text-3xl pb-10 ssm:px-15'>
                <h1 className='text-white justify-center text-shadow-lg text-shadow-emerald-950 font-bold text-4xl'> Experiencia Laboral</h1>
            </div>
            <div className="grid md:grid-cols-12 gap-4 ssm:grid-cols-3 ssm:px-4">
                <div className="col-span-4">
                    <div className="max-w-sm rounded shadow-lg  shadow-amber-100">
                        <img className="w-full mix-blend-multiply" src={Case} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-yellow-700">
                                Proyecto: Ferrovalle (13/09/2024 - 01/10/2025)</div>
                            <p className="text-amber-200 text-base">
                            Actualizaciones al Sistema Web así como implementaciones para mejorar la eficiencia de procesos inernos. Frontend en MVC, Backend Clean Arq. y Factory Pattern
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-csharp-plain text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-angularjs-plain-wordmark text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-microsoftsqlserver-plain text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-dot-net-plain-wordmark text-5xl"></i></span>
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-yellow-700">
                                Proyecto: SEMARNAT (13/09/2022 - 13/09/2024)</div>
                            <p className="text-amber-200 text-base">
                                Migracíon de sistema interno desarrollado en Genexus a tecnologias OpenSource. Desarrollo de Backend (ApiRest) para la integración 
                                de una arquitectura de microservicios, Apoyo en Frontend.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-dotnetcore-plain  text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-react-original-wordmark  text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-oracle-original text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-mongodb-plain-wordmark text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-docker-plain-wordmark text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-git-plain-wordmark text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-nodejs-plain-wordmark text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-csharp-plain text-5xl"></i></span>
                        </div>
                        </div>
                </div>
                <div className="col-span-4 ssm:pt-5">
                    <div className="max-w-sm rounded -hidden shadow-lg  shadow-amber-100">
                        <img className="w-full mix-blend-multiply" src={lixil} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-yellow-700">Proyecto: Operación</div>
                            <p className="text-amber-200 text-base">
                                Apartado para la administración de las certificaciones de los productos
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-csharp-plain text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-xamarin-original-wordmark text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-microsoftsqlserver-plain text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-oracle-original text-5xl"></i></span>
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-yellow-700">Proyecto: Recursos Humanos</div>
                            <p className="text-amber-200 text-base">
                                Sistema para registrar ideas de los empleados para apoyar los procesos en los que trabajan a diario, programas de premios, etc.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-csharp-plain text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-dot-net-plain-wordmark text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-microsoftsqlserver-plain text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-oracle-original text-5xl"></i></span>
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-yellow-700">Proyecto: Finanzas</div>
                            <p className="text-amber-200 text-base">
                                Actualización a modulos de reporteria del departamento de Finanzas con campos especificos y gráficas de apoyo
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-csharp-plain text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-dot-net-plain-wordmark text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-microsoftsqlserver-plain text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-oracle-original text-5xl"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 ssm:pt-5">
                    <div className="max-w-sm rounded shadow-lg shadow-amber-100">
                        <img className="w-full  mix-blend-multiply" src={nec} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-yellow-700 ">Proyecto: Facturación</div>
                            <p className="text-amber-200 text-base">
                            Implementación de Macros y reportes automatizados de estadistica y probabilidad
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-visualbasic-plain text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-windows8-original text-5xl"></i></span>
                            <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-microsoftsqlserver-plain text-5xl"></i></span>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default JobsComponent;