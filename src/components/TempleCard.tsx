import { useNavigate } from 'react-router-dom';
import { Bookmark, MapPin, ArrowRight } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext';
import type { Temple } from '@/data/temples';

interface TempleCardProps {
  temple: Temple;
}

export default function TempleCard({ temple }: TempleCardProps) {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();
  const bookmarked = isFavorite(temple.id);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-ivory-50 shadow-card transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={temple.image}
          alt={temple.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Bookmark */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(temple.id);
          }}
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ivory-50/90 shadow-soft backdrop-blur-sm transition-all duration-300 hover:scale-110"
          aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          <Bookmark
            className={`h-4 w-4 transition-colors duration-300 ${
              bookmarked ? 'fill-saffron-500 text-saffron-500' : 'text-charcoal-500'
            }`}
            strokeWidth={1.5}
          />
        </button>

        {/* Deity badge */}
        <div className="absolute bottom-3 left-3 rounded-full bg-ivory-50/90 px-3 py-1 text-xs font-medium text-charcoal-600 backdrop-blur-sm shadow-soft">
          {temple.deity}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl font-semibold text-charcoal-800 leading-tight">
          {temple.name}
        </h3>
        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-charcoal-400">
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span>{temple.city}, {temple.state}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-charcoal-500">
          {temple.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-ivory-200 pt-4">
          <span className="text-xs text-charcoal-400">Est. {temple.established}</span>
          <button
            onClick={() => navigate(`/temple/${temple.id}`)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-600 transition-colors hover:text-saffron-700"
          >
            View Temple
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </article>
  );
}
