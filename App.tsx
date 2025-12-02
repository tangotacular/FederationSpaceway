import React, { useState, useMemo } from 'react';
import { TIMELINE_DATA, AGES } from './constants';
import { AgeType } from './types';
import EventCard from './components/EventCard';
import AgeSelector from './components/AgeSelector';
import LoreChat from './components/LoreChat';

const App: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState<AgeType | 'ALL'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = useMemo(() => {
    let events = TIMELINE_DATA;

    if (selectedAge !== 'ALL') {
      events = events.filter(e => e.age === selectedAge);
    }

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      events = events.filter(e => 
        e.description.toLowerCase().includes(lowerTerm) || 
        e.year.toLowerCase().includes(lowerTerm)
      );
    }

    return events;
  }, [selectedAge, searchTerm]);

  const currentAgeConfig = selectedAge !== 'ALL' ? AGES.find(a => a.id === selectedAge) : null;

  return (
    <div className="min-h-screen bg-space-black selection:bg-neon-purple selection:text-white pb-20">
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>

      {/* Hero Header */}
      <header className="relative pt-20 pb-12 px-4 text-center">
        <h1 className="font-orbitron text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple mb-4 drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">
          FEDERATION SPACEWAY
        </h1>
        <p className="font-rajdhani text-xl text-gray-400 tracking-widest uppercase">
          Historical Database: 0001YV - 2776CS
        </p>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mt-8 relative">
          <input
            type="text"
            placeholder="Search the archives..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-space-dark/50 border border-gray-700 text-white px-6 py-3 rounded-full focus:outline-none focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all font-rajdhani text-lg pl-12"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
      </header>

      {/* Navigation */}
      <AgeSelector selectedAge={selectedAge} onSelect={setSelectedAge} />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Age Description Header (if specific age selected) */}
        {currentAgeConfig && (
          <div className="mb-12 text-center animate-fade-in">
            <h2 className={`font-orbitron text-3xl font-bold mb-2 ${currentAgeConfig.color}`}>
              {currentAgeConfig.label}
            </h2>
            <p className="text-gray-500 font-rajdhani text-lg mb-4">{currentAgeConfig.yearRange}</p>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed border-l-2 border-r-2 border-gray-800 px-6 py-4 bg-gray-900/30 rounded">
              {currentAgeConfig.description}
            </p>
          </div>
        )}

        {/* Timeline List */}
        <div className="border-l-2 border-gray-800 ml-4 md:ml-0 md:pl-8 py-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <EventCard 
                key={`${event.age}-${event.year}-${index}`} 
                event={event} 
                isLast={index === filteredEvents.length - 1} 
              />
            ))
          ) : (
            <div className="text-center py-20 text-gray-500 font-orbitron">
              NO RECORDS FOUND IN ARCHIVES
            </div>
          )}
        </div>
      </main>

      {/* Gemini Chat */}
      <LoreChat />
      
      {/* Footer */}
      <footer className="mt-20 py-8 text-center text-gray-600 font-rajdhani text-sm border-t border-gray-900">
        <p>FEDERATION SPACEWAY CODEX &copy; 2776CS</p>
        <p>POWERED BY CODEX CORTEX AI</p>
      </footer>
    </div>
  );
};

export default App;