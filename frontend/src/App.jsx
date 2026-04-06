import './styles/global.css';
import { useScrollReveal } from './hooks';

import Navbar            from './components/Navbar';
import HeroSection       from './components/HeroSection';
import AboutSection      from './components/AboutSection';
import SkillsSection     from './components/SkillsSection';
import ProjectsSection   from './components/ProjectsSection';
import EducationSection  from './components/EducationSection';
import ContactSection    from './components/ContactSection';
import Footer            from './components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
