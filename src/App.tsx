import PresentationComponent from './components/PresentationComponent'
import JobsComponent from './components/JobsComponent'
import NavBarComponent from './components/NavBarComponent'
import ContactComponent from './components/ContactComponent'
import SkillsComponent from './components/SkillsComponent'
import ProjectsComponent from './components/ProjectsComponent'


function App() {

  return (
      
    <>
    <div className='bg-radial-[at_25%_25%] from-teal-950 to-teal-400 to-100% font-alan-sans md:w-full ssm:w-full' >
      <NavBarComponent />
      <div id='seccion-presentacion'>
        <PresentationComponent  />
      </div>
      <div id='seccion-jobs'>
        <JobsComponent />
      </div>
      <div id='seccion-skills'>
        <SkillsComponent />
      </div>
      <div id='seccion-projects'>
        <ProjectsComponent />
      </div>
      <div id='seccion-contact'>
        <ContactComponent />
      </div>
      
      
      
      
      
      
    </div>
      
    </>
  )
}

export default App
