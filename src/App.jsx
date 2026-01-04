import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Footer from './components/layout/Footer';


function App() {
    return (
        <div className="font-sans text-primary">

            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <Education />
            </main>
            <Footer />
        </div>
    );
}

export default App;
