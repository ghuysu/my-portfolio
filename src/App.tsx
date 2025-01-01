import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Data } from './interface';
import jsonData from './data.json';
import AnimationBars from './components/AnimationBars';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import gsap from 'gsap';
import NotFound from './pages/NotFound';

function App() {
  const data: Data = jsonData;
  const [path, setPath] = useState('/');
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
    <Router>
      <div>
        <AnimationBars path={path} loading={loading} setLoading={setLoading} />
        <div className={`relative ${loading && 'hidden'}`}>
          <div ref={headerRef}>
            <Header nickname={data?.nickname} path={path} setPath={setPath} />
          </div>
          <div ref={bodyRef}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    about={data.about}
                    fullname={data.fullname}
                    role={data.role}
                    contact={data.contact}
                  />
                }
              />
              <Route
                path="/services"
                element={<Services services={data.services} />}
              />
              <Route
                path="/about"
                element={
                  <About
                    summary={data.summary}
                    education={data.education}
                    skills={data.skills}
                  />
                }
              />
              <Route
                path="/projects"
                element={<Projects projects={data.projects} />}
              />
              <Route
                path="/contact"
                element={
                  <Contact
                    address={data.contact.address}
                    email={data.contact.email}
                    phone={data.contact.phone}
                  />
                }
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
