import React, { useState } from 'react';
import { MapPin, Navigation, Search, Star, Clock } from 'lucide-react';
import { cn } from '../../utils/utils';

export default function MapPicker({ onLocationSelect }) {
    const [address, setAddress] = useState('Checking current location...');
    const [isSearching, setIsSearching] = useState(false);

    const handleGetCurrentLocation = () => {
        setIsSearching(true);
        // Mock reverse geocoding delay
        setTimeout(() => {
            setAddress('General Luna, Siargao Island (Current)');
            setIsSearching(false);
            if (onLocationSelect) onLocationSelect({ lat: 9.789, lng: 126.152, address: 'General Luna' });
        }, 1500);
    };

    return (
        <div className="glass-card rounded-3xl overflow-hidden border-white/60 relative w-full h-[300px] flex flex-col shadow-lg">

            {/* Mock Map Background Layer */}
            <div
                className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/40 to-transparent z-0" />

            {/* Floating Search Bar (Geocoding input) */}
            <div className="relative z-10 p-4">
                <div className="relative w-full max-w-sm mx-auto shadow-xl">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-green">
                        <Search size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search destination or address..."
                        className="w-full pl-10 pr-12 py-3 rounded-full bg-white/90 backdrop-blur-md border border-white/60 focus:outline-none focus:ring-2 focus:ring-green shadow-sm font-medium text-sm"
                    />
                    <button
                        onClick={handleGetCurrentLocation}
                        className={cn(
                            "absolute inset-y-1 right-1 w-10 bg-gray-100 rounded-full flex items-center justify-center transition-all",
                            isSearching ? "text-green animate-pulse" : "text-brand-dark hover:bg-gray-200"
                        )}
                        title="Use current location"
                    >
                        <Navigation size={16} />
                    </button>
                </div>
            </div>

            {/* Center Pin Marker */}
            <div className="flex-1 relative z-10 flex items-center justify-center pb-8">
                <div className="relative group cursor-pointer animate-float">
                    <div className="absolute -bottom-2 w-4 h-1 bg-black/20 blur-[2px] rounded-full mx-auto left-0 right-0" />
                    <MapPin size={40} className="text-red drop-shadow-lg group-hover:scale-110 transition-transform" />
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full" />
                </div>
            </div>

            {/* Bottom Info Sheet */}
            <div className="relative z-10 bg-white/80 backdrop-blur-xl border-t border-white/60 p-4 shrink-0">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green/10 flex items-center justify-center text-green shrink-0">
                            <MapPin size={16} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-brand-muted uppercase tracking-wider">Selected Location</p>
                            <h4 className="font-bold text-brand-dark leading-tight">{address}</h4>
                        </div>
                    </div>
                </div>

                {/* Quick Saved Places */}
                <div className="flex gap-2 overflow-x-auto pb-1 mt-3 hide-scrollbar">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white/50 text-xs font-medium hover:bg-white shrink-0 shadow-sm">
                        <Star size={12} className="text-yellow" /> Cloud 9 Resort
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white/50 text-xs font-medium hover:bg-white shrink-0 shadow-sm">
                        <Clock size={12} className="text-brand-muted" /> Airport Transfer
                    </button>
                </div>
            </div>
        </div>
    );
}
