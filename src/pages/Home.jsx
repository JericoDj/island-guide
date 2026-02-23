import React from 'react';
import { ArrowRight, Star, MapPin, Calendar, Users, Search } from 'lucide-react';
import { cn } from '../utils/utils';

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        {/* Left Content */}
                        <div className="space-y-6 md:space-y-8">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-black leading-tight text-brand-dark">
                                Discover the{' '}
                                <span className="relative inline-block text-green">
                                    Hidden Gems
                                    <svg
                                        className="absolute w-full h-3 -bottom-2 left-0 text-yellow/40"
                                        viewBox="0 0 100 10"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M0 5 Q 50 10 100 5"
                                            stroke="currentColor"
                                            strokeWidth="6"
                                            fill="transparent"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>{' '}
                                of the Islands
                            </h1>

                            <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-lg">
                                Connect with verified local guides for authentic experiences,
                                private tours, and unforgettable adventures across the Philippines.
                            </p>

                            {/* Stats - Mobile visible */}
                            <div className="flex items-center gap-6 pt-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-green to-yellow" />
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-5 h-5 fill-yellow text-yellow" />
                                        <span className="font-bold text-brand-dark">4.9/5</span>
                                    </div>
                                    <p className="text-sm text-brand-muted">from 10k+ reviews</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Images - Hidden on mobile, visible on desktop */}
                        <div className="relative hidden lg:block h-[500px] xl:h-[600px]">
                            {/* Main Image */}
                            <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-[40px] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62"
                                    alt="Palawan"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                                        <span className="font-medium">Palawan, PH</span>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Image */}
                            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-[30px] overflow-hidden shadow-xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86"
                                    alt="Beach"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Search Bar - Positioned absolutely on desktop, inline on mobile */}
                    <div className="relative mt-8 lg:mt-16">
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-2xl border border-white/40 p-4 lg:p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Location */}
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-gray-100">
                                    <MapPin className="w-5 h-5 text-green flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Where to?"
                                            className="w-full bg-transparent border-none p-0 text-sm font-medium text-brand-dark placeholder:text-gray-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Dates */}
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-gray-100">
                                    <Calendar className="w-5 h-5 text-red flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                                            Dates
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Add dates"
                                            className="w-full bg-transparent border-none p-0 text-sm font-medium text-brand-dark placeholder:text-gray-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Guests */}
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-gray-100">
                                    <Users className="w-5 h-5 text-yellow flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                                            Guests
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Add guests"
                                            className="w-full bg-transparent border-none p-0 text-sm font-medium text-brand-dark placeholder:text-gray-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Search Button */}
                                <button className="lg:col-span-1 bg-green hover:bg-green-hover text-white rounded-xl px-6 py-4 font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                    <Search className="w-5 h-5" />
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Destinations */}
            <section className="py-16 md:py-24 bg-cream/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mb-2">
                                Popular Destinations
                            </h2>
                            <p className="text-brand-muted">
                                Explore the most loved islands this season
                            </p>
                        </div>

                        <button className="inline-flex items-center gap-2 text-red font-medium hover:text-red-hover transition-colors group self-start sm:self-auto">
                            View all destinations
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            {
                                name: 'Siargao',
                                label: 'Surfing Capital',
                                img: 'https://images.unsplash.com/photo-1605650130833-024564c7f0d0',
                                color: 'text-green'
                            },
                            {
                                name: 'El Nido',
                                label: 'Limestone Cliffs',
                                img: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62',
                                color: 'text-yellow'
                            },
                            {
                                name: 'Boracay',
                                label: 'White Sand Beaches',
                                img: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86',
                                color: 'text-red'
                            },
                            {
                                name: 'Coron',
                                label: 'Shipwreck Diving',
                                img: 'https://images.unsplash.com/photo-1534008897995-27a23e859048',
                                color: 'text-green'
                            },
                        ].map((dest, i) => (
                            <div
                                key={i}
                                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <img
                                    src={dest.img}
                                    alt={dest.name}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className={cn("text-xs font-bold uppercase tracking-wider mb-1 block", dest.color)}>
                                        {dest.label}
                                    </span>
                                    <h3 className="text-xl font-bold text-white">{dest.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Local Guides */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mb-3">
                            Top Local Guides
                        </h2>
                        <p className="text-brand-muted">
                            Meet passionate locals ready to show you the hidden gems of their homeland
                        </p>
                    </div>

                    {/* Guide Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                name: 'Mateo Reyes',
                                role: 'Boat Captain & Island Hopper',
                                rating: '4.98',
                                tours: 142,
                                img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
                                specialties: 'Hidden beaches, snorkeling spots'
                            },
                            {
                                name: 'Tala Santos',
                                role: 'Nature & Eco Guide',
                                rating: '5.0',
                                tours: 89,
                                img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
                                specialties: 'Wildlife, waterfalls, trekking'
                            },
                            {
                                name: 'Bayani Cruz',
                                role: 'Cultural Heritage Expert',
                                rating: '4.95',
                                tours: 215,
                                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
                                specialties: 'Local cuisine, history, festivals'
                            },
                        ].map((guide, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex gap-4">
                                        <img
                                            src={guide.img}
                                            alt={guide.name}
                                            className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-50"
                                        />
                                        <div>
                                            <h3 className="font-heading font-bold text-lg text-brand-dark">
                                                {guide.name}
                                            </h3>
                                            <p className="text-sm text-brand-muted mt-1">{guide.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 bg-yellow/10 px-2 py-1 rounded-full">
                                        <Star className="w-4 h-4 fill-yellow text-yellow" />
                                        <span className="font-semibold text-sm">{guide.rating}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-brand-muted mb-4">
                                    Specializes in: {guide.specialties}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div>
                                        <span className="text-2xl font-bold text-brand-dark">{guide.tours}</span>
                                        <span className="text-sm text-brand-muted ml-1">tours</span>
                                    </div>
                                    <button className="px-4 py-2 text-sm font-medium text-green border border-green/30 rounded-lg hover:bg-green hover:text-white transition-colors">
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}