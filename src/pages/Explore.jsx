import React, { useState } from 'react';
import { Search, Heart, MapPin, Clock, Users, ChevronDown, Check, Star, ArrowRight, Filter } from 'lucide-react';
import { cn } from '../utils/utils';
import MapPicker from '../components/domain/MapPicker';

// Mock Data
const TOURS = [
    {
        id: 1,
        title: 'Sunset Cloud 9: Surf Lessons & Island Vibes',
        location: 'Siargao Island',
        guide: { name: 'Bayani C.', rating: 4.98, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
        image: 'https://images.unsplash.com/photo-1605650130833-024564c7f0d0',
        tags: ['SURFING', 'ADVENTURE'],
        duration: '3 Hours',
        price: 45,
        originalPrice: 55,
        rating: 4.9
    },
    {
        id: 2,
        title: 'Sugba Lagoon: Secret Kayak Trails',
        location: 'Del Carmen, Siargao',
        guide: { name: 'Tala S.', rating: 5.0, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62',
        tags: ['NATURE', 'ECO-TOUR'],
        duration: '5 Hours',
        price: 85,
        rating: 5.0
    },
    {
        id: 3,
        title: 'Three Islands Island Hopping Experience',
        location: 'General Luna',
        guide: { name: 'Mateo R.', rating: 4.92, img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6' },
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86',
        tags: ['ISLAND HOPPING', 'SWIMMING'],
        duration: '6 Hours',
        price: 35,
        rating: 4.8
    },
    {
        id: 4,
        title: 'Authentic Boodle Fight & Local Market Tour',
        location: 'Dapa Market',
        guide: { name: 'Alona D.', rating: 5.0, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
        tags: ['FOOD', 'CULTURE'],
        duration: '4 Hours',
        price: 40,
        rating: 4.95
    },
    {
        id: 5,
        title: 'North Siargao Motorbike & Secret Beaches',
        location: 'Pacifico, Siargao',
        guide: { name: 'Carlo M.', rating: 4.88, img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7' },
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        tags: ['ADVENTURE', 'PHOTOGRAPHY'],
        duration: '5 Hours',
        price: 60,
        rating: 4.7
    },
    {
        id: 6,
        title: 'Magpupungko Rock Pools Exploration',
        location: 'Pilar, Siargao',
        guide: { name: 'Maya L.', rating: 4.95, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
        tags: ['NATURE', 'RELAXATION'],
        duration: '4 Hours',
        price: 30,
        rating: 4.9
    }
];

export default function Explore() {
    const [liked, setLiked] = useState({});

    const toggleLike = (id) => {
        setLiked(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="min-h-screen bg-cream/30 pb-20">
            {/* Header Section */}
            <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white/60 p-8 rounded-3xl border border-white/40 shadow-xl backdrop-blur-md mb-8">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 bg-green/10 text-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                            <MapPin size={14} /> Philippines
                        </div>
                        <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-dark">
                            Explore <span className="text-green">Siargao</span>
                        </h1>
                        <p className="text-brand-muted text-lg max-w-xl">
                            Find your next adventure from curated local experiences. Everything from private island hopping to hidden surf breaks.
                        </p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search experiences..."
                                className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green bg-white shadow-sm w-full md:w-64"
                            />
                        </div>
                        <button className="md:hidden p-3 bg-white rounded-xl border border-gray-200 shadow-sm text-brand-dark">
                            <Filter size={20} />
                        </button>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">

                {/* Filters Sidebar */}
                <aside className="hidden lg:block w-72 flex-shrink-0 space-y-6">
                    {/* Small Map View mockup */}
                    <div className="bg-white p-4 rounded-3xl shadow-lg border border-gray-100">
                        <h3 className="font-bold text-brand-dark mb-4">Map View</h3>
                        <MapPicker onLocationSelect={() => { }} />
                        <button className="w-full mt-4 py-2 bg-cream text-brand-dark font-semibold rounded-xl hover:bg-yellow hover:text-brand-dark transition-colors text-sm">
                            Show on Map
                        </button>
                    </div>

                    {/* Filter Groups */}
                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-8">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-lg text-brand-dark">Categories</h3>
                                <button className="text-sm text-brand-muted hover:text-red transition-colors">Clear</button>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    { label: 'Island Hopping', count: 42, active: true },
                                    { label: 'Surfing Lessons', count: 18 },
                                    { string: 'Food & Culture', count: 24 },
                                    { string: 'Nature Walks', count: 12 },
                                ].map((cat, i) => (
                                    <li key={i} className="flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className={cn("w-5 h-5 rounded-md border flex items-center justify-center transition-colors",
                                                cat.active ? "bg-green border-green" : "border-gray-300 group-hover:border-green")}>
                                                {cat.active && <Check size={12} className="text-white" />}
                                            </div>
                                            <span className={cn("text-sm font-medium", cat.active ? "text-brand-dark" : "text-brand-muted group-hover:text-brand-dark")}>
                                                {cat.label || cat.string}
                                            </span>
                                        </div>
                                        <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">{cat.count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="h-px bg-gray-100 w-full" />

                        <div>
                            <h3 className="font-bold text-lg text-brand-dark mb-4">Price Range</h3>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="relative flex-1">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                                        <input type="number" placeholder="Min" className="w-full pl-6 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green" />
                                    </div>
                                    <span className="text-gray-400">-</span>
                                    <div className="relative flex-1">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                                        <input type="number" placeholder="Max" className="w-full pl-6 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-green" />
                                    </div>
                                </div>
                                <input type="range" className="w-full accent-green mt-2" min="0" max="200" defaultValue="100" />
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Results */}
                <main className="flex-1 space-y-6">
                    {/* Controls Row */}
                    <div className="flex items-center justify-between">
                        <p className="text-brand-dark font-medium">Showing <span className="font-bold">{TOURS.length}</span> amazing experiences</p>

                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-brand-muted hidden sm:block">Sort by:</span>
                            <button className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors">
                                Recommended
                                <ChevronDown size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Tours Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {TOURS.map((tour) => (
                            <div key={tour.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                                {/* Image Container */}
                                <div className="relative h-64 p-2 pb-0">
                                    <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                                        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                        {/* Like Button */}
                                        <button
                                            onClick={() => toggleLike(tour.id)}
                                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red transition-all z-10"
                                        >
                                            <Heart size={20} className={cn(liked[tour.id] ? "fill-red text-red" : "")} />
                                        </button>

                                        {/* Guide Mini-Profile Overlaid */}
                                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl pr-3 shadow-sm overflow-hidden">
                                                <img src={tour.guide.img} alt={tour.guide.name} className="w-10 h-10 object-cover" />
                                                <div className="py-1">
                                                    <div className="text-xs font-bold text-white leading-tight">{tour.guide.name}</div>
                                                    <div className="flex items-center gap-1">
                                                        <Star size={10} className="fill-yellow text-yellow" />
                                                        <span className="text-[10px] font-medium text-white">{tour.guide.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {tour.originalPrice && (
                                                <div className="bg-yellow text-brand-dark text-xs font-bold px-2 py-1 rounded-lg">
                                                    SALE
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-1.5 text-brand-muted text-sm mb-2">
                                        <MapPin size={14} className="text-green" />
                                        <span className="font-medium truncate">{tour.location}</span>
                                    </div>

                                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3 line-clamp-2 leading-tight group-hover:text-green transition-colors">
                                        {tour.title}
                                    </h3>

                                    <div className="flex items-center gap-4 text-sm font-medium text-brand-muted mb-auto">
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={16} className="text-gray-400" /> {tour.duration}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Users size={16} className="text-gray-400" /> Max 8
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-100 pt-4 mt-6 flex items-end justify-between">
                                        <div>
                                            <div className="text-xs text-brand-muted font-medium mb-1">From</div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-2xl font-black text-brand-dark">${tour.price}</span>
                                                {tour.originalPrice && (
                                                    <span className="text-sm font-medium text-gray-400 line-through">${tour.originalPrice}</span>
                                                )}
                                            </div>
                                        </div>
                                        <button className="bg-cream text-brand-dark hover:bg-green hover:text-white px-5 py-2.5 rounded-xl font-bold transition-colors text-sm flex items-center gap-2">
                                            Book <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-10">
                        <button className="px-6 py-3 bg-white border border-gray-200 text-brand-dark font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
                            Load More Experiences
                        </button>
                    </div>

                </main>
            </div>
        </div>
    );
}
