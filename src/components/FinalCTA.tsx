import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section id="plan" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/31969428/pexels-photo-31969428.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Ancient Indian temple complex"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/70 to-charcoal-900/85" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-ivory-50 text-balance sm:text-4xl lg:text-5xl">
          Your Journey Through India's Sacred Heritage Begins Here
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-ivory-100/75">
          Start exploring centuries of devotion, architecture and living tradition. Every temple has a story — let us help you find yours.
        </p>
        <button
          onClick={() => navigate('/explore')}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-saffron-500 px-8 py-4 text-sm font-semibold text-ivory-50 shadow-soft-lg transition-all duration-300 hover:bg-saffron-600 hover:scale-105"
        >
          Explore Temples
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
