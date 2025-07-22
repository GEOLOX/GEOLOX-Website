import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Send, CheckCircle } from 'lucide-react';
import ContactSubmission from '../utils/ContactSubmission';

/**
 * ContactSection - Contact form and company info section
 * @returns {JSX.Element}
 */
export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [error, setError] = useState(null);

    /**
     * Handle input changes for the form
     * @param {React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>} e
     */
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    /**
     * Handle form submission
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setError(null);
        try {
            await ContactSubmission.create(formData);
            setStatus('success');
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch (err) {
            setStatus('error');
            setError('Something went wrong. Please try again.');
            console.error(err);
        }
    };

    return (
        <section id="contact" className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900/10 to-emerald-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/10 via-emerald-700/10 to-blue-900/10 blur-2xl opacity-30 z-0" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Ready to Get Started?</h2>
                        <p className="mt-4 text-xl text-gray-300">
                            Let's talk about how Geolox can revolutionise your business. Fill out the form, and we'll be in touch shortly.
                        </p>
                        <div className="mt-8 space-y-4 text-gray-300">
                            <p><strong>Email:</strong> contact@geolox.co.uk</p>
                            <p><strong>Phone:</strong> +44 7721 335 963</p>
                            <p><strong>Address:</strong> The Atlas Building, Harwell Campus, Oxfordshire, OX11 0QX, United Kingdom</p>
                        </div>
                        <div className="mt-8 p-4 bg-emerald-900/20 border-l-4 border-emerald-400 rounded shadow text-emerald-200">
                            <span className="font-semibold">Investor Note:</span> We welcome investor inquiries and are happy to provide a detailed deck and demo upon request.
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-slate-800/80 backdrop-blur-sm p-10 rounded-2xl border border-slate-700/40 shadow-xl">
                            {status === 'success' ? (
                                <div className="text-center py-10">
                                    <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white">Thank you!</h3>
                                    <p className="text-gray-300 mt-2">Your message has been sent successfully. We'll be in touch soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="sr-only">Name</label>
                                            <input type="text" name="name" id="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="bg-slate-900 border border-slate-700 text-white placeholder:text-gray-500 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="sr-only">Email</label>
                                            <input type="email" name="email" id="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="bg-slate-900 border border-slate-700 text-white placeholder:text-gray-500 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="sr-only">Company</label>
                                        <input type="text" name="company" id="company" placeholder="Your Company (Optional)" value={formData.company} onChange={handleChange} className="bg-slate-900 border border-slate-700 text-white placeholder:text-gray-500 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="sr-only">Message</label>
                                        <textarea name="message" id="message" rows="4" placeholder="Your Message" required value={formData.message} onChange={handleChange} className="bg-slate-900 border border-slate-700 text-white placeholder:text-gray-500 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" />
                                    </div>
                                    <div>
                                        <button type="submit" disabled={status === 'loading'} className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 hover:from-cyan-400 hover:to-emerald-400 font-bold py-3 rounded-lg flex items-center justify-center text-lg shadow-lg transition-all duration-300">
                                            {status === 'loading'? (
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            ) : (
                                                <Send className="mr-2 h-4 w-4" />
                                            )}
                                            Send Message
                                        </button>
                                    </div>
                                    {status === 'error' && <p className="text-red-500 text-sm text-center">{error}</p>}
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 
