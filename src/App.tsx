import './App.css'
import { Header } from './layout/header/header/Header';
import { Main } from './layout/header/sections/Main';
import { Skills } from './layout/header/sections/skills/Skills';
import { Experience } from './layout/header/sections/experience/Experience';
import { AboutMe } from './layout/header/sections/aboutMe/AboutMe';
import { Projects } from './layout/header/sections/projects/Projects';
import { Testimonials } from './layout/header/sections/testimonials/Testimonials';
import { Contacts } from './layout/header/sections/contacts/Contacts';
import { Footer } from './layout/header/Footer';

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
