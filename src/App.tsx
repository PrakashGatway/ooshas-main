import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats, { AboutOoshas, GlobalCitizensSection } from './components/Stats';
import WhatWeOffer , { StudyGlobalSection1,StudyGlobalSection2 } from './components/WhatWeOffer';
import Destinations from './components/Destinations';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AboutOoshas />
        <WhatWeOffer />
        <StudyGlobalSection1/>
        <StudyGlobalSection2/>
        <GlobalCitizensSection />
      </main>
      <Footer />
    </div>
  );
}
