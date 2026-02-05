import './App.css'
import { Header } from './layout/layout/header/Header';
import { Main } from './layout/layout/main/Main';
import { Skills } from './layout/layout/sections/skills/Skills';
import { Experience } from './layout/layout/sections/experience/Experience';
import { AboutMe } from './layout/layout/sections/aboutMe/AboutMe';
import { Projects } from './layout/layout/sections/projects/Projects';
import { Testimonials } from './layout/layout/sections/testimonials/Testimonials';
import { Contacts } from './layout/layout/sections/contacts/Contacts';
import { Footer } from './layout/layout/Footer';

function App() {
    return (
        <div className="App">
           <Header/>
           <Main/>
           <Skills/>
           <Experience/>
           <AboutMe/>
           <Projects/>
           <Testimonials/>
           <Contacts/>
           <Footer/>
        </div>
    )
}

export default App
