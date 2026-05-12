import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Budget = lazy(() => import('./pages/Budget'));
const Construction = lazy(() => import('./pages/Construction'));
const Architecture = lazy(() => import('./pages/Architecture'));
const RealEstate = lazy(() => import('./pages/RealEstate'));

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen font-sans text-dark bg-white">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/budget" element={<Budget />} />
                <Route path="/construtora" element={<Construction />} />
                <Route path="/arquitetura" element={<Architecture />} />
                <Route path="/mediacao-imobiliaria" element={<RealEstate />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
