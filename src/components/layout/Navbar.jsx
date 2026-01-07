import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin, Instagram, Github } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: 'Home', href: '#' },
        { title: 'Skills', href: '#skills' },
        { title: 'Projects', href: '#projects' },
        { title: 'Education', href: '#education' },
        { title: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/arzaidalbani/' },
        { icon: Instagram, href: 'https://www.instagram.com/arzaidlbn/' },
        { icon: Github, href: 'https://github.com/arzaidalbani14' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.querySelector(href);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        onClick={(e) => handleNavClick(e, '#')}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0 cursor-pointer"
                    >
                        <span className="text-2xl font-bold text-primary hover:text-accent transition-colors">ZAID</span>
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.title}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, color: '#009990' }}
                                    className="text-primary hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                                >
                                    {link.title}
                                </motion.a>
                            ))}
                            <div className="flex space-x-4 ml-4 border-l border-primary/20 pl-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -3, color: '#009990' }}
                                        className="text-primary hover:text-accent transition-colors"
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary hover:text-accent p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-primary/10 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="text-primary hover:text-accent block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.title}
                                </a>
                            ))}
                            <div className="flex space-x-4 px-3 py-2">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-accent transition-colors"
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
