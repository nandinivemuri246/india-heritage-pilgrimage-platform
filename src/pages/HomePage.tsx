import Hero from '@/components/Hero';
import FeaturedTemples from '@/components/FeaturedTemples';
import ExploreByState from '@/components/ExploreByState';
import PopularDeities from '@/components/PopularDeities';
import UpcomingFestivals from '@/components/UpcomingFestivals';
import PilgrimageCircuits from '@/components/PilgrimageCircuits';
import WhyUs from '@/components/WhyUs';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedTemples />
      <ExploreByState />
      <PopularDeities />
      <UpcomingFestivals />
      <PilgrimageCircuits />
      <WhyUs />
      <FinalCTA />
    </>
  );
}
