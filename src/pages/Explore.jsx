import React, { useState } from 'react';
import { Search, Heart, MapPin, Clock, Users, Filter, ChevronDown, ChevronLeft, ChevronRight, X, Check, ArrowRight } from 'lucide-react';
import { cn } from '../utils/utils';
import MapPicker from '../components/domain/MapPicker';

// Mock Data based on the provided UI
const TOURS = [
    {
        id: 1,
        title: 'Sunset Cloud 9: Surf Lessons & Island Vibes',
        guide: { name: 'Bayani C...', role: 'Local Expert', rating: 4.98, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
        image: 'https://images.unsplash.com/photo-1605650130833-024564c7f0d0',
        tags: ['SURFING', 'ADVENTURE'],
        duration: '3 Hours',
        maxGuests: 'Max 4 people',
        price: 45,
        originalPrice: 55,
    },
    {
        id: 2,
        title: 'Sugba Lagoon: Secret Kayak Trails & Mangroves',
        guide: { name: 'Tala Santos', role: 'Nature Guide', rating: 5.0, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62',
        tags: ['NATURE', 'ECO-TOUR'],
        duration: '5 Hours',
        maxGuests: 'Private',
        price: 85,
        isGroupPrice: true,
    },
    {
        id: 3,
        title: 'Three Islands Tour: Naked, Daku & Guyam',
        guide: { name: 'Mateo R...', role: 'Boat Captain', rating: 4.92, img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6' },
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86',
        tags: ['ISLAND HOPPING', 'SWIMMING'],
        duration: '6 Hours',
        maxGuests: 'Max 10',
        price: 35,
    },
    {
        id: 4,
        title: 'Authentic Boodle Fight & Local Market Tour',
        guide: { name: 'Alona Diaz', role: 'Culinary Artist', rating: 5.0, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
        tags: ['FOOD', 'CULTURE'],
        duration: '4 Hours',
        maxGuests: 'Max 8',
        price: 40,
    },
    {
        id: 5,
        title: 'North Siargao Motorbike Adventure & Secret Beaches',
        guide: { name: 'Carlo Me...', role: 'Explorer', rating: 4.88, img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7' },
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        tags: ['ADVENTURE', 'PHOTOGRAPHY'],
        duration: '5 Hours',
        maxGuests: 'Max 2',
        price: 60,
    },
    {
        id: 6,
        title: 'Magpupungko Rock Pools & Cave Exploration',
        guide: { name: 'Maya Lim', role: 'Local Storyteller', rating: 4.95, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
        tags: ['NATURE', 'RELAXATION'],
        duration: '4 Hours',
        maxGuests: 'Max 6',
        price: 30,
    }
];

export default function Explore() {
    const [liked, setLiked] = useState({});

    const toggleLike = (id) => {
        setLiked(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="animate-fade-in pb-20">

            {/* Breadcrumbs & Header */}
            <div className="mb-8">
                <div className="text-sm font-medium text-brand-muted mb-4 flex items-center gap-2">
                    <span>Home</span>
                    <ChevronRight size={14} />
                    <span>Philippines</span>
                    <ChevronRight size={14} />
                    <span className="text-brand-dark font-bold">Siargao Tours</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-heading font-black text-green mb-2">Discover Siargao with Locals</h1>
                        <p className="text-brand-muted text-lg">Explore 84 island adventures hosted by verified local guides</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-brand-muted">Sort by:</span>
                        <button className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-bold flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors">
                            Island Favorites
                            <ChevronDown size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Sidebar Filters */}
                <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">

                    <MapPicker onLocationSelect={(loc) => console.log('Location selected:', loc)} />

                    {/* Active Filters */}
                    <div className="glass-panel p-6 rounded-[2rem]">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-brand-dark">Active Filters</h3>
                            <button className="text-xs font-bold text-red hover:text-red-hover">Clear all</button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green/30 bg-green/5 text-sm font-medium text-green">
                                English <button><X size={14} /></button>
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green/30 bg-green/5 text-sm font-medium text-green">
                                Surfing <button><X size={14} /></button>
                            </span>
                        </div>
                    </div>

                    {/* Filter Categories */}
                    <div className="glass-panel p-6 rounded-[2rem] space-y-8">

                        {/* Guide Language */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-red/10 flex items-center justify-center text-red">
                                    <span className="font-serif font-bold text-sm">A</span>
                                </div>
                                <h3 className="font-bold text-lg text-brand-dark">Guide Language</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    { label: 'English', count: 52, active: true },
                                    { label: 'Tagalog', count: 84 },
                                    { label: 'Cebuano', count: 60 },
                                    { label: 'Spanish', count: 12 },
                                ].map((lang) => (
                                    <li key={lang.label} className="flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className={cn("w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                                                lang.active ? "bg-green border-green" : "border-gray-300 group-hover:border-green")}>
                                                {lang.active && <Check size={12} className="text-white" />}
                                            </div>
                                            <span className={cn("text-sm font-medium", lang.active ? "text-brand-dark" : "text-brand-muted group-hover:text-brand-dark")}>
                                                {lang.label}
                                            </span>
                                        </div>
                                        <span className="text-xs font-medium text-green/60 bg-green/5 px-2 py-0.5 rounded-full">{lang.count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="h-px w-full bg-gray-100" />

                        {/* Specialties */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-red/10 flex items-center justify-center text-red">
                                    <Star size={14} className="fill-current" />
                                </div>
                                <h3 className="font-bold text-lg text-brand-dark">Specialties</h3>
                            </div>
                            <ul className="space-y-3">
                                {['Surfing Instructor', 'Island Hopping', 'Local Cuisine', 'Nature Conservation'].map((spec, i) => (
                                    <li key={spec} className="flex items-center gap-3 group cursor-pointer">
                                        <div className={cn("w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                                            i === 0 ? "bg-green border-green" : "border-gray-300 group-hover:border-green")}>
                                            {i === 0 && <Check size={12} className="text-white" />}
                                        </div>
                                        <span className={cn("text-sm font-medium", i === 0 ? "text-brand-dark" : "text-brand-muted group-hover:text-brand-dark")}>
                                            {spec}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="h-px w-full bg-gray-100" />

                        {/* Price Range */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-red/10 flex items-center justify-center text-red">
                                    <span className="font-bold text-sm">$</span>
                                </div>
                                <h3 className="font-bold text-lg text-brand-dark">Price Range</h3>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted text-sm">$</span>
                                    <input type="number" placeholder="Min" className="w-full pl-6 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green/50" />
                                </div>
                                <span className="text-gray-300">-</span>
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted text-sm">$</span>
                                    <input type="number" placeholder="Max" className="w-full pl-6 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green/50" />
                                </div>
                            </div>
                        </div>

                    </div>
                </aside>

                {/* Tours Grid */}
                <main className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {TOURS.map((tour) => (
                            <div key={tour.id} className="glass-card rounded-[2rem] overflow-hidden flex flex-col group border-white/80 pb-2">

                                {/* Image & Favorite Banner */}
                                <div className="relative h-56 m-2 mb-0 rounded-[1.5rem] overflow-hidden">
                                    <img src={tour.image} alt={tour.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                                    {/* Floating Guide Card overlap */}
                                    <div className="absolute bottom-4 left-4 right-14 glass-panel px-3 py-2 rounded-2xl flex items-center justify-between border-white/60 shadow-lg backdrop-blur-md bg-white/70">
                                        <div className="flex items-center gap-2">
                                            <img src={tour.guide.img} alt={tour.guide.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                                            <div>
                                                <div className="text-[10px] font-black uppercase text-green tracking-wider">{tour.guide.role}</div>
                                                <div className="font-bold text-sm text-brand-dark leading-tight">{tour.guide.name}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 bg-white rounded-full px-2 py-1 shadow-sm h-7">
                                            <Star size={12} className="fill-green text-green" />
                                            <span className="font-bold text-xs">{tour.guide.rating}</span>
                                        </div>
                                    </div>

                                    {/* Favorite Button */}
                                    <button
                                        onClick={() => toggleLike(tour.id)}
                                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10"
                                    >
                                        <Heart size={20} className={cn(liked[tour.id] ? "fill-red text-red" : "")} />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex-1 flex flex-col">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {tour.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border border-gray-200 text-brand-muted bg-white/50 shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="font-heading font-bold text-xl text-brand-dark leading-tight mb-4 group-hover:text-green transition-colors">
                                        {tour.title}
                                    </h3>

                                    <div className="flex items-center gap-4 text-sm font-medium text-brand-muted mb-auto">
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={16} className="text-red" /> {tour.duration}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Users size={16} className="text-red" /> {tour.maxGuests}
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-100/50 flex items-center justify-between">
                                        <div>
                                            {tour.originalPrice && (
                                                <span className="text-sm text-gray-400 line-through mr-2">${tour.originalPrice}</span>
                                            )}
                                            <span className="text-2xl font-black text-red">${tour.price}</span>
                                            <span className="text-sm font-medium text-brand-muted ml-1">
                                                /{tour.isGroupPrice ? 'group' : 'person'}
                                            </span>
                                        </div>
                                        <button className="text-brand-dark font-bold hover:text-green flex items-center gap-1 transition-colors">
                                            View <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-12 flex items-center justify-center gap-2">
                        <button className="w-10 h-10 rounded-full flex items-center justify-center text-brand-muted hover:bg-white/50 transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-red text-white font-bold shadow-md">1</button>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/60 font-bold hover:bg-white transition-colors">2</button>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/60 font-bold hover:bg-white transition-colors">3</button>
                        <span className="px-2 text-brand-muted">...</span>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/60 font-bold hover:bg-white transition-colors">8</button>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm text-brand-dark">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}
