import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TempleCard from '@/components/TempleCard';
import { featuredTemples } from '@/data/temples';

export default function FeaturedTemples() {
  const navigate = useNavigate();
  return (
    <section id="temples" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-saffron-600">
              Featured Temples
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal-800 sm:text-4xl">
              Sacred Shrines Across India
            </h2>
            <p className="mt-3 max-w-xl text-charcoal-500">
              From Himalayan heights to coastal shores, discover six of India's most revered temples — each a living monument of faith and artistry.
            </p>
          </div>
          <button
            onClick={() => navigate('/explore')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-saffron-600 transition-colors hover:text-saffron-700"
          >
            View All Temples
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTemples.map((temple) => (
            <TempleCard key={temple.id} temple={temple} />
          ))}
        </div>
      </div>
    </section>
  );
}
