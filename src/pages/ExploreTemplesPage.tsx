import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import TempleCard from '@/components/TempleCard';
import { allTemples, allStates, allCities, allDeities, allCategories } from '@/data/temples';

type SortOption = 'popularity' | 'alphabetical';

export default function ExploreTemplesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') ?? '');
  const [stateFilter, setStateFilter] = useState(searchParams.get('state') ?? '');
  const [cityFilter, setCityFilter] = useState(searchParams.get('city') ?? '');
  const [deityFilter, setDeityFilter] = useState(searchParams.get('deity') ?? '');
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') ?? '');
  const [sortBy, setSortBy] = useState<SortOption>('popularity');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Cities filtered by selected state — prevents invalid state+city combos
  const citiesForState = useMemo(() => {
    const templesInState = stateFilter
      ? allTemples.filter((t) => t.state === stateFilter)
      : allTemples;
    return Array.from(new Set(templesInState.map((t) => t.city))).sort();
  }, [stateFilter]);

  // Reset city filter when state changes if city is not in the new state
  useEffect(() => {
    if (cityFilter && !citiesForState.includes(cityFilter)) {
      setCityFilter('');
    }
  }, [citiesForState, cityFilter]);

  // Sync URL params when filters change from external navigation
  useEffect(() => {
    setSearchQuery(searchParams.get('q') ?? '');
    setStateFilter(searchParams.get('state') ?? '');
    setCityFilter(searchParams.get('city') ?? '');
    setDeityFilter(searchParams.get('deity') ?? '');
    setCategoryFilter(searchParams.get('category') ?? '');
  }, [searchParams]);

  // Update URL when search changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set('q', searchQuery);
    } else {
      params.delete('q');
    }
    setSearchParams(params, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setStateFilter('');
    setCityFilter('');
    setDeityFilter('');
    setCategoryFilter('');
    setSortBy('popularity');
    setSearchParams({}, { replace: true });
  };

  const hasActiveFilters =
    searchQuery || stateFilter || cityFilter || deityFilter || categoryFilter;

  const filteredTemples = useMemo(() => {
    let results = allTemples;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.city.toLowerCase().includes(q) ||
          t.state.toLowerCase().includes(q) ||
          t.deity.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q),
      );
    }

    if (stateFilter) {
      results = results.filter((t) => t.state === stateFilter);
    }

    if (cityFilter) {
      results = results.filter((t) => t.city === cityFilter);
    }

    if (deityFilter) {
      results = results.filter((t) =>
        t.deity.toLowerCase().includes(deityFilter.toLowerCase()),
      );
    }

    if (categoryFilter) {
      results = results.filter((t) => t.category === categoryFilter);
    }

    // Sort
    const sorted = [...results];
    if (sortBy === 'popularity') {
      sorted.sort((a, b) => b.popularity - a.popularity);
    } else {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sorted;
  }, [searchQuery, stateFilter, cityFilter, deityFilter, categoryFilter, sortBy]);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Page header */}
      <div className="bg-ivory-100 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-saffron-600">
            Explore Temples
          </span>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-charcoal-800 sm:text-4xl lg:text-5xl">
            Discover Sacred Shrines Across India
          </h1>
          <p className="mt-3 max-w-2xl text-charcoal-500">
            Search and filter through India's most revered temples by name, city, state, deity or category.
          </p>

          {/* Search bar */}
          <div className="mt-6 max-w-2xl">
            <div className="flex items-center gap-3 rounded-full bg-ivory-50 px-5 py-2 shadow-soft ring-1 ring-ivory-200 transition-all focus-within:ring-2 focus-within:ring-saffron-400">
              <Search className="h-5 w-5 shrink-0 text-charcoal-400" strokeWidth={1.5} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search temples, cities, states or deities..."
                className="flex-1 bg-transparent py-2.5 text-sm text-charcoal-700 placeholder:text-charcoal-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="shrink-0 text-charcoal-400 transition-colors hover:text-charcoal-600"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Filters + Results */}
      <div className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile filter toggle */}
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <button
              onClick={() => setShowMobileFilters((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-charcoal-200 bg-ivory-50 px-4 py-2 text-sm font-medium text-charcoal-700 shadow-soft"
            >
              <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
              Filters
              {hasActiveFilters && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-saffron-500 text-xs text-ivory-50">
                  {[searchQuery, stateFilter, cityFilter, deityFilter, categoryFilter].filter(Boolean).length}
                </span>
              )}
            </button>
            <span className="text-sm text-charcoal-500">
              {filteredTemples.length} {filteredTemples.length === 1 ? 'temple' : 'temples'}
            </span>
          </div>

          <div className="flex gap-8">
            {/* Desktop sidebar filters */}
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-24 space-y-5">
                <FilterSection label="State">
                  <SelectFilter
                    value={stateFilter}
                    onChange={setStateFilter}
                    options={allStates}
                    placeholder="All States"
                  />
                </FilterSection>

                <FilterSection label="City">
                  <SelectFilter
                    value={cityFilter}
                    onChange={setCityFilter}
                    options={citiesForState}
                    placeholder="All Cities"
                  />
                </FilterSection>

                <FilterSection label="Deity">
                  <SelectFilter
                    value={deityFilter}
                    onChange={setDeityFilter}
                    options={allDeities}
                    placeholder="All Deities"
                  />
                </FilterSection>

                <FilterSection label="Category">
                  <SelectFilter
                    value={categoryFilter}
                    onChange={setCategoryFilter}
                    options={allCategories}
                    placeholder="All Categories"
                  />
                </FilterSection>

                <FilterSection label="Sort By">
                  <div className="flex gap-2">
                    <SortButton
                      active={sortBy === 'popularity'}
                      onClick={() => setSortBy('popularity')}
                    >
                      Popularity
                    </SortButton>
                    <SortButton
                      active={sortBy === 'alphabetical'}
                      onClick={() => setSortBy('alphabetical')}
                    >
                      A–Z
                    </SortButton>
                  </div>
                </FilterSection>

                {hasActiveFilters && (
                  <button
                    onClick={handleClearFilters}
                    className="w-full rounded-full border border-charcoal-200 bg-ivory-50 px-4 py-2.5 text-sm font-medium text-charcoal-600 transition-colors hover:border-saffron-400 hover:text-saffron-600"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </aside>

            {/* Mobile filters drawer */}
            {showMobileFilters && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div
                  className="absolute inset-0 bg-charcoal-900/40 backdrop-blur-sm"
                  onClick={() => setShowMobileFilters(false)}
                />
                <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-3xl bg-ivory-50 p-6 shadow-soft-lg animate-fade-up">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold text-charcoal-800">Filters</h3>
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      className="text-charcoal-500"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="space-y-5">
                    <FilterSection label="State">
                      <SelectFilter
                        value={stateFilter}
                        onChange={setStateFilter}
                        options={allStates}
                        placeholder="All States"
                      />
                    </FilterSection>
                    <FilterSection label="City">
                      <SelectFilter
                        value={cityFilter}
                        onChange={setCityFilter}
                        options={citiesForState}
                        placeholder="All Cities"
                      />
                    </FilterSection>
                    <FilterSection label="Deity">
                      <SelectFilter
                        value={deityFilter}
                        onChange={setDeityFilter}
                        options={allDeities}
                        placeholder="All Deities"
                      />
                    </FilterSection>
                    <FilterSection label="Category">
                      <SelectFilter
                        value={categoryFilter}
                        onChange={setCategoryFilter}
                        options={allCategories}
                        placeholder="All Categories"
                      />
                    </FilterSection>
                    <FilterSection label="Sort By">
                      <div className="flex gap-2">
                        <SortButton
                          active={sortBy === 'popularity'}
                          onClick={() => setSortBy('popularity')}
                        >
                          Popularity
                        </SortButton>
                        <SortButton
                          active={sortBy === 'alphabetical'}
                          onClick={() => setSortBy('alphabetical')}
                        >
                          A–Z
                        </SortButton>
                      </div>
                    </FilterSection>
                    {hasActiveFilters && (
                      <button
                        onClick={handleClearFilters}
                        className="w-full rounded-full border border-charcoal-200 bg-ivory-50 px-4 py-2.5 text-sm font-medium text-charcoal-600"
                      >
                        Clear All Filters
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Results grid */}
            <div className="flex-1">
              {/* Desktop count + sort */}
              <div className="mb-6 hidden items-center justify-between lg:flex">
                <span className="text-sm text-charcoal-500">
                  Showing <span className="font-semibold text-charcoal-700">{filteredTemples.length}</span> {filteredTemples.length === 1 ? 'temple' : 'temples'}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-charcoal-400">Sort:</span>
                  <SortButton
                    active={sortBy === 'popularity'}
                    onClick={() => setSortBy('popularity')}
                  >
                    Popularity
                  </SortButton>
                  <SortButton
                    active={sortBy === 'alphabetical'}
                    onClick={() => setSortBy('alphabetical')}
                  >
                    A–Z
                  </SortButton>
                </div>
              </div>

              {/* Active filter chips */}
              {hasActiveFilters && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {searchQuery && (
                    <FilterChip label={`Search: ${searchQuery}`} onClear={() => setSearchQuery('')} />
                  )}
                  {stateFilter && (
                    <FilterChip label={stateFilter} onClear={() => setStateFilter('')} />
                  )}
                  {cityFilter && (
                    <FilterChip label={cityFilter} onClear={() => setCityFilter('')} />
                  )}
                  {deityFilter && (
                    <FilterChip label={deityFilter} onClear={() => setDeityFilter('')} />
                  )}
                  {categoryFilter && (
                    <FilterChip label={categoryFilter} onClear={() => setCategoryFilter('')} />
                  )}
                  <button
                    onClick={handleClearFilters}
                    className="text-sm font-medium text-saffron-600 hover:text-saffron-700"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {/* Grid or empty state */}
              {filteredTemples.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredTemples.map((temple) => (
                    <TempleCard key={temple.id} temple={temple} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-charcoal-200 bg-ivory-100 py-20 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory-200">
                    <Search className="h-7 w-7 text-charcoal-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-charcoal-700">
                    No temples found
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-charcoal-400">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="mt-5 rounded-full bg-saffron-500 px-6 py-2.5 text-sm font-semibold text-ivory-50 transition-colors hover:bg-saffron-600"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-charcoal-400">
        {label}
      </h3>
      {children}
    </div>
  );
}

function SelectFilter({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-lg border border-charcoal-200 bg-ivory-50 px-3 py-2.5 pr-8 text-sm text-charcoal-700 transition-colors focus:border-saffron-400 focus:outline-none"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" strokeWidth={1.5} />
    </div>
  );
}

function SortButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
        active
          ? 'bg-saffron-500 text-ivory-50'
          : 'border border-charcoal-200 bg-ivory-50 text-charcoal-600 hover:border-saffron-300'
      }`}
    >
      {children}
    </button>
  );
}

function FilterChip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron-50 px-3 py-1 text-xs font-medium text-saffron-700">
      {label}
      <button onClick={onClear} className="text-saffron-500 hover:text-saffron-700">
        <X className="h-3 w-3" />
      </button>
    </span>
  );
}
