import { usePWA } from './hooks/usePWA';
import Layout from './components/Layout/Layout';
import HeroSection from './Home/HeroSection';
import FeatureSection from './Home/FeatureSection';
import PlanSection from './Home/PlanSection';
import ContactUs from './Home/ContactUs';
import { Routes, Route } from 'react-router-dom';
import GalleryPage from './Home/GalleryPage';

export default function App() {
  const { isInstallable, installApp, isOnline } = usePWA();

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeatureSection />
              <PlanSection />
              <ContactUs />
            </>
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Layout>
  );
}
