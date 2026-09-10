import { useNavigate } from 'react-router-dom';
import { Compass, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Explore Temples', to: '/explore' },
  { label: 'States', to: '/#states' },
  { label: 'Pilgrimage', to: '/#circuits' },
  { label: 'Festivals', to: '/#festivals' },
  { label: 'About', to: '/#about' },
];

const exploreLinks = [
  { label: 'Char Dham', to: '/explore?category=Char Dham' },
  { label: 'Jyotirlinga', to: '/explore?category=Jyotirlinga' },
  { label: 'Shakti Peethas', to: '/explore?category=Shakti Peetha' },
  { label: 'South India Trail', to: '/explore?category=UNESCO Heritage' },
  { label: 'Popular Deities', to: '/#about' },
];

const aboutLinks = [
  { label: 'About Us', to: '/#about' },
  { label: 'Contact', to: '/#about' },
  { label: 'Privacy Policy', to: '/#about' },
  { label: 'Terms of Use', to: '/#about' },
];

const socials = [Facebook, Twitter, Instagram, Youtube, Mail];

export default function Footer() {
  const navigate = useNavigate();

  const handleNav = (to: string) => {
    if (to.startsWith('/#')) {
      const sectionId = to.substring(2);
      if (window.location.pathname === '/') {
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

  return (
    <footer className="relative bg-charcoal-900 text-ivory-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => navigate('/')} className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-saffron-500/40 bg-saffron-500/10">
                <Compass className="h-5 w-5 text-saffron-400" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold text-ivory-50">
                  Sacred India Trails
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-ivory-100/50">
                  Temple Heritage Portal
                </span>
              </div>
            </button>
            <p className="mt-5 text-sm leading-relaxed text-ivory-100/55">
              A modern digital portal for discovering India's temples and exploring their history, cultural significance, festivals, rituals and pilgrimage information.
            </p>
            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-100/15 text-ivory-100/60 transition-all duration-300 hover:border-saffron-400/40 hover:bg-saffron-500/10 hover:text-saffron-400"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-ivory-100/40">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.to)}
                    className="text-sm text-ivory-100/65 transition-colors hover:text-saffron-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-ivory-100/40">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.to)}
                    className="text-sm text-ivory-100/65 transition-colors hover:text-saffron-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About / Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-ivory-100/40">
              About &amp; Contact
            </h4>
            <ul className="mt-4 space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.to)}
                    className="text-sm text-ivory-100/65 transition-colors hover:text-saffron-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ivory-100/10 pt-8 sm:flex-row">
          <p className="text-xs text-ivory-100/40">
            © {new Date().getFullYear()} Sacred India Trails. All rights reserved.
          </p>
          <p className="text-xs text-ivory-100/40">
            Crafted with reverence for India's living heritage.
          </p>
        </div>
      </div>
    </footer>
  );
}
