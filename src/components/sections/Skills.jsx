import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Coffee, Layers, Braces, Database, Layout, GitBranch, ChevronLeft, ChevronRight } from 'lucide-react';

const SkillCircle = ({ percentage, title, icon: Icon }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center group cursor-pointer w-full"
        >
            <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90 overflow-visible">
                    <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-secondary/30"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-accent drop-shadow-[0_0_15px_rgba(216,205,55,0.6)]"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary group-hover:text-accent transition-colors duration-300">
                    <Icon size={32} className="mb-1" />
                    <span className="text-xl font-bold">{percentage}%</span>
                </div>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-primary group-hover:text-accent transition-colors">{title}</h3>
        </motion.div>
    );
};

const Skills = () => {
    const originalSkills = [
        { title: 'JavaScript', percentage: 89, icon: Code2 },
        { title: 'Python', percentage: 75, icon: Terminal },
        { title: 'Java', percentage: 80, icon: Coffee },
        { title: 'React', percentage: 85, icon: Layers },
        { title: 'TypeScript', percentage: 70, icon: Braces },
        { title: 'Node.js', percentage: 65, icon: Database },
        { title: 'Tailwind', percentage: 90, icon: Layout },
        { title: 'Git', percentage: 78, icon: GitBranch },
    ];

    // Triple the list to create buffer zones for infinite scrolling
    const skills = [...originalSkills, ...originalSkills, ...originalSkills];

    // Start in the middle set
    const [currentIndex, setCurrentIndex] = useState(originalSkills.length);
    const [isResetting, setIsResetting] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
        };

        // Initial set
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (isResetting) return;
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isResetting) return;
        setCurrentIndex((prev) => prev - 1);
    };

    const goToSlide = (index) => {
        if (isResetting) return;
        // Map visual index (0-7) to the middle set (8-15)
        setCurrentIndex(originalSkills.length + index);
    };

    const handleAnimationComplete = () => {
        setIsResetting(true);
        // If we've scrolled into the third set (end buffer), jump back to middle set
        if (currentIndex >= originalSkills.length * 2) {
            setCurrentIndex(currentIndex - originalSkills.length);
        }
        // If we've scrolled into the first set (start buffer), jump forward to middle set
        else if (currentIndex < originalSkills.length) {
            setCurrentIndex(currentIndex + originalSkills.length);
        }
        // Small timeout to allow the index update to render before re-enabling transition
        setTimeout(() => setIsResetting(false), 50);
    };

    // Calculate transform
    const slidePercentage = (100 / itemsPerPage);

    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-secondary/10 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-accent/40 relative overflow-hidden">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-30 pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 relative z-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skills</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                    </motion.div>

                    {/* Carousel Container */}
                    <div className="relative z-10 flex items-center justify-center gap-4">

                        {/* Left Arrow */}
                        <button
                            onClick={prevSlide}
                            className="hidden md:flex p-3 rounded-full bg-secondary/20 hover:bg-accent hover:text-background text-primary transition-all duration-300 border border-white/5 backdrop-blur-sm z-20"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="flex-1 overflow-hidden px-4">
                            <motion.div
                                className="flex"
                                animate={{ x: `-${currentIndex * slidePercentage}%` }}
                                transition={isResetting ? { duration: 0 } : { duration: 0.6, ease: "easeInOut" }}
                                onAnimationComplete={handleAnimationComplete}
                            >
                                {skills.map((skill, index) => (
                                    <div
                                        key={`${skill.title}-${index}`}
                                        className="min-w-full md:min-w-[33.333%] flex justify-center px-4"
                                    >
                                        <SkillCircle {...skill} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={nextSlide}
                            className="hidden md:flex p-3 rounded-full bg-secondary/20 hover:bg-accent hover:text-background text-primary transition-all duration-300 border border-white/5 backdrop-blur-sm z-20"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Mobile Navigation Arrows */}
                    <div className="flex md:hidden justify-between mt-8 px-8">
                        <button onClick={prevSlide} className="p-3 rounded-full bg-secondary/20 hover:bg-accent hover:text-background text-primary transition-all"><ChevronLeft size={24} /></button>
                        <button onClick={nextSlide} className="p-3 rounded-full bg-secondary/20 hover:bg-accent hover:text-background text-primary transition-all"><ChevronRight size={24} /></button>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-10">
                        {originalSkills.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${(currentIndex % originalSkills.length) === idx
                                    ? 'bg-accent shadow-[0_0_10px_#d8cd37] scale-125'
                                    : 'bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
