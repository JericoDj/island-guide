import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    // Mocking the custom JWT Auth state defined in our architecture
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check local storage for JWT token on mount
        const storedToken = localStorage.getItem('island_guide_token');
        if (storedToken) {
            // Mock validating the token with our Node.js API
            setToken(storedToken);
            setUser({
                id: 'mock-uuid-123',
                name: 'Guest User',
                role: 'CUSTOMER', // Roles: CUSTOMER, PROVIDER, DISPATCHER, ADMIN
                email: 'user@example.com',
                tier: 'Silver',
                wallet_balance: 150.00
            });
        }
        setIsLoading(false);
    }, []);

    const login = async (email, password) => {
        // Mock API call to our Custom Auth API
        const mockToken = 'mock_jwt_token_abc123';
        localStorage.setItem('island_guide_token', mockToken);
        setToken(mockToken);
        setUser({
            id: 'mock-uuid-123',
            name: email.split('@')[0], // dynamically set name based on email
            role: 'CUSTOMER',
            email,
            tier: 'Silver',
            wallet_balance: 150.00
        });
    };

    const logout = () => {
        localStorage.removeItem('island_guide_token');
        setToken(null);
        setUser(null);
    };

    const updateWallet = (amount) => {
        if (user) {
            setUser(prev => ({ ...prev, wallet_balance: prev.wallet_balance + amount }));
        }
    };

    return (
        <AuthContext.Provider value={{ user, token, isLoading, login, logout, updateWallet }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
