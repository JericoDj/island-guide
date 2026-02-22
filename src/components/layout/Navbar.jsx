import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User } from 'lucide-react';
import { cn } from '../../utils/utils';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full animate-fade-in">
            {/* Decorative top bar */}
            <div className="h-1 w-full bg-gradient-to-r from-yellow via-green to-red" />

            <div className="px-6 py-4 mx-auto max-w-7xl flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-green/20 flex items-center justify-center text-green group-hover:scale-105 transition-transform duration-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
                            <circle cx="12" cy="9" r="2.5" />
                        </svg>
                    </div>
                    <span className="font-heading font-bold text-2xl tracking-tight text-brand-dark">
                        Island<span className="text-green">Guide</span>
                    </span>
                </Link>

                {/* Center Search / Nav */}
                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <div className="relative w-full group">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-brand-muted group-hover:text-green transition-colors">
                            <Search size={18} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search islands, guides, or activities..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 focus:outline-none focus:ring-2 focus:ring-green/50 focus:bg-white/80 transition-all duration-300 shadow-sm"
                        />
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center gap-6 mr-4 font-medium text-brand-muted">
                        <Link to="/explore" className="hover:text-brand-dark transition-colors">Explore</Link>
                        <Link to="/guides" className="hover:text-brand-dark transition-colors">Guides</Link>
                        <Link to="/bookings" className="hover:text-brand-dark transition-colors">Bookings</Link>
                    </nav>

                    <button className="hidden sm:flex items-center gap-2 p-1.5 pr-4 rounded-full border border-gray-200 bg-white/50 hover:bg-white/80 transition-colors shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-yellow/30 flex items-center justify-center text-yellow">
                            <User size={16} />
                        </div>
                        <span className="text-sm font-medium">Log In</span>
                    </button>

                    <button className="md:hidden p-2 text-brand-dark rounded-full hover:bg-black/5 transition-colors">
                        <Menu size={24} />
                    </button>
                </div>

            </div>
        </header>
    );
}
