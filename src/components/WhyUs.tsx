import { BookOpen, Compass, CalendarCheck, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: BookOpen,
    title: 'Authentic Heritage Information',
    description:
      'Well-researched, historically grounded information about every temple — its origins, architecture, rituals and cultural significance.',
  },
  {
    icon: Compass,
    title: 'Easy Temple Discovery',
    description:
      'Search by name, deity, state or festival to find the temples that matter to you, with rich visual context for every shrine.',
  },
  {
    icon: CalendarCheck,
    title: 'Better Pilgrimage Planning',
    description:
      'Plan your journey with darshan timings, festival calendars and curated pilgrimage circuits all in one place.',
  },
  {
    icon: Heart,
    title: 'Cultural Awareness',
    description:
      'Understand the living traditions behind each shrine — the stories, the rituals and the communities that sustain them.',
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="relative bg-ivory-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-saffron-600">
            Why Sacred India Trails
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal-800 sm:text-4xl">
            A Trusted Guide to India's Sacred Heritage
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group flex flex-col items-start rounded-2xl border border-ivory-200 bg-ivory-50 p-7 shadow-soft transition-all duration-400 hover:shadow-card hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-saffron-50 to-gold-100 ring-1 ring-gold-200 transition-all duration-400 group-hover:from-saffron-100 group-hover:to-gold-200">
                  <Icon className="h-6 w-6 text-saffron-600" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-charcoal-800">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
