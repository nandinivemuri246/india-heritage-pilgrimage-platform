import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Bookmark, MapPin, Calendar, Clock, Building2, Sparkles,
  Users, Shirt, Bus, BedDouble, MapPinned, Star, ArrowLeft,
  ArrowRight, CalendarDays, Landmark,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { getTempleById, getRelatedTemples } from '@/data/temples';
import { useFavorites } from '@/context/FavoritesContext';
import TempleMap from '@/components/TempleMap';

export default function TempleDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();

  const temple = id ? getTempleById(id) : undefined;

  if (!temple) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-ivory-50 pt-20">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ivory-200">
          <Landmark className="h-10 w-10 text-charcoal-400" strokeWidth={1.5} />
        </div>
        <h1 className="mt-6 font-serif text-2xl font-semibold text-charcoal-800">
          Temple Not Found
        </h1>
        <p className="mt-2 text-charcoal-500">
          The temple you're looking for doesn't exist or may have been moved.
        </p>
        <button
          onClick={() => navigate('/explore')}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-saffron-500 px-6 py-3 text-sm font-semibold text-ivory-50 transition-colors hover:bg-saffron-600"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          Back to Explore
        </button>
      </div>
    );
  }

  const relatedTemples = getRelatedTemples(temple);
  const bookmarked = isFavorite(temple.id);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero image */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src={temple.image}
          alt={temple.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/50 via-charcoal-900/40 to-charcoal-900/85" />

        {/* Back button */}
        <div className="absolute top-6 left-4 z-10 sm:left-6 lg:left-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full bg-ivory-50/15 px-4 py-2 text-sm font-medium text-ivory-50 backdrop-blur-md transition-colors hover:bg-ivory-50/25"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Back
          </button>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron-500/90 px-3 py-1 text-xs font-medium text-ivory-50">
              {temple.category}
            </span>
            <h1 className="mt-3 font-serif text-3xl font-semibold text-ivory-50 sm:text-4xl lg:text-5xl">
              {temple.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-ivory-100/80">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" strokeWidth={1.5} />
                {temple.city}, {temple.state}
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4" strokeWidth={1.5} />
                {temple.deity}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" strokeWidth={1.5} />
                Est. {temple.established}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Action bar */}
      <div className="sticky top-16 z-30 border-b border-ivory-200 bg-ivory-50/95 backdrop-blur-md lg:top-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleFavorite(temple.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                bookmarked
                  ? 'bg-saffron-500 text-ivory-50'
                  : 'border border-charcoal-200 text-charcoal-600 hover:border-saffron-300'
              }`}
            >
              <Bookmark
                className={`h-4 w-4 ${bookmarked ? 'fill-ivory-50' : ''}`}
                strokeWidth={1.5}
              />
              {bookmarked ? 'Favorited' : 'Add to Favorites'}
            </button>
          </div>
          <Link
            to="/explore"
            className="text-sm font-medium text-charcoal-500 transition-colors hover:text-saffron-600"
          >
            Explore More Temples
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="space-y-10 lg:col-span-2">
            {/* Description */}
            <section>
              <p className="text-lg leading-relaxed text-charcoal-600">
                {temple.description}
              </p>
            </section>

            {/* History */}
            <DetailSection icon={Landmark} title="Historical Background">
              {temple.history}
            </DetailSection>

            {/* Cultural Significance */}
            <DetailSection icon={Star} title="Cultural Significance">
              {temple.culturalSignificance}
            </DetailSection>

            {/* Architecture */}
            <DetailSection icon={Building2} title="Architecture">
              {temple.architecture}
            </DetailSection>

            {/* Rituals */}
            <DetailSection icon={Sparkles} title="Rituals & Worship">
              {temple.rituals}
            </DetailSection>

            {/* Daily Pooja */}
            <DetailSection icon={Clock} title="Daily Pooja Schedule">
              {temple.dailyPooja}
            </DetailSection>

            {/* Darshan Timings */}
            <section>
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-saffron-600" strokeWidth={1.5} />
                <h2 className="font-serif text-xl font-semibold text-charcoal-800">
                  Darshan Timings
                </h2>
              </div>
              <div className="overflow-hidden rounded-xl border border-ivory-200">
                {temple.darshanTimings.map((timing, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-4 py-3 ${
                      i % 2 === 0 ? 'bg-ivory-50' : 'bg-ivory-100'
                    }`}
                  >
                    <span className="text-sm font-medium text-charcoal-700">
                      {timing.session}
                    </span>
                    <span className="text-sm text-charcoal-500">{timing.time}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Major Festivals */}
            <section>
              <div className="mb-4 flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-saffron-600" strokeWidth={1.5} />
                <h2 className="font-serif text-xl font-semibold text-charcoal-800">
                  Major Festivals
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {temple.majorFestivals.map((festival, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-saffron-50 px-4 py-2 text-sm font-medium text-saffron-700 ring-1 ring-saffron-200"
                  >
                    {festival}
                  </span>
                ))}
              </div>
            </section>

            {/* Visitor Guidelines */}
            <DetailSection icon={Users} title="Visitor Guidelines">
              {temple.visitorGuidelines}
            </DetailSection>

            {/* Dress Code */}
            <DetailSection icon={Shirt} title="Dress Code">
              {temple.dressCode}
            </DetailSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Transportation */}
              <SidebarCard icon={Bus} title="Transportation">
                {temple.transportation}
              </SidebarCard>

              {/* Nearby Accommodation */}
              <SidebarCard icon={BedDouble} title="Nearby Accommodation">
                {temple.nearbyAccommodation}
              </SidebarCard>

              {/* Best Time to Visit */}
              <SidebarCard icon={Calendar} title="Best Time to Visit">
                {temple.bestTimeToVisit}
              </SidebarCard>

              {/* Nearby Attractions */}
              <SidebarCard icon={MapPinned} title="Nearby Attractions">
                <ul className="space-y-2">
                  {temple.nearbyAttractions.map((attraction, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-charcoal-500">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-saffron-500" strokeWidth={1.5} />
                      {attraction}
                    </li>
                  ))}
                </ul>
              </SidebarCard>

              {/* Interactive Map */}
              <TempleMap
                name={temple.name}
                city={temple.city}
                state={temple.state}
                latitude={temple.latitude}
                longitude={temple.longitude}
              />
            </div>
          </div>
        </div>

        {/* Related Temples */}
        {relatedTemples.length > 0 && (
          <section className="mt-16">
            <div className="mb-8">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-saffron-600">
                Related Temples
              </span>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-charcoal-800 sm:text-3xl">
                You May Also Like
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTemples.map((related) => {
                const relBookmarked = isFavorite(related.id);
                return (
                  <article
                    key={related.id}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-ivory-50 shadow-card transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <button
                        onClick={() => toggleFavorite(related.id)}
                        className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ivory-50/90 shadow-soft backdrop-blur-sm transition-all hover:scale-110"
                        aria-label={relBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                      >
                        <Bookmark
                          className={`h-4 w-4 transition-colors ${
                            relBookmarked
                              ? 'fill-saffron-500 text-saffron-500'
                              : 'text-charcoal-500'
                          }`}
                          strokeWidth={1.5}
                        />
                      </button>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="font-serif text-lg font-semibold text-charcoal-800">
                        {related.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5 text-sm text-charcoal-400">
                        <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                        {related.city}, {related.state}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal-500 line-clamp-2">
                        {related.description}
                      </p>
                      <button
                        onClick={() => navigate(`/temple/${related.id}`)}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-600 transition-colors hover:text-saffron-700"
                      >
                        View Temple
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function DetailSection({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-saffron-600" strokeWidth={1.5} />
        <h2 className="font-serif text-xl font-semibold text-charcoal-800">{title}</h2>
      </div>
      <p className="text-sm leading-relaxed text-charcoal-500">{children}</p>
    </section>
  );
}

function SidebarCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-ivory-200 bg-ivory-50 p-5 shadow-soft">
      <div className="mb-3 flex items-center gap-2">
        <Icon className="h-4 w-4 text-saffron-600" strokeWidth={1.5} />
        <h3 className="text-sm font-semibold text-charcoal-700">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed text-charcoal-500">{children}</div>
    </div>
  );
}
