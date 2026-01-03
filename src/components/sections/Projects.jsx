import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-secondary/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 border border-primary/10"
        >
            {/* Image Container */}
            <div className="h-64 overflow-hidden bg-background">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-primary rounded-full text-background hover:bg-accent hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-primary rounded-full text-background hover:bg-accent hover:text-white transition-colors"
                    >
                        <ExternalLink size={20} />
                    </motion.a>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-gray-300 text-sm">Web Development • React • Tailwind</p>
            </div>

            {/* Decorative Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.div>
    );
};

const Projects = () => {
    // Placeholders
    const projects = [
        { title: "E-Commerce Dashboard", image: "https://placehold.co/600x400/001A6E/E1FFBB?text=Project+1" },
        { title: "Portfolio Website", image: "https://placehold.co/600x400/074799/E1FFBB?text=Project+2" },
        { title: "Task Management App", image: "https://placehold.co/600x400/009990/E1FFBB?text=Project+3" },
    ];

    return (
        <section id="projects" className="py-20 bg-background relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
