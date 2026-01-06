import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-secondary/10 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-accent/40 shadow-2xl relative overflow-hidden">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-30 pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 relative z-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                            Feel free to reach out to me for any questions, collaborations, or just to say hello!
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-accent/20 rounded-full group-hover:bg-accent transition-colors duration-300">
                                    <Mail className="text-accent group-hover:text-background transition-colors" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm">Email</h3>
                                    <p className="text-primary font-medium">arzaidalbani@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-accent/20 rounded-full group-hover:bg-accent transition-colors duration-300">
                                    <Phone className="text-accent group-hover:text-background transition-colors" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm">Phone</h3>
                                    <p className="text-primary font-medium">+62 xxx xxxx xxxx</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-accent/20 rounded-full group-hover:bg-accent transition-colors duration-300">
                                    <MapPin className="text-accent group-hover:text-background transition-colors" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm">Location</h3>
                                    <p className="text-primary font-medium">Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-xl text-primary placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-xl text-primary placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>
                            <div>
                                <textarea
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-xl text-primary placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 153, 144, 0.2)" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-3 bg-accent text-background rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
                            >
                                <Send size={20} />
                                Send Message
                            </motion.button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
