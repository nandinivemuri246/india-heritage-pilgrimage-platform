import { Calendar, MapPin } from 'lucide-react';
import { festivals } from '@/data/festivals';

export default function UpcomingFestivals() {
  return (
    <section id="festivals" className="relative bg-charcoal-800 py-20 lg:py-28 overflow-hidden">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full pattern-bg" style={{ backgroundSize: '48px 48px' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold-300">
            Upcoming Festivals
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ivory-50 sm:text-4xl">
            Sacred Celebrations Ahead
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-ivory-100/60">
            Plan your visit around India's most vibrant temple festivals — where centuries-old rituals meet living devotion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {festivals.map((festival) => (
            <article
              key={festival.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-charcoal-700/50 ring-1 ring-ivory-50/10 backdrop-blur-sm transition-all duration-500 hover:ring-gold-300/30 hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={festival.image}
                  alt={festival.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-lg font-semibold text-ivory-50 leading-tight">
                  {festival.name}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-gold-300">
                  <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>{festival.date}</span>
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-ivory-100/50">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>{festival.region}</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ivory-100/60">
                  {festival.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
