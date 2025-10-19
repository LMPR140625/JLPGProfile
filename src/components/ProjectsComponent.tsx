import milkapp from '../resources/milkBabyApp.jpeg'
const ProjectsComponent = () => {
    return(
        <div className="md:px-15 ssm:px-3 py-25">
            <div className='container lg:container lg:mx-auto text-3xl md:px-5 ssm:px-18  pb-10 text-white'>
                <h1 className="text-white text-shadow-lg text-shadow-emerald-950 font-bold text-4xl'"> Proyectos</h1>
            </div>
           <div className="container lg:container lg:mx-auto ssm:container md:flex ssm:flex ssm:flex-col items-center bg-white border 
           border-gray-200 md:rounded-lg ssm:rounded-lg shadow-lg md:flex-row md:max-w-xl ssm:w-full hover:bg-gray-100
            dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ssm:px-5">
            <img className="object-cover w-full py-5 md:px-5 ssm:px-2 rounded-t-lg h-96 md:h-auto md:w-150 ssm:w-full md:rounded-none md:rounded-s-lg" 
            src={milkapp} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 text-center dark:text-white">Milk Baby App</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify"> Desarrollo de aplicación MAUI multiplataforma testeado en Android, MacOs y iOS
                    con MVVM para el apoyo al recordatorio del suministro de alimento a un bebe. Se establece un horario indicado para generar una seria de operaciones</p>
                    <span className="bg-transparent text-center cursor-pointer hover:text-orange-700 rounded-full px-3 py-1 text-sm font-semibold text-orange-100 mr-2 mb-2">
                        <a href='https://github.com/JLPlataGonzalez/MilkBabyApp.git' target='_blank'>
                            <i className="devicon-git-plain-wordmark text-5xl"></i>
                        </a>
                        
                    </span>
                    <div className='grid md:grid-cols-5 ssm:grid-cols-3'>
                        <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-csharp-plain text-5xl"></i></span>
                        <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-dotnetcore-plain text-5xl"></i></span>
                        <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-sqlite-plain-wordmark text-5xl"></i></span>
                        <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-android-plain text-5xl"></i></span>
                        <span className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold text-orange-300 mr-2 mb-2"><i className="devicon-apple-original text-5xl"></i></span>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default ProjectsComponent;