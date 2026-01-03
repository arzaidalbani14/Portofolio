import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    // Simulated placeholder if image is missing, or use a colored circle
    const profileImage = "https://placehold.co/400x400/074799/E1FFBB?text=Profile";

    return (
        <section id="#" className="min-h-screen pt-16 flex items-center justify-center overflow-hidden relative">
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
                            Welcome text
                        </motion.h2>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold text-primary mb-6"
                        >
                            My name is <span className="text-secondary brightness-125">Zaid</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra, justo at commodo fermentum,
                            nisl diam maximus lorem, sed venenatis quam lorem accumsan est. Duis quis pharetra elit.
                            Nulla facilisi.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex gap-4 justify-center md:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 153, 144, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-accent text-background rounded-full font-semibold border-2 border-transparent hover:bg-transparent hover:text-accent hover:border-accent transition-all duration-300"
                            >
                                Contact Me
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(225, 255, 187, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-transparent text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-background transition-all duration-300"
                            >
                                View Projects
                            </motion.button>
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
                            className="relative"
                        >
                            {/* Decorative circle behind image */}
                            <div className="absolute inset-0 bg-secondary rounded-full transform translate-x-4 translate-y-4 -z-10 opacity-30" />

                            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
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

export default Hero;
