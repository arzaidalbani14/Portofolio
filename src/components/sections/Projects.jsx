import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import project1Image from '../../assets/images/projects/project-1.png';
import project2Image from '../../assets/images/projects/project-2.png';

const ProjectCard = ({ title, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
            className="group flex flex-col bg-secondary/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-primary/10 h-full transform-gpu"
        >
            {/* Header: Project Name */}
            <div className="p-4 border-b border-primary/10 bg-accent flex justify-between items-center">
                <h3 className="text-lg font-bold text-background truncate pr-4">{title}</h3>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-background/70 hover:text-background transition-colors"
                    >
                        <Github size={18} />
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-background/70 hover:text-background transition-colors"
                    >
                        <ExternalLink size={18} />
                    </motion.a>
                </div>
            </div>

            {/* Body: Project Image */}
            <div className="flex-1 overflow-hidden relative">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                />

                {/* Optional: Overlay gradient for better text visibility if needed, or just pure image as requested */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Decorative Accent on bottom */}
            <div className="h-1 w-full bg-gradient-to-r from-primary/50 to-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.div>
    );
};

const Projects = () => {
    // Projects data with local assets
    const projects = [
        { title: "DSS AHP Website", image: project1Image },
    ];

    return (
        <section id="projects" className="py-20 relative">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-secondary/10 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-accent/40 shadow-2xl relative overflow-hidden">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-30 pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 relative z-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
