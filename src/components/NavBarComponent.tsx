import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBarComponent = () =>{
    return(
        
        <nav className='fixed top-0 left-0 w-full bg-[#046051] text-white py-8 shadow-md z-50 '>
                   <ul className='text-xl  sm:text-s md:text-s font-bold text-green-600 fixed md:top-5 ssm:top-2 smd:top-2 md:left-10  
                    ssm:left-35 hover:text-gray-100'>
                        <AnchorLink href="#seccion-presentacion">
                            <i className="devicon-phoenix-original ssm:text-[35px] md:text-4xl hover:text-amber-200"></i>
                        </AnchorLink>
                   </ul>
                    <ul className='hidden md:space-x-9 ssm:space-x-3 ssmd:space-x-15 sm:flex sm:text-xs ssm:flex 
                     md:text-xs md:flex ssm:fixed md:fixed md:top-5 ssm:top-10 md:right-10 ssm:right-7'>
                        {/* <li className="text-xl font-bold text-green-600">
                            <AnchorLink className="hover:text-gray-100 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 "
                             href="#seccion-presentacion">Inicio</AnchorLink> 
                        </li> */}
                        <li className="hover:text-amber-200 md:text-xl ssm:text-[10px] font-bold text-green-600">
                            <AnchorLink href="#seccion-jobs">Experiencia Laboral</AnchorLink> 
                        </li >
                        <li className="hover:text-amber-200 md:text-xl ssm:text-[10px] font-bold text-green-600">
                            <AnchorLink href="#seccion-skills">Skills</AnchorLink> 
                        </li>
                        <li className="hover:text-amber-200 md:text-xl ssm:text-[10px] font-bold text-green-600">
                            <AnchorLink href="#seccion-projects">Proyectos</AnchorLink> 
                        </li>
                        
                        <li className="hover:text-amber-200 md:text-xl ssm:text-[10px] font-bold text-green-600">
                            <AnchorLink href="#seccion-contact">Contacto</AnchorLink> 
                        </li>
                    </ul>
                </nav>
    )
}

export default NavBarComponent;