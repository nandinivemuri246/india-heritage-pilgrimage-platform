import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Compass, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Explore Temples', to: '/explore' },
  { label: 'States', to: '/#states' },
  { label: 'Pilgrimage', to: '/#circuits' },
  { label: 'Festivals', to: '/#festivals' },
  { label: 'About', to: '/#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  const isExplore = location.pathname.startsWith('/explore');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On non-home pages, always show solid navbar
  const solid = scrolled || !isHome;

  const handleNavClick = (to: string) => {
    setMobileOpen(false);
    if (to.startsWith('/#')) {
      const sectionId = to.substring(2);
      if (isHome) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(to);
    }
  };

  const isActive = (to: string) => {
    if (to === '/') return isHome;
    if (to === '/explore') return isExplore;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2.5 group"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 ${
                solid
                  ? 'border-saffron-500/40 bg-saffron-50'
                  : 'border-ivory-50/40 bg-ivory-50/10 backdrop-blur-sm'
              }`}
            >
              <Compass
                className={`h-5 w-5 transition-colors duration-300 ${
                  solid ? 'text-saffron-600' : 'text-ivory-50'
                }`}
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif text-lg font-semibold tracking-wide transition-colors duration-300 ${
                  solid ? 'text-charcoal-800' : 'text-ivory-50'
                }`}
              >
                Sacred India Trails
              </span>
              <span
                className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                  solid ? 'text-charcoal-400' : 'text-ivory-100/70'
                }`}
              >
                Temple Heritage Portal
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.to)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-saffron-500 ${
                  isActive(link.to)
                    ? 'text-saffron-600'
                    : solid
                      ? 'text-charcoal-600'
                      : 'text-ivory-100/90'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/#plan')}
              className="inline-flex items-center gap-2 rounded-full bg-saffron-500 px-5 py-2.5 text-sm font-semibold text-ivory-50 shadow-soft transition-all duration-300 hover:bg-saffron-600 hover:shadow-soft-lg"
            >
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
              Plan Your Pilgrimage
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              solid ? 'text-charcoal-700' : 'text-ivory-50'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-1 rounded-2xl bg-ivory-50 p-4 shadow-soft-lg">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.to)}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-ivory-100 hover:text-saffron-600 ${
                    isActive(link.to)
                      ? 'text-saffron-600 bg-saffron-50'
                      : 'text-charcoal-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('/#plan')}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-saffron-500 px-5 py-3 text-sm font-semibold text-ivory-50 shadow-soft"
              >
                <MapPin className="h-4 w-4" strokeWidth={1.5} />
                Plan Your Pilgrimage
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
