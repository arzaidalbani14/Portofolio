import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import project1Image from '../../assets/images/projects/project-1.png';
import project2Image from '../../assets/images/projects/project-2.png';

const ProjectCard = ({ title, image, githubUrl, websiteUrl, index }) => {
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
            <div className="p-4 border-b border-primary/10 bg-accent">
                <h3 className="text-lg font-bold text-background truncate">{title}</h3>
            </div>

            {/* Body: Project Image with Hover Overlay */}
            <div className="flex-1 overflow-hidden relative">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300"
                    loading="lazy"
                />

                {/* Centered Overlay on Hover */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    {/* GitHub Link */}
                    <motion.a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center gap-2 p-4 bg-secondary/50 rounded-xl border border-primary/20 hover:border-accent transition-colors"
                    >
                        <Github size={32} className="text-primary" />
                        <span className="text-sm text-primary font-medium">GitHub</span>
                    </motion.a>

                    {/* Website Link */}
                    {websiteUrl ? (
                        <motion.a
                            href={websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col items-center gap-2 p-4 bg-secondary/50 rounded-xl border border-primary/20 hover:border-accent transition-colors"
                        >
                            <ExternalLink size={32} className="text-primary" />
                            <span className="text-sm text-primary font-medium">Website</span>
                        </motion.a>
                    ) : (
                        <div className="flex flex-col items-center gap-2 p-4 bg-secondary/30 rounded-xl border border-primary/10 opacity-50">
                            <ExternalLink size={32} className="text-gray-500" />
                            <span className="text-sm text-gray-500 font-medium">Coming Soon</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Decorative Accent on bottom */}
            <div className="h-1 w-full bg-gradient-to-r from-primary/50 to-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.div>
    );
};

const Projects = () => {
    // Projects data with local assets
    const projects = [
        {
            title: "DSS AHP Website",
            image: project1Image,
            githubUrl: "https://github.com/arzaidalbani14/DSS-AHP",
            websiteUrl: null // Not deployed yet
        },
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
