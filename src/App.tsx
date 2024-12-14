import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Experience from './pages/Experience';
import { Data } from './interface';
import { gsap } from 'gsap';

function App() {
  const [data, setData] = useState<Data | null>(null);
  const [path, setPath] = useState('/');
  const [loading, setLoading] = useState(true);

  // References for the bars
  const firstBar = useRef<HTMLDivElement>(null);
  const secondBar = useRef<HTMLDivElement>(null);
  const thirdBar = useRef<HTMLDivElement>(null);
  const fourthBar = useRef<HTMLDivElement>(null);
  const fifthBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/src/assets/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setLoading(true);
    const bars = [
      firstBar.current,
      secondBar.current,
      thirdBar.current,
      fourthBar.current,
      fifthBar.current,
    ];
  
    const timeline = gsap.timeline({
      onComplete: () => setLoading(false),
    });
  
    bars.forEach((bar, index) => {
      timeline.fromTo(
        bar,
        { y: '-100%' },
        { y: '100%', duration: 0.5, ease: 'power2.inOut' },
        index * 0.05,
      );
    });
  }, [path]);  

  return (
    <Router>
      <div>
        {/* Animated Bars */}
        <div className={`${!loading && 'hidden'} flex h-screen absolute top-0 left-0 right-0 z-10`}>
          <div ref={firstBar} className="flex-1 bg-[#f30716]"></div>
          <div ref={secondBar} className="flex-1 bg-main_red"></div>
          <div ref={thirdBar} className="flex-1 bg-[#ce0612]"></div>
          <div ref={fourthBar} className="flex-1 bg-[#a60711]"></div>
          <div ref={fifthBar} className="flex-1 bg-[#85050d]"></div>
        </div>

        {/* Main Content */}
        <div className={`relative ${loading && 'hidden'}`}>
          {data ? (
            <Header nickname={data?.nickname} path={path} setPath={setPath} />
          ) : (
            <p>Loading...</p>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
