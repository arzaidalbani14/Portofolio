import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    ClipboardList,
    Boxes,
    Brain,
    Atom,
    Code2,
    Lightbulb,
    Users,
    Sparkles,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

// Custom Git Icon - simple Y branch with dots
const GitIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={{ transform: 'rotate(150deg)' }}
    >
        <path d="M12 22V12M12 12L6 4M12 12L18 4" />
        <circle cx="6" cy="4" r="2.5" fill="currentColor" />
        <circle cx="18" cy="4" r="2.5" fill="currentColor" />
    </svg>
);

// Optimized SkillCircle - simplified animations
const SkillCircle = React.memo(({ title, icon: Icon }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    return (
        <div className="flex flex-col items-center group cursor-pointer w-full">
            <div className="relative w-40 h-40 flex items-center justify-center">
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
                    <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-accent"
                        strokeDasharray={circumference}
                        strokeDashoffset="0"
                        style={{
                            filter: 'drop-shadow(0 0 10px rgba(216,205,55,0.5))'
                        }}
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary group-hover:text-accent transition-colors duration-150">
                    <Icon size={40} />
                </div>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-150 text-center">{title}</h3>
        </div>
    );
});

const Skills = () => {
    const originalSkills = useMemo(() => [
        { title: 'Web Development', icon: Globe },
        { title: 'Requirement Analysis', icon: ClipboardList },
        { title: 'OOP Programming', icon: Boxes },
        { title: 'Analytical Thinking', icon: Brain },
        { title: 'React Understanding', icon: Atom },
        { title: 'JavaScript Understanding', icon: Code2 },
        { title: 'Problem Solving', icon: Lightbulb },
        { title: 'Teamwork', icon: Users },
        { title: 'Basic Git', icon: GitIcon },
        { title: 'AI Prompting', icon: Sparkles },
    ], []);

    // Triple the list for infinite scrolling
    const skills = useMemo(() =>
        [...originalSkills, ...originalSkills, ...originalSkills],
        [originalSkills]
    );

    const [currentIndex, setCurrentIndex] = useState(originalSkills.length);
    const [isResetting, setIsResetting] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = useCallback(() => {
        if (isResetting) return;
        setCurrentIndex((prev) => prev + 1);
    }, [isResetting]);

    const prevSlide = useCallback(() => {
        if (isResetting) return;
        setCurrentIndex((prev) => prev - 1);
    }, [isResetting]);

    const goToSlide = useCallback((index) => {
        if (isResetting) return;
        setCurrentIndex(originalSkills.length + index);
    }, [isResetting, originalSkills.length]);

    const handleAnimationComplete = useCallback(() => {
        setIsResetting(true);
        if (currentIndex >= originalSkills.length * 2) {
            setCurrentIndex(currentIndex - originalSkills.length);
        } else if (currentIndex < originalSkills.length) {
            setCurrentIndex(currentIndex + originalSkills.length);
        }
        requestAnimationFrame(() => setIsResetting(false));
    }, [currentIndex, originalSkills.length]);

    const slidePercentage = 100 / itemsPerPage;
    const activeIndex = currentIndex % originalSkills.length;

    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-secondary/10 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-accent/40 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-30 pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-center mb-12 relative z-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skills</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                    </motion.div>

                    {/* Carousel Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="relative z-10 flex items-center justify-center gap-4"
                    >
                        {/* Left Arrow */}
                        <button
                            onClick={prevSlide}
                            className="hidden md:flex p-3 rounded-full bg-secondary/20 hover:bg-accent hover:text-background text-primary transition-colors duration-150 border border-white/5 z-20"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="flex-1 overflow-hidden px-4 touch-pan-y">
                            <motion.div
                                className="flex will-change-transform cursor-grab active:cursor-grabbing"
                                animate={{ x: `-${currentIndex * slidePercentage}%` }}
                                transition={isResetting ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}
                                onAnimationComplete={handleAnimationComplete}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.1}
                                onDragEnd={(event, info) => {
                                    const threshold = 50;
                                    if (info.offset.x < -threshold) {
                                        nextSlide();
                                    } else if (info.offset.x > threshold) {
                                        prevSlide();
                                    }
                                }}
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
                            className="hidden md:flex p-3 rounded-full bg-secondary/20 hover:bg-accent hover:text-background text-primary transition-colors duration-150 border border-white/5 z-20"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </motion.div>

                    {/* Dots Navigation - show first on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex justify-center gap-3 mt-10 md:order-last"
                    >
                        {originalSkills.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-150 ${activeIndex === idx
                                    ? 'bg-accent shadow-[0_0_8px_#d8cd37] scale-125'
                                    : 'bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </motion.div>

                    {/* Mobile Navigation Arrows - show after dots on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="flex md:hidden justify-center gap-6 mt-6"
                    >
                        <button onClick={prevSlide} className="p-3 rounded-full bg-secondary/20 hover:bg-accent hover:text-background text-primary transition-colors duration-150">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextSlide} className="p-3 rounded-full bg-secondary/20 hover:bg-accent hover:text-background text-primary transition-colors duration-150">
                            <ChevronRight size={24} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
