import { useNavigate } from 'react-router-dom';
import {
  Moon, Disc, Feather, Crown, Flower2, Sparkles, Zap, Mountain,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { deities } from '@/data/deities';

const iconMap: Record<string, LucideIcon> = {
  Moon,
  Disc,
  Feather,
  Crown,
  Flower2,
  Sparkles,
  Zap,
  Mountain,
};

export default function PopularDeities() {
  const navigate = useNavigate();

  const handleDeityClick = (deityName: string) => {
    const searchName = deityName.split(' ')[0];
    navigate(`/explore?deity=${encodeURIComponent(searchName)}`);
  };

  return (
    <section className="relative py-20 lg:py-28 pattern-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-saffron-600">
            Popular Deities
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal-800 sm:text-4xl">
            The Divine Pantheon
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-charcoal-500">
            Discover temples by the deities they enshrine — from Shiva and Vishnu to the Divine Mother and the beloved Ganesha.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {deities.map((deity) => {
            const Icon = iconMap[deity.icon] ?? Sparkles;
            return (
              <button
                key={deity.id}
                onClick={() => handleDeityClick(deity.name)}
                className="group flex flex-col items-center rounded-2xl border border-ivory-200 bg-ivory-50 p-6 text-center shadow-soft transition-all duration-400 hover:border-saffron-300 hover:shadow-card hover:-translate-y-1"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-saffron-50 to-gold-100 ring-1 ring-gold-200 transition-all duration-400 group-hover:from-saffron-100 group-hover:to-gold-200">
                  <Icon className="h-7 w-7 text-saffron-600" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-charcoal-800">
                  {deity.name}
                </h3>
                <span className="mt-0.5 text-sm text-gold-600">{deity.sanskrit}</span>
                <p className="mt-2 text-xs leading-relaxed text-charcoal-400">
                  {deity.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
