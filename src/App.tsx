import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AnimationBars from './components/AnimationBars';
import gsap from 'gsap';
import { AppContextProvider } from './stores/app-context-provider';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [loading, setLoading] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const body = bodyRef.current;

    if (!header || !body) return;

    if (loading === false) {
      gsap.fromTo(
        header,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' },
      );
      gsap.fromTo(
        body,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, delay: 0.2, ease: 'power2.out' },
      );
    }
  }, [loading]);

  return (
    <AppContextProvider>
      <Router>
        <div>
          <AnimationBars loading={loading} setLoading={setLoading} />
          <div className={`relative ${loading && 'hidden'}`}>
            <div ref={headerRef}>
              <Header />
            </div>
            <div ref={bodyRef}>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />}>
                    <Route path="/about/education" element={<About />} />
                    <Route path="/about/skills" element={<About />} />
                  </Route>
                  <Route path="/projects" element={<Projects />}>
                    <Route path="/projects/fullstack" element={<Projects />} />
                    <Route path="/projects/frontend" element={<Projects />} />
                    <Route path="/projects/backend" element={<Projects />} />
                  </Route>
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
