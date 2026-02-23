import React, { Component } from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-white/80 backdrop-blur-xl border-t border-white/40 mt-12 py-12 px-6 md:px-10 relative z-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

                    {/* Brand & description */}
                    <div className="md:w-1/3">
                        <h2 className="font-heading font-black text-2xl text-brand-dark flex items-center gap-2 mb-4">
                            <MapPin className="text-green" /> IslandGuide
                        </h2>
                        <p className="text-brand-muted mb-6 leading-relaxed text-sm">
                            Your gateway to authentic island experiences. We connect you with verified local guides for private tours, hidden gems, and unforgettable adventures across the Philippines.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-brand-dark hover:bg-green hover:text-white transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-brand-dark hover:bg-green hover:text-white transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-brand-dark hover:bg-green hover:text-white transition-colors">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
                        <div>
                            <h3 className="font-bold text-brand-dark uppercase tracking-wider text-sm mb-4">Explore</h3>
                            <ul className="space-y-3 text-sm text-brand-muted">
                                <li><a href="#" className="hover:text-green transition-colors">Destinations</a></li>
                                <li><a href="#" className="hover:text-green transition-colors">Local Guides</a></li>
                                <li><a href="#" className="hover:text-green transition-colors">Experiences</a></li>
                                <li><a href="#" className="hover:text-green transition-colors">Travel Blog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-brand-dark uppercase tracking-wider text-sm mb-4">Company</h3>
                            <ul className="space-y-3 text-sm text-brand-muted">
                                <li><a href="#" className="hover:text-green transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-green transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-green transition-colors">Become a Guide</a></li>
                                <li><a href="#" className="hover:text-green transition-colors">Partnerships</a></li>
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <h3 className="font-bold text-brand-dark uppercase tracking-wider text-sm mb-4">Contact</h3>
                            <ul className="space-y-3 text-sm text-brand-muted">
                                <li className="flex items-center gap-2">
                                    <Mail size={16} className="text-green" /> contact@islandguide.ph
                                </li>
                                <li className="flex items-center gap-2">
                                    <Phone size={16} className="text-green" /> +63 2 8123 4567
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-xs text-brand-muted">
                    <p>© {new Date().getFullYear()} IslandGuide. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-brand-dark transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-dark transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-brand-dark transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </footer>
        );
    }
}
