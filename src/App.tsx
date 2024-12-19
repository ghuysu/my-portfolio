import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Experience from './pages/Experience';
import { Data } from './interface';
import jsonData from './data.json';
import AnimationBars from './components/AnimationBars';

function App() {
  const data: Data = jsonData;
  const [path, setPath] = useState('/');
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div>
        <AnimationBars path={path} loading={loading} setLoading={setLoading}/>
        <div className={`relative ${loading && 'hidden'}`}>
          <Header nickname={data?.nickname} path={path} setPath={setPath} />
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
