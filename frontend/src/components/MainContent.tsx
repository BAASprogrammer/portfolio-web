import { ContactForm } from './sections/ContactForm';
import { About } from './sections/About';
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from './sections/Skills';
import { PersonalIntro } from './sections/PersonalIntro';

export const MainContent = () => {  return (
    <div className="text-default p-6 lg:p-20">
      <PersonalIntro/>
      <About id = "about"/>
      <Experience id='experience'/>
      <Projects id='projects'/>
      <Skills id='skills'/>
      <ContactForm id='contact'/>
    </div>
  );
};