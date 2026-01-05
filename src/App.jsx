import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Footer from './components/layout/Footer';
import BackgroundLines from './components/common/BackgroundLines';

function App() {
    return (
        <div className="font-sans text-primary custom-cursor">
            <BackgroundLines />

            <div className="relative z-10">
                <Navbar />
                <main>
                    <Hero />
                    <Skills />
                    <Projects />
                    <Education />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
