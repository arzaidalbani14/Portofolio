import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Education</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-center gap-12"
                >
                    {/* Left Content */}
                    <div className="flex-1 text-right space-y-2">
                        <h3 className="text-lg md:text-xl font-medium text-gray-400">Degree</h3>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">Bachelor of Computer Science</h2>

                        <h3 className="text-lg md:text-xl font-medium text-gray-400 mt-6">Major</h3>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">Computer Science</h2>

                        <h3 className="text-lg md:text-xl font-medium text-gray-400 mt-6">University</h3>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">State University of Jakarta</h2>

                        <h3 className="text-lg md:text-xl font-medium text-gray-400 mt-6">Expected Grad. Year</h3>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">2027</h2>
                    </div>

                    {/* Center Divider (Desktop) */}
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-1 h-20 bg-primary/20" />
                        <div className="p-4 bg-secondary/30 rounded-full border-4 border-background shadow-xl z-10 backdrop-blur-sm">
                            <GraduationCap size={40} className="text-primary" />
                        </div>
                        <div className="w-1 h-20 bg-primary/20" />
                    </div>

                    {/* Right Content / Logo */}
                    <div className="flex-1 flex justify-center md:justify-start">
                        <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            className="w-64 h-64 bg-secondary/10 rounded-full flex items-center justify-center text-gray-400 border-8 border-secondary/20 shadow-inner"
                        >
                            <span className="text-2xl font-bold">Univ Logo</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
