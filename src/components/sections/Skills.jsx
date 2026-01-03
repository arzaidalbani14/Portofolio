import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Coffee } from 'lucide-react';

const SkillCircle = ({ percentage, title, icon: Icon, delay }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center group cursor-pointer"
        >
            <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
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
                        className="text-accent drop-shadow-[0_0_15px_rgba(0,153,144,0.6)]"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
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
    const skills = [
        { title: 'JavaScript', percentage: 89, icon: Code2 },
        { title: 'Python', percentage: 75, icon: Terminal },
        { title: 'Java', percentage: 80, icon: Coffee },
    ];

    return (
        <section id="skills" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Display My Skills</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="flex flex-wrap justify-center gap-16 md:gap-32">
                    {skills.map((skill, index) => (
                        <SkillCircle
                            key={skill.title}
                            {...skill}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
