import React from 'react';
import { Linkedin, Instagram, Github, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        { icon: Mail, href: '#' },
        { icon: Linkedin, href: '#' },
        { icon: Instagram, href: '#' },
        { icon: Github, href: '#' },
        { icon: Twitter, href: '#' },
    ];

    return (
        <footer className="py-12 bg-background border-t border-primary/10 relative overflow-hidden">
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

                <div className="flex justify-center space-x-6 mb-8">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.2, backgroundColor: '#009990' }}
                            className="p-3 bg-secondary/30 rounded-full shadow-lg text-primary hover:text-white transition-all duration-300 border border-primary/10"
                        >
                            <social.icon size={24} />
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
