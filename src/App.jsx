import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SocketProvider } from './context/SocketContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import DispatchDashboard from './pages/DispatchDashboard';
import BookingCheckout from './pages/BookingCheckout';
import ProviderSchedule from './pages/ProviderSchedule';
import ChatWidget from './components/domain/ChatWidget';

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <Router>
          <div className="min-h-screen bg-cream font-sans text-brand-dark flex flex-col relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green/20 rounded-full blur-[120px] pointer-events-none" />

            <Navbar />

            <main className="flex-grow z-10 p-6 md:p-10 max-w-7xl mx-auto w-full relative">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/dispatch" element={<DispatchDashboard />} />
                <Route path="/checkout" element={<BookingCheckout />} />
                <Route path="/provider-schedule" element={<ProviderSchedule />} />
              </Routes>

              {/* Global Realtime Features */}
              <ChatWidget roomId="room-123" guideName="Mateo R." />
            </main>
          </div>
        </Router>
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;
