import React, { useState } from 'react';
import { useSocket } from '../context/SocketContext';
import { Map, Clock, UserCheck, AlertCircle, RefreshCw, Send } from 'lucide-react';
import { cn } from '../utils/utils';

// Mock active jobs matching the requested reservation states
const INITIAL_JOBS = [
    { id: 'job-101', customerName: 'Alice Tan', service: 'Private Island Hopping', status: 'IN_PROGRESS', provider: 'Mateo R.', lat: 9.790, lng: 126.155, timeRemaining: '2h 15m' },
    { id: 'job-102', customerName: 'John Doe', service: 'Surf Lesson', status: 'PENDING', provider: null, lat: 9.800, lng: 126.160, timeRemaining: '--' },
    { id: 'job-103', customerName: 'Eva Lim', service: 'Secret Lagoon Kayak', status: 'ASSIGNED', provider: 'Tala S.', lat: 9.810, lng: 126.145, timeRemaining: 'Starts in 30m' },
];

export default function DispatchDashboard() {
    const { isConnected, liveLocations } = useSocket();
    const [jobs, setJobs] = useState(INITIAL_JOBS);
    const [selectedJob, setSelectedJob] = useState(null);

    const handleAssign = (jobId, providerName) => {
        setJobs(jobs.map(job => job.id === jobId ? { ...job, status: 'ASSIGNED', provider: providerName } : job));
    };

    return (
        <div className="animate-fade-in flex flex-col h-[calc(100vh-140px)]">

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-heading font-black text-brand-dark mb-1">Dispatch Headquarters</h1>
                    <div className="flex items-center gap-2 text-sm">
                        <span className={cn("w-2 h-2 rounded-full", isConnected ? "bg-green animate-pulse" : "bg-red")} />
                        <span className="font-medium text-brand-muted">
                            Socket.io Status: {isConnected ? 'Live Connected' : 'Disconnected'}
                        </span>
                    </div>
                </div>
                <button className="bg-brand-dark text-white rounded-full px-6 py-2 font-bold text-sm shadow-md hover:bg-black transition-colors">
                    View Master Schedule
                </button>
            </div>

            <div className="flex flex-1 gap-6 overflow-hidden">

                {/* Left Panel: Active Jobs List */}
                <div className="w-1/3 flex flex-col gap-4 overflow-y-auto pr-2">
                    {jobs.map(job => (
                        <div
                            key={job.id}
                            onClick={() => setSelectedJob(job)}
                            className={cn("glass-card p-4 rounded-2xl cursor-pointer border-2 transition-all",
                                selectedJob?.id === job.id ? "border-green bg-white" : "border-white/50 hover:border-green/50")}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className={cn("text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full",
                                    job.status === 'IN_PROGRESS' ? "bg-yellow/20 text-yellow-hover" :
                                        job.status === 'PENDING' ? "bg-red/10 text-red" : "bg-green/10 text-green"
                                )}>
                                    {job.status.replace('_', ' ')}
                                </span>
                                <span className="text-xs text-brand-muted font-bold truncate max-w-[100px]">{job.id}</span>
                            </div>

                            <h3 className="font-bold text-lg mb-1">{job.service}</h3>
                            <p className="text-sm text-brand-muted mb-3 flex items-center gap-1">
                                <UserCheck size={14} /> {job.customerName}
                            </p>

                            <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
                                <div className="text-sm">
                                    <span className="text-brand-muted block text-xs">Assigned to:</span>
                                    <span className="font-bold">{job.provider || 'Unassigned'}</span>
                                </div>
                                {job.status === 'IN_PROGRESS' && (
                                    <div className="text-right">
                                        <span className="text-brand-muted block text-xs">Est. Time</span>
                                        <span className="font-bold flex items-center gap-1 text-green"><Clock size={12} /> {job.timeRemaining}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Panel: Map & Actions */}
                <div className="flex-1 glass-panel rounded-3xl overflow-hidden flex flex-col relative border-white/60">

                    {/* Mock Map View rendering */}
                    <div className="flex-1 relative bg-[#e5e3df] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83-1.66 1.66-.83-.83.83-.83zM27 27l1.66-1.66-1.66-1.66-1.66 1.66 1.66 1.66z\' fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }} />

                        {selectedJob ? (
                            <div className="z-10 text-center animate-fade-in bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-sm">
                                <Map className="w-12 h-12 text-green mx-auto mb-4" />
                                <h3 className="font-bold text-xl mb-2">Job {selectedJob.id} Area</h3>
                                <p className="text-sm text-brand-muted mb-4">Location: {selectedJob.lat.toFixed(4)}, {selectedJob.lng.toFixed(4)}</p>

                                {/* Background Job Route Calculation Mock */}
                                {selectedJob.status === 'PENDING' && (
                                    <div className="space-y-3">
                                        <div className="bg-red/10 text-red text-sm font-medium p-3 rounded-lg flex items-center justify-center gap-2 mb-4">
                                            <AlertCircle size={16} /> Needs Assignment
                                        </div>
                                        <button
                                            onClick={() => handleAssign(selectedJob.id, 'Carlo M. (Available)')}
                                            className="w-full bg-brand-dark hover:bg-black text-white py-2.5 rounded-xl font-bold transition-colors"
                                        >
                                            Assign Available Provider (BullMQ Calc)
                                        </button>
                                    </div>
                                )}

                                {selectedJob.status === 'ASSIGNED' && (
                                    <button className="w-full bg-white border border-gray-200 text-brand-dark hover:bg-gray-50 py-2.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                                        <RefreshCw size={16} /> Reassign Route
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="z-10 text-center text-brand-muted font-medium">
                                Select a job on the left to view route & provider details
                            </div>
                        )}

                        {/* Show Live Tracker if a job is in progress */}
                        {selectedJob?.status === 'IN_PROGRESS' && liveLocations['mock-provider-789'] && (
                            <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-4 shadow-xl z-20 flex items-center gap-3">
                                <div className="relative">
                                    <span className="absolute -inset-1 rounded-full bg-green/40 animate-ping" />
                                    <div className="relative w-8 h-8 rounded-full bg-green flex items-center justify-center text-white shadow"><MapPin size={16} /></div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-brand-muted uppercase">Live Tracking via Socket.io</div>
                                    <div className="font-medium text-sm">Provider {selectedJob.provider} is moving...</div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
