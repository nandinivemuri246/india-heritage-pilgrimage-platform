import { Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from '@/context/FavoritesContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ExploreTemplesPage from '@/pages/ExploreTemplesPage';
import TempleDetailsPage from '@/pages/TempleDetailsPage';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <FavoritesProvider>
      <div className="min-h-screen bg-ivory-50">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExploreTemplesPage />} />
            <Route path="/temple/:id" element={<TempleDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </FavoritesProvider>
  );
}

export default App;
