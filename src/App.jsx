import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollTopButton from './components/layout/ScrollTopButton';
import Hero from './components/sections/Hero';
import Company from './components/sections/Company';
import Business from './components/sections/Business';
import Capability from './components/sections/Capability';
import CtaBand from './components/sections/CtaBand';
import Facilities from './components/sections/Facilities';
import Process from './components/sections/Process';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        본문 바로가기
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Company />
        <Business />
        <Capability />
        <Facilities />
        <CtaBand />
        <Process />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}
