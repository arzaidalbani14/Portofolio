import React from 'react';
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';
import { FaThreads, FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

// Wrappers for react-icons to match lucide icon interface
const ThreadsIcon = ({ size = 24 }) => <FaThreads size={size} />;
const XIcon = ({ size = 24 }) => <FaXTwitter size={size} />;

const Footer = () => {
    const socialLinks = [
        { icon: Mail, href: 'mailto:albaniarzaid24@gmail.com', label: 'Email' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/arzaidalbani/', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://www.instagram.com/arzaidlbn/', label: 'Instagram' },
        { icon: ThreadsIcon, href: 'https://www.threads.com/@arzaidlbn', label: 'Threads' },
        { icon: Github, href: 'https://github.com/arzaidalbani14', label: 'GitHub' },
        { icon: XIcon, href: 'https://x.com/mind_minning', label: 'X' },
    ];

    return (
        <footer id="contact" className="py-12 border-t border-primary/10 relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-accent/5 blur-3xl rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-primary mb-8"
                >
                    Contact
                </motion.h2>

                <div className="flex justify-center flex-wrap gap-6 mb-8">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.15 } }}
                            className="flex flex-col items-center gap-2 group"
                        >
                            <div className="p-3 bg-secondary/30 rounded-full shadow-lg text-primary group-hover:text-white group-hover:bg-accent transition-all duration-150 border border-primary/10">
                                <social.icon size={24} />
                            </div>
                            <span className="text-sm text-gray-400 group-hover:text-accent transition-colors duration-150">
                                {social.label}
                            </span>
                        </motion.a>
                    ))}
                </div>

                <p className="text-gray-400 text-sm">
                    Copyright © 2025. All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
