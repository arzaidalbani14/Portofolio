import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/images/profile/profile.jpg';

const Hero = () => {

    return (
        <section id="#" className="min-h-[600px] py-32 flex items-center justify-center overflow-hidden relative">
            {/* Background blobs for "rich aesthetics" */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-medium text-accent mb-2"
                        >
                            Welcome to my Portfolio
                        </motion.h2>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-5xl md:text-6xl font-bold text-primary mb-6 whitespace-nowrap"
                        >
                            Hi! I'm Arzaid Albani
                            <motion.span
                                className="text-secondary brightness-125 block mt-2 relative text-4xl md:text-5xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                {/* Invisible placeholder to reserve space for longest text */}
                                <span className="invisible whitespace-nowrap" aria-hidden="true">Full Stack Developer</span>
                                <span className="absolute left-0 top-0 whitespace-nowrap">
                                    <Typewriter
                                        texts={[
                                            "Web Developer",
                                            "Web Designer",
                                            "Front End Developer",
                                            "Back End Developer",
                                            "Full Stack Developer"
                                        ]}
                                        delay={70}
                                        deleteDelay={40}
                                        waitTime={800}
                                    />
                                </span>
                            </motion.span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                        >
                            Informatics and Computer Engineering Education student with basic to intermediate understanding of software development. Experienced in learning web development, backend development, and database management, with solid knowledge of programming concepts and programming languages .
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex gap-4 justify-center md:justify-start"
                        >
                            <motion.a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.querySelector('#contact');
                                    if (element) {
                                        const offsetTop = element.offsetTop - 80;
                                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                                    }
                                }}
                                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 153, 144, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-accent text-background rounded-full font-semibold border-2 border-transparent hover:bg-transparent hover:text-accent hover:border-accent transition-all duration-300 cursor-pointer"
                            >
                                Contact Me
                            </motion.a>
                            <motion.a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.querySelector('#projects');
                                    if (element) {
                                        const offsetTop = element.offsetTop - 80;
                                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                                    }
                                }}
                                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(225, 255, 187, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-transparent text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-background transition-all duration-300 cursor-pointer"
                            >
                                View Projects
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 flex justify-center md:justify-end"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

// Advanced Typewriter Component with Stop Logic
const Typewriter = ({ texts, delay = 100, deleteDelay = 50, waitTime = 2000 }) => {
    const [currentText, setCurrentText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [loopNum, setLoopNum] = React.useState(0);
    const [typingSpeed, setTypingSpeed] = React.useState(delay);
    const [isStopped, setIsStopped] = React.useState(false);

    React.useEffect(() => {
        if (isStopped) return;

        const handleTyping = () => {
            const i = loopNum % texts.length;
            const fullText = texts[i];
            const isLastItem = i === texts.length - 1;

            setCurrentText(isDeleting
                ? fullText.substring(0, currentText.length - 1)
                : fullText.substring(0, currentText.length + 1)
            );

            setTypingSpeed(isDeleting ? deleteDelay : delay);

            if (!isDeleting && currentText === fullText) {
                if (isLastItem) {
                    setIsStopped(true);
                    return; // Stop the animation cycle
                }
                // Finished typing, wait before deleting
                setTimeout(() => setIsDeleting(true), waitTime);
            } else if (isDeleting && currentText === '') {
                // Finished deleting, move to next text
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, loopNum, texts, delay, deleteDelay, waitTime, typingSpeed, isStopped]);

    return (
        <span>
            {currentText}
            {!isStopped && <span className="animate-pulse">|</span>}
        </span>
    );
};

export default Hero;
