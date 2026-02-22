import React, { useState } from 'react';
import { useSocket } from '../../context/SocketContext';
import { useAuth } from '../../context/AuthContext';
import { Send, Image as ImageIcon, X, MessageSquare } from 'lucide-react';
import { cn } from '../../utils/utils';

export default function ChatWidget({ roomId, guideName = "Local Guide" }) {
    const { messages, sendMessage } = useSocket();
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [inputText, setInputText] = useState('');

    // Filter messages for this specific room
    const roomMessages = messages.filter(m => m.room_id === roomId);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;
        sendMessage(roomId, inputText);
        setInputText('');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">

            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 sm:w-96 h-[500px] glass-panel rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border-white/80 transition-all origin-bottom-right">

                    {/* Header */}
                    <div className="bg-green p-4 flex items-center justify-between text-white shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                                {guideName.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-bold text-sm leading-tight">{guideName}</h3>
                                <span className="text-xs text-white/80">Online • 1-to-1 Chat</span>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/40">
                        <div className="text-center text-xs text-brand-muted font-medium my-4">
                            Messages are retained for 90 days.
                        </div>
                        {roomMessages.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-brand-muted">
                                <MessageSquare size={32} className="mb-2 opacity-50" />
                                <p className="text-sm font-medium">No messages yet.</p>
                                <p className="text-xs">Say hi to {guideName}!</p>
                            </div>
                        ) : (
                            roomMessages.map((msg, i) => {
                                const isMe = msg.sender_id === user?.id;
                                return (
                                    <div key={i} className={cn("flex", isMe ? "justify-end" : "justify-start")}>
                                        <div className={cn(
                                            "max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-sm",
                                            isMe
                                                ? "bg-green text-white rounded-br-sm"
                                                : "bg-white text-brand-dark rounded-bl-sm border border-gray-100"
                                        )}>
                                            {msg.content}
                                            <div className={cn("text-[10px] mt-1 opacity-70 text-right", isMe ? "text-white" : "text-brand-muted")}>
                                                {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white shrink-0 border-t border-gray-100">
                        <form onSubmit={handleSend} className="flex gap-2 relative">
                            <button type="button" className="p-2 text-brand-muted hover:text-brand-dark hover:bg-gray-50 rounded-full transition-colors shrink-0">
                                <ImageIcon size={20} />
                            </button>
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green/50"
                            />
                            <button
                                type="submit"
                                disabled={!inputText.trim()}
                                className="w-10 h-10 rounded-full bg-green flex items-center justify-center text-white shrink-0 hover:bg-green-hover disabled:opacity-50 disabled:hover:bg-green shadow-sm transition-all"
                            >
                                <Send size={16} className="ml-0.5" />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-brand-dark hover:bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>

        </div>
    );
}
