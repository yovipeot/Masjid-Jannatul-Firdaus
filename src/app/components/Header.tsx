import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5l6 4v8.5h-3v-5H7v5H4v-8.5l6-4z"/>
              </svg>
            </div>
            <span className="text-xl text-primary">Masjid Jannatul Firdaus</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#prayer-times" className="text-foreground hover:text-primary transition-colors">Prayer Times</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#programs" className="text-foreground hover:text-primary transition-colors">Programs</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors">
              Donate
            </button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#home" className="block text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#prayer-times" className="block text-foreground hover:text-primary transition-colors">Prayer Times</a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">About</a>
            <a href="#programs" className="block text-foreground hover:text-primary transition-colors">Programs</a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors">Contact</a>
            <button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors">
              Donate
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
