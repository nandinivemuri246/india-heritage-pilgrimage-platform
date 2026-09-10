import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (searchQuery?: string) => {
    const q = searchQuery ?? query;
    navigate(`/explore${q ? `?q=${encodeURIComponent(q)}` : ''}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5138790/pexels-photo-5138790.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Brihadeeswarar Temple, Thanjavur"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/40 to-charcoal-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ivory-50/20 bg-ivory-50/10 px-4 py-1.5 backdrop-blur-sm animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron-400" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-ivory-100/80">
              India Temple Heritage &amp; Pilgrimage Portal
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-serif text-4xl font-semibold leading-[1.1] text-ivory-50 text-balance sm:text-5xl lg:text-6xl animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Discover the Sacred Heritage of India
          </h1>

          {/* Description */}
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory-100/85 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Explore centuries of history, living traditions, sacred festivals and remarkable temples across India.
          </p>

          {/* Search bar */}
          <div
            className={`mt-8 w-full max-w-2xl animate-fade-up transition-all duration-300 ${
              focused ? 'scale-[1.01]' : ''
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <div
              className={`flex items-center gap-3 rounded-full bg-ivory-50/95 px-5 py-2 shadow-soft-lg backdrop-blur-md transition-all duration-300 ${
                focused ? 'ring-2 ring-saffron-400' : 'ring-1 ring-ivory-50/20'
              }`}
            >
              <Search className="h-5 w-5 shrink-0 text-charcoal-400" strokeWidth={1.5} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={handleKeyDown}
                placeholder="Search temples, cities, states or deities..."
                className="flex-1 bg-transparent py-2.5 text-sm text-charcoal-700 placeholder:text-charcoal-400 focus:outline-none"
              />
              <button
                onClick={() => handleSearch()}
                className="shrink-0 rounded-full bg-saffron-500 px-4 py-2 text-sm font-semibold text-ivory-50 transition-colors duration-300 hover:bg-saffron-600"
              >
                Search
              </button>
            </div>
            {/* Quick tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {['Tirupati', 'Shiva', 'Tamil Nadu', 'Char Dham', 'Diwali'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleSearch(tag)}
                  className="rounded-full border border-ivory-50/20 bg-ivory-50/5 px-3 py-1 text-xs font-medium text-ivory-100/70 backdrop-blur-sm transition-colors hover:bg-ivory-50/15 hover:text-ivory-50"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <button
              onClick={() => navigate('/explore')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-saffron-500 px-7 py-3.5 text-sm font-semibold text-ivory-50 shadow-soft-lg transition-all duration-300 hover:bg-saffron-600 hover:shadow-soft-lg"
            >
              Explore Temples
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <a
              href="#plan"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory-50/30 bg-ivory-50/10 px-7 py-3.5 text-sm font-semibold text-ivory-50 backdrop-blur-sm transition-all duration-300 hover:bg-ivory-50/20"
            >
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
              Plan Your Pilgrimage
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="flex flex-col items-center gap-2 text-ivory-100/50">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-ivory-100/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
