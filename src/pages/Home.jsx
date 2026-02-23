import React from 'react';
import { ArrowRight, Star, MapPin, Calendar, Users } from 'lucide-react';
import { cn } from '../utils/utils';

export default function Home() {
    return (
        <div className="space-y-16 animate-fade-in pb-20">

            {/* Hero Section */}
            <section className="relative pt-10 lg:pt-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 z-10">
                        <h1 className="text-5xl lg:text-7xl font-heading font-black leading-[1.1] text-brand-dark">
                            Discover the <br />
                            <span className="text-green relative inline-block">
                                Hidden Gems
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="transparent" strokeLinecap="round" />
                                </svg>
                            </span> <br />
                            of the Islands.
                        </h1>
                        <p className="text-xl text-brand-muted leading-relaxed max-w-lg">
                            Connect with verified local guides for authentic experiences, private tours, and unforgettable adventures.
                        </p>

                        {/* Quick Search Glass Panel */}
                        <div className="glass-panel p-4 rounded-3xl mt-8 flex flex-col sm:flex-row gap-4 relative z-50">
                            <div className="flex-1 px-4 py-2 border-b sm:border-b-0 sm:border-r border-gray-200">
                                <label className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-1 block">Location</label>
                                <div className="flex items-center gap-2 text-brand-dark">
                                    <MapPin size={18} className="text-green" />
                                    <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">Where are you going?</span>
                                </div>
                            </div>
                            <div className="flex-1 px-4 py-2 border-b sm:border-b-0 sm:border-r border-gray-200">
                                <label className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-1 block">Dates</label>
                                <div className="flex items-center gap-2 text-brand-dark">
                                    <Calendar size={18} className="text-red" />
                                    <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">Add dates</span>
                                </div>
                            </div>
                            <div className="flex-1 px-4 py-2">
                                <label className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-1 block">Guests</label>
                                <div className="flex items-center gap-2 text-brand-dark">
                                    <Users size={18} className="text-yellow" />
                                    <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">Add guests</span>
                                </div>
                            </div>
                            <button className="bg-green hover:bg-green-hover text-white rounded-2xl px-8 py-4 font-bold transition-all shadow-lg hover:shadow-xl sm:ml-2 flex items-center justify-center min-w-[120px]">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Hero Images Grid */}
                    <div className="relative h-[500px] sm:h-[600px] w-full hidden md:block z-10">
                        {/* Background Blob decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 blur-3xl rounded-full -z-10" />

                        <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-[40px] overflow-hidden shadow-2xl z-20 hover:scale-[1.02] transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62" alt="Island landscape" className="w-full h-full object-cover" />
                            <div className="absolute bottom-6 left-6 glass-panel px-4 py-2 rounded-xl flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                                <span className="font-medium text-sm">Palawan, PH</span>
                            </div>
                        </div>

                        <div className="absolute bottom-10 left-0 w-1/2 h-1/2 rounded-[30px] overflow-hidden shadow-xl z-30 border-4 border-cream hover:scale-105 transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86" alt="Snorkeling" className="w-full h-full object-cover" />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute bottom-1/4 right-[-10%] glass-panel p-4 rounded-2xl z-40 shadow-2xl border-white/60 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-yellow/20 flex items-center justify-center text-yellow">
                                    <Star size={24} className="fill-current" />
                                </div>
                                <div>
                                    <div className="font-black text-xl text-brand-dark">4.9/5</div>
                                    <div className="text-sm text-brand-muted font-medium">Over 10k reviews</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Destinations */}
            <section className="pt-10">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-brand-dark mb-2">Popular Destinations</h2>
                        <p className="text-brand-muted">Explore the most loved islands this season.</p>
                    </div>
                    <button className="hidden sm:flex items-center gap-2 text-red font-medium hover:text-red-hover transition-colors group">
                        View all <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { name: 'Siargao', label: 'Surfing Capital', img: 'https://images.unsplash.com/photo-1605650130833-024564c7f0d0', color: 'text-green' },
                        { name: 'El Nido', label: 'Limestone Cliffs', img: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62', color: 'text-yellow' },
                        { name: 'Boracay', label: 'White Sand Beaches', img: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86', color: 'text-red' },
                        { name: 'Coron', label: 'Shipwreck Diving', img: 'https://images.unsplash.com/photo-1534008897995-27a23e859048', color: 'text-green' },
                    ].map((dest, i) => (
                        <div key={i} className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                            <img src={dest.img} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className={cn("text-xs font-bold uppercase tracking-wider mb-2 block glow-text", dest.color)}>{dest.label}</span>
                                <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Top Local Guides section */}
            <section className="pt-10">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-brand-dark mb-2">Top Local Guides</h2>
                        <p className="text-brand-muted">Meet passionate locals ready to show you around.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: 'Mateo R.', role: 'Boat Captain', rating: '4.98', tours: 142, img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6', bg: 'bg-green/10' },
                        { name: 'Tala S.', role: 'Nature Guide', rating: '5.0', tours: 89, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', bg: 'bg-yellow/10' },
                        { name: 'Bayani C.', role: 'Local Expert', rating: '4.95', tours: 215, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', bg: 'bg-red/10' },
                    ].map((guide, i) => (
                        <div key={i} className={cn("glass-card rounded-[32px] p-6 relative overflow-hidden group border-white/60", guide.bg)}>
                            {/* Abstract decorative blob */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/50 blur-2xl rounded-full" />

                            <div className="flex items-start justify-between relative z-10 mb-6">
                                <div className="flex gap-4 items-center">
                                    <img src={guide.img} alt={guide.name} className="w-16 h-16 rounded-full object-cover shadow-sm border-2 border-white" />
                                    <div>
                                        <h3 className="font-heading font-bold text-xl text-brand-dark">{guide.name}</h3>
                                        <span className="text-sm font-medium text-brand-muted inline-flex items-center gap-1 mt-1">
                                            <MapPin size={14} /> {guide.role}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 bg-white/80 rounded-full px-3 py-1 shadow-sm mix-blend-multiply">
                                    <Star size={14} className="fill-yellow text-yellow" />
                                    <span className="font-bold text-sm">{guide.rating}</span>
                                </div>
                            </div>

                            <p className="text-brand-muted leading-relaxed mb-6 relative z-10 line-clamp-2">
                                Specializes in hidden beaches, local culinary spots, and off-the-beaten-path island adventures.
                            </p>

                            <div className="flex items-center justify-between border-t border-brand-dark/5 pt-4 relative z-10">
                                <span className="text-sm font-medium text-brand-dark">
                                    <strong className="text-lg">{guide.tours}</strong> tours hosted
                                </span>
                                <button className="btn-secondary py-1.5 px-4 text-sm group-hover:bg-white transition-colors">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
