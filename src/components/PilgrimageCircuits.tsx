import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { circuits } from '@/data/circuits';

export default function PilgrimageCircuits() {
  const navigate = useNavigate();

  const handleCircuitClick = (circuitId: string) => {
    const categoryMap: Record<string, string> = {
      'char-dham': 'Char Dham',
      jyotirlinga: 'Jyotirlinga',
      'shakti-peethas': 'Shakti Peetha',
      'south-india-trail': 'UNESCO Heritage',
    };
    const category = categoryMap[circuitId];
    if (category) {
      navigate(`/explore?category=${encodeURIComponent(category)}`);
    } else {
      navigate('/explore');
    }
  };

  return (
    <section id="circuits" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-saffron-600">
            Pilgrimage Circuits
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal-800 sm:text-4xl">
            Sacred Journeys of a Lifetime
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-charcoal-500">
            Walk the ancient routes that millions have walked for centuries — each circuit a complete pilgrimage through India's holiest sites.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {circuits.map((circuit) => (
            <article
              key={circuit.id}
              className="group relative overflow-hidden rounded-2xl shadow-card transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={circuit.image}
                  alt={circuit.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/30 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-sm text-gold-300">{circuit.sanskrit}</span>
                <h3 className="font-serif text-2xl font-semibold text-ivory-50 leading-tight">
                  {circuit.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-100/70 max-w-md">
                  {circuit.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-ivory-100/50">
                    {circuit.sites} sacred sites
                  </span>
                  <button
                    onClick={() => handleCircuitClick(circuit.id)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-ivory-50/15 px-4 py-2 text-sm font-semibold text-ivory-50 backdrop-blur-sm transition-all duration-300 hover:bg-saffron-500 hover:text-ivory-50"
                  >
                    Explore Circuit
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
