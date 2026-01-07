import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
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
    ChevronRight,
    Microscope
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
        { title: 'Analytical Thinking', icon: Microscope },
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
    const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
    const mobileScrollRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Initialize mobile carousel to middle set position
    useEffect(() => {
        if (mobileScrollRef.current && itemsPerPage === 1) {
            const container = mobileScrollRef.current;
            const totalItems = originalSkills.length * 3;
            const itemWidth = container.scrollWidth / totalItems;
            // Start at the beginning of middle set
            container.scrollLeft = originalSkills.length * itemWidth;
        }
    }, [originalSkills.length, itemsPerPage]);

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

    // Handle mobile scroll to update active dot
    const handleMobileScroll = useCallback(() => {
        if (!mobileScrollRef.current) return;
        const container = mobileScrollRef.current;
        const scrollLeft = container.scrollLeft;
        // Use tripled list, so itemWidth is based on 3x skills
        const totalItems = originalSkills.length * 3;
        const itemWidth = container.scrollWidth / totalItems;
        const rawIndex = Math.round(scrollLeft / itemWidth);
        const normalizedIndex = rawIndex % originalSkills.length;

        if (normalizedIndex !== mobileActiveIndex && normalizedIndex >= 0 && normalizedIndex < originalSkills.length) {
            setMobileActiveIndex(normalizedIndex);
        }

        // Reset to middle set if scrolled too far (for seamless loop)
        const middleStart = originalSkills.length * itemWidth;
        const middleEnd = originalSkills.length * 2 * itemWidth;

        if (scrollLeft < middleStart - itemWidth * 0.5) {
            // Scrolled into first set, jump to middle
            container.scrollLeft = scrollLeft + originalSkills.length * itemWidth;
        } else if (scrollLeft > middleEnd - itemWidth * 0.5) {
            // Scrolled into third set, jump to middle
            container.scrollLeft = scrollLeft - originalSkills.length * itemWidth;
        }
    }, [mobileActiveIndex, originalSkills.length]);

    // Custom smooth scroll function for better mobile support
    const smoothScrollTo = useCallback((container, targetLeft, duration = 300) => {
        const startLeft = container.scrollLeft;
        const distance = targetLeft - startLeft;
        const startTime = performance.now();

        // Disable scroll-snap during animation to prevent instant snapping
        const originalSnapType = container.style.scrollSnapType;
        container.style.scrollSnapType = 'none';

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);

            container.scrollLeft = startLeft + (distance * easeOut);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            } else {
                // Re-enable scroll-snap after animation completes
                container.style.scrollSnapType = originalSnapType || '';
            }
        };

        requestAnimationFrame(animateScroll);
    }, []);

    // Mobile navigation functions - scroll the container (infinite loop)
    const mobileNextSlide = useCallback(() => {
        if (!mobileScrollRef.current) return;
        const container = mobileScrollRef.current;
        const totalItems = originalSkills.length * 3;
        const itemWidth = container.scrollWidth / totalItems;
        // Just scroll forward, handleMobileScroll will reset if needed
        smoothScrollTo(container, container.scrollLeft + itemWidth);
    }, [originalSkills.length, smoothScrollTo]);

    const mobilePrevSlide = useCallback(() => {
        if (!mobileScrollRef.current) return;
        const container = mobileScrollRef.current;
        const totalItems = originalSkills.length * 3;
        const itemWidth = container.scrollWidth / totalItems;
        // Just scroll backward, handleMobileScroll will reset if needed
        smoothScrollTo(container, container.scrollLeft - itemWidth);
    }, [originalSkills.length, smoothScrollTo]);

    // Mobile go to specific slide (jumps to middle set position)
    const mobileGoToSlide = useCallback((index) => {
        if (!mobileScrollRef.current) return;
        const container = mobileScrollRef.current;
        const totalItems = originalSkills.length * 3;
        const itemWidth = container.scrollWidth / totalItems;
        // Go to index in middle set
        smoothScrollTo(container, (originalSkills.length + index) * itemWidth);
    }, [originalSkills.length, smoothScrollTo]);

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

                    {/* Desktop Carousel Container - Hidden on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="relative z-10 hidden md:flex items-center justify-center gap-4"
                    >
                        {/* Left Arrow */}
                        <button
                            onClick={prevSlide}
                            className="flex p-3 rounded-full bg-secondary/20 hover:bg-accent hover:text-background text-primary transition-colors duration-150 border border-white/5 z-20"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="flex-1 overflow-hidden px-4">
                            <motion.div
                                className="flex will-change-transform"
                                animate={{ x: `-${currentIndex * slidePercentage}%` }}
                                transition={isResetting ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}
                                onAnimationComplete={handleAnimationComplete}
                            >
                                {skills.map((skill, index) => (
                                    <div
                                        key={`${skill.title}-${index}`}
                                        className="min-w-[33.333%] flex justify-center px-4"
                                    >
                                        <SkillCircle {...skill} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={nextSlide}
                            className="flex p-3 rounded-full bg-secondary/20 hover:bg-accent hover:text-background text-primary transition-colors duration-150 border border-white/5 z-20"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </motion.div>

                    {/* Mobile Carousel Container - Native scroll with tripled list for infinite loop */}
                    <motion.div
                        ref={mobileScrollRef}
                        onScroll={handleMobileScroll}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="md:hidden relative z-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <div className="flex gap-6 pb-4" style={{ width: `${originalSkills.length * 3 * 80}%` }}>
                            {/* Tripled list for infinite scrolling */}
                            {[...originalSkills, ...originalSkills, ...originalSkills].map((skill, index) => (
                                <div
                                    key={`mobile-${skill.title}-${index}`}
                                    className="snap-center flex-shrink-0 w-[80vw] flex justify-center"
                                >
                                    <SkillCircle {...skill} />
                                </div>
                            ))}
                        </div>
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
                                onClick={() => itemsPerPage === 1 ? mobileGoToSlide(idx) : goToSlide(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-150 ${(itemsPerPage === 1 ? mobileActiveIndex : activeIndex) === idx
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
                        <button onClick={mobilePrevSlide} className="p-3 rounded-full bg-secondary/20 hover:bg-accent hover:text-background text-primary transition-colors duration-150">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={mobileNextSlide} className="p-3 rounded-full bg-secondary/20 hover:bg-accent hover:text-background text-primary transition-colors duration-150">
                            <ChevronRight size={24} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
