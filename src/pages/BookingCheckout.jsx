import React, { useState } from 'react';
import { CreditCard, Wallet, Banknote, ShieldCheck, Ticket, Calendar, Clock, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../utils/utils';

export default function BookingCheckout() {
    const { user } = useAuth();
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [usePoints, setUsePoints] = useState(false);
    const [coupon, setCoupon] = useState('');

    // Mock Booking Data
    const booking = {
        service: 'Private Sunset Sailing',
        date: 'Oct 15, 2026',
        time: '4:00 PM - 7:00 PM',
        location: 'El Nido Dock',
        price: 150.00,
        guideName: 'Mateo R.',
    };

    const currentPoints = user?.point_balance || 1250;
    const pointValue = (currentPoints / 100).toFixed(2); // 100 points = $1

    const discount = usePoints ? currentPoints / 100 : 0;
    const total = booking.price - discount;

    return (
        <div className="max-w-4xl mx-auto animate-fade-in p-2 sm:p-6 lg:p-10 mb-20">
            <h1 className="text-3xl font-heading font-black text-brand-dark mb-6 text-center sm:text-left">
                Secure Checkout
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Left Col: Payment Flow */}
                <div className="lg:w-2/3 space-y-6">

                    {/* Payment Method Selector */}
                    <div className="glass-panel p-6 rounded-[2rem]">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <ShieldCheck className="text-green" /> Select Payment Method
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { id: 'card', icon: CreditCard, label: 'Credit Card' },
                                { id: 'wallet', icon: Wallet, label: 'Wallet Balance' },
                                { id: 'cash', icon: Banknote, label: 'Manual/Cash' }
                            ].map((method) => (
                                <button
                                    key={method.id}
                                    onClick={() => setPaymentMethod(method.id)}
                                    className={cn(
                                        "flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all shadow-sm",
                                        paymentMethod === method.id
                                            ? "border-green bg-green/5 text-green"
                                            : "border-gray-100 hover:border-green/30 bg-white"
                                    )}
                                >
                                    <method.icon size={24} />
                                    <span className="font-bold text-sm">{method.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Wallet Info Notice */}
                        {paymentMethod === 'wallet' && (
                            <div className="mt-4 p-4 bg-yellow/10 border border-yellow/30 rounded-xl flex items-start gap-3">
                                <Wallet className="text-yellow shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-sm text-brand-dark">Wallet Connected</h4>
                                    <p className="text-sm text-brand-muted">Current Balance: <strong className="text-brand-dark">${user?.wallet_balance?.toFixed(2) || '0.00'}</strong></p>
                                </div>
                            </div>
                        )}

                        {/* Manual Cash Notice */}
                        {paymentMethod === 'cash' && (
                            <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-xl text-sm text-brand-muted">
                                You will need to upload a proof of payment or pay the guide precisely upon rendezvous. Booking remains <strong className="text-yellow">Pending</strong> until manually confirmed by the dispatcher.
                            </div>
                        )}
                    </div>

                    {/* Points & Rewards System */}
                    <div className="glass-panel p-6 rounded-[2rem]">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Ticket className="text-yellow" /> Rewards & Coupons
                        </h2>

                        {/* Points Redemption */}
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 mb-4 shadow-sm">
                            <div>
                                <h4 className="font-bold text-brand-dark">Redeem Island Points</h4>
                                <p className="text-xs text-brand-muted font-medium">You have <strong className="text-yellow">{currentPoints} pts</strong> (${pointValue} value)</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" checked={usePoints} onChange={() => setUsePoints(!usePoints)} />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green shadow-inner"></div>
                            </label>
                        </div>

                        {/* Coupon Code */}
                        <div>
                            <label className="block text-sm font-bold text-brand-muted tracking-wide mb-2">PROMO CODE</label>
                            <div className="flex gap-2 relative">
                                <Ticket size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                                    placeholder="Enter coupon code"
                                    className="flex-1 bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green/50 uppercase font-bold"
                                />
                                <button className="bg-brand-dark text-white px-6 font-bold rounded-xl hover:bg-black transition-colors">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Col: Booking Summary Card */}
                <div className="lg:w-1/3">
                    <div className="glass-card rounded-[2rem] p-6 border-white/60 sticky top-24">
                        <h3 className="font-heading font-black text-2xl mb-6">Order Summary</h3>

                        {/* Service Details */}
                        <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                            <div>
                                <h4 className="font-bold text-lg text-brand-dark leading-tight mb-1">{booking.service}</h4>
                                <p className="text-sm font-medium text-green">with {booking.guideName}</p>
                            </div>
                            <div className="space-y-2 text-sm text-brand-muted font-medium">
                                <div className="flex items-center gap-2"><Calendar size={16} /> {booking.date}</div>
                                <div className="flex items-center gap-2"><Clock size={16} className="text-red" /> {booking.time}</div>
                                <div className="flex items-center gap-2"><MapPin size={16} /> {booking.location}</div>
                            </div>
                        </div>

                        {/* Pricing Calculation */}
                        <div className="space-y-3 mb-6 pb-6 border-b border-gray-100 font-medium">
                            <div className="flex justify-between text-brand-dark">
                                <span>Subtotal</span>
                                <span>${booking.price.toFixed(2)}</span>
                            </div>
                            {usePoints && (
                                <div className="flex justify-between text-yellow font-bold">
                                    <span>Points Discount</span>
                                    <span>-${discount.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="flex justify-between text-brand-muted text-sm">
                                <span>Taxes & Platform Fee</span>
                                <span>$0.00</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <span className="font-bold text-lg">Total Due</span>
                            <span className="text-3xl font-black text-red">${total.toFixed(2)}</span>
                        </div>

                        <button className="w-full bg-green text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-green-hover transition-all">
                            Confirm & Pay
                        </button>

                        {/* Dynamic earning rules simulation */}
                        <p className="text-center text-xs font-medium text-brand-muted mt-4">
                            You will earn <strong className="text-yellow">{Math.floor(total * 1.25)} points</strong> ({user?.tier || 'Silver'} Tier multiplier)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
