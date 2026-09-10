import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { states } from '@/data/states';

export default function ExploreByState() {
  const navigate = useNavigate();

  const handleStateClick = (stateName: string) => {
    navigate(`/explore?state=${encodeURIComponent(stateName)}`);
  };

  return (
    <section id="states" className="relative bg-ivory-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-saffron-600">
            Explore By State
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal-800 sm:text-4xl">
            A Land of Countless Shrines
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-charcoal-500">
            Every Indian state weaves its own tapestry of sacred architecture, regional deities and centuries of devotion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {states.map((state) => (
            <button
              key={state.id}
              onClick={() => handleStateClick(state.name)}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl shadow-card transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1 text-left"
            >
              <img
                src={state.image}
                alt={state.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="font-serif text-lg font-semibold text-ivory-50 leading-tight">
                  {state.name}
                </h3>
                <p className="mt-0.5 text-xs text-ivory-100/70">
                  {state.templeCount} temples
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ivory-100/60 line-clamp-2">
                  {state.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate('/explore')}
            className="inline-flex items-center gap-2 rounded-full border border-charcoal-200 bg-ivory-50 px-6 py-3 text-sm font-semibold text-charcoal-700 shadow-soft transition-all duration-300 hover:border-saffron-400 hover:text-saffron-600"
          >
            View All States
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
