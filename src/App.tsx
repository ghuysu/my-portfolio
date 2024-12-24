import { useState } from 'react';
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

function App() {
  const data: Data = jsonData;
  const [path, setPath] = useState('/');
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div>
        <AnimationBars path={path} loading={loading} setLoading={setLoading} />
        <div className={`relative ${loading && 'hidden'} overflow-y-auto`}>
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
            <Route path="/projects" element={<Projects />} />
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
