import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

const SocketContext = createContext(null);

export function SocketProvider({ children }) {
    const { user, token } = useAuth();
    const [isConnected, setIsConnected] = useState(false);
    const [messages, setMessages] = useState([]);
    const [liveLocations, setLiveLocations] = useState({}); // Track provider locations

    useEffect(() => {
        if (user && token) {
            // Mock connecting to Socket.io server
            console.log('Connecting to Socket.io with token:', token);
            setIsConnected(true);

            // Mock receiving periodic location updates from a provider
            const locationInterval = setInterval(() => {
                setLiveLocations(prev => ({
                    ...prev,
                    'mock-provider-789': { lat: 9.789 + Math.random() * 0.01, lng: 126.152 + Math.random() * 0.01 }
                }));
            }, 5000);

            return () => {
                console.log('Disconnecting from Socket.io');
                setIsConnected(false);
                clearInterval(locationInterval);
            };
        }
    }, [user, token]);

    const sendMessage = (roomId, content, attachmentUrl = null) => {
        // Mock emitting a message event
        const newMsg = {
            id: Date.now().toString(),
            room_id: roomId,
            sender_id: user?.id,
            content,
            attachment_url: attachmentUrl,
            created_at: new Date().toISOString()
        };
        setMessages(prev => [...prev, newMsg]);
        console.log('Socket emitted message:', newMsg);
    };

    return (
        <SocketContext.Provider value={{ isConnected, messages, sendMessage, liveLocations }}>
            {children}
        </SocketContext.Provider>
    );
}

export function useSocket() {
    const context = useContext(SocketContext);
    if (!context) {
        throw new Error('useSocket must be used within a SocketProvider');
    }
    return context;
}
