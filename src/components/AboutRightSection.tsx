import { useContext } from 'react';
import AboutMe from './AboutMe';
import Education from './Education';
import Skills from './Skills';
import { PathContext } from '../stores/path-context';

const AboutRightSection = () => {
  const { path } = useContext(PathContext);

  return (
    <div>
      {path === '/about' && <AboutMe />}
      {path === '/about/education' && <Education />}
      {path === '/about/skills' && <Skills />}
    </div>
  );
};

export default AboutRightSection;
