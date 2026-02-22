import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle, Plus, Trash2 } from 'lucide-react';
import { cn } from '../utils/utils';

export default function ProviderSchedule() {
    const [activeTab, setActiveTab] = useState('weekly');

    // Mock Data mimicking the architecture scheme
    const [weeklyHours, setWeeklyHours] = useState([
        { day: 'Monday', active: true, start: '08:00', end: '17:00' },
        { day: 'Tuesday', active: true, start: '08:00', end: '17:00' },
        { day: 'Wednesday', active: true, start: '08:00', end: '17:00' },
        { day: 'Thursday', active: false, start: '08:00', end: '17:00' },
        { day: 'Friday', active: true, start: '08:00', end: '20:00' },
        { day: 'Saturday', active: true, start: '10:00', end: '20:00' },
        { day: 'Sunday', active: false, start: '10:00', end: '15:00' },
    ]);

    const [blackouts, setBlackouts] = useState([
        { id: 1, date: 'Oct 25, 2026', reason: 'Personal Vacation' }
    ]);

    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-8 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-heading font-black text-brand-dark mb-2">Availability Settings</h1>
                <p className="text-brand-muted">Configure your standard hours and blackout dates. The system dynamically calculates real-time slots based on these rules + travel time.</p>
            </div>

            <div className="flex gap-4 mb-6 border-b border-gray-200">
                <button
                    onClick={() => setActiveTab('weekly')}
                    className={cn("pb-3 font-bold text-sm px-2 transition-colors border-b-2", activeTab === 'weekly' ? 'border-green text-green' : 'border-transparent text-gray-400 hover:text-brand-dark')}
                >
                    Weekly Schedule
                </button>
                <button
                    onClick={() => setActiveTab('blackout')}
                    className={cn("pb-3 font-bold text-sm px-2 transition-colors border-b-2", activeTab === 'blackout' ? 'border-red text-red' : 'border-transparent text-gray-400 hover:text-brand-dark')}
                >
                    Blackout Dates
                </button>
            </div>

            {activeTab === 'weekly' && (
                <div className="glass-panel p-6 rounded-3xl space-y-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold flex items-center gap-2"><Clock className="text-brand-muted" size={20} /> Standard Hours</h3>
                        <span className="text-xs font-bold bg-green/10 text-green px-3 py-1 rounded-full uppercase tracking-wider">Auto-Syncs with BullMQ</span>
                    </div>

                    {weeklyHours.map((day, i) => (
                        <div key={day.day} className="flex items-center justify-between p-3 hover:bg-white/50 rounded-xl transition-colors">
                            <label className="flex items-center gap-3 cursor-pointer w-32">
                                <input
                                    type="checkbox"
                                    checked={day.active}
                                    onChange={(e) => {
                                        const newHours = [...weeklyHours];
                                        newHours[i].active = e.target.checked;
                                        setWeeklyHours(newHours);
                                    }}
                                    className="w-5 h-5 rounded border-gray-300 text-green focus:ring-green"
                                />
                                <span className={cn("font-bold text-sm", day.active ? "text-brand-dark" : "text-gray-400")}>{day.day}</span>
                            </label>

                            {day.active ? (
                                <div className="flex items-center gap-3">
                                    <input type="time" value={day.start} className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green/50 font-medium" />
                                    <span className="text-gray-400 font-bold">-</span>
                                    <input type="time" value={day.end} className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green/50 font-medium" />
                                </div>
                            ) : (
                                <div className="text-gray-400 text-sm font-medium italic select-none">Unavailable</div>
                            )}
                        </div>
                    ))}

                    <button className="w-full mt-4 bg-brand-dark hover:bg-black text-white font-bold py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2">
                        <CheckCircle size={18} /> Save Weekly Schedule
                    </button>
                </div>
            )}

            {activeTab === 'blackout' && (
                <div className="glass-panel p-6 rounded-3xl">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold flex items-center gap-2"><CalendarIcon className="text-red" size={20} /> Blocked Dates</h3>
                        <button className="bg-red/10 text-red hover:bg-red hover:text-white transition-colors p-2 rounded-xl flex items-center gap-1 text-sm font-bold">
                            <Plus size={16} /> Add Date
                        </button>
                    </div>

                    <div className="space-y-3">
                        {blackouts.map(date => (
                            <div key={date.id} className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                                <div>
                                    <h4 className="font-bold text-brand-dark">{date.date}</h4>
                                    <p className="text-xs text-brand-muted font-medium">{date.reason}</p>
                                </div>
                                <button className="text-gray-300 hover:text-red transition-colors p-2">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                        {blackouts.length === 0 && (
                            <div className="text-center text-brand-muted py-8 text-sm font-medium">No blackout dates scheduled.</div>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
}
