// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

const ContactComponent = () =>{
    return(
        <>
                <div className="container lg:container lg:mx-auto">                       
                    <form className="transparent w-full h-full text-shadow-emerald-900 border-2 border-dashed mb-4 rounded-full sm:rounded-b-md  hover:text-indigo-700 ">
                        <div className='px-20 pt-17 flex justify-center'>
                             <h1 className='text-shadow-emerald-900 text-4xl font-alan-sans hover:text-amber-200'> Contáctame</h1>
                        </div>
                        <div className='flex justify-center pb-2 px-20 pt-10'>
                            {/* Nombre */}
                            
                            <input placeholder=' • Nombre' className="shadow appearance-none border rounded  py-2 px-3 border-amber-450 text-shadow-emerald-900"></input>
                        </div>
                        <div className='pb-2 px-20 pt-5 flex justify-center'>
                            {/* Correo */}
                            <input type='email' placeholder=' @Correo' className="font-alan-sans shadow appearance-none border rounded  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-amber-450 text-shadow-emerald-900"></input>
                        </div>
                            
                        <div className='pb-8 px-20 pt-5 flex justify-center'>
                            {/* Mensaje */}
                            <input placeholder=' ≡ Mensaje (Opcional)' className="font-alan-sans shadow appearance-none border rounded  py-10 px-3 leading-tight focus:outline-none focus:shadow-outline border-amber-450 text-shadow-emerald-900"></input>
                        </div>

                        <div className='pb-5 px-20 pt-4 flex justify-center'>
                                <button type="submit" className="cursor-pointer font-alan-sans text-emerald-200 bg-emerald-900 hover:bg-indigo-900 hover:text-emerald-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Enviar
                            </button>
                        </div>
                        
                    </form>
                </div>
        </>
        
    )
}

export default ContactComponent;