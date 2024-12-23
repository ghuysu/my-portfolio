import { useState } from 'react';
import AboutLeftSection from '../components/AboutLeftSection';
import AboutRightSection from '../components/AboutRightSection';
import { AboutProps } from '../interface';

const About: React.FC<AboutProps> = ({ summary, education, skills }) => {
  const [path, setPath] = useState('about');

  return (
    <div className="bg-white flex flex-row text-black h-[calc(100vh-theme(height.20))] mx-6 sm:mx-16 md:mx-30 xl:mx-60">
      <div className="w-1/4 mt-32">
        <AboutLeftSection path={path} setPath={setPath} />
      </div>
      <div className="w-3/4 ml-5 md:ml-20 mt-32">
        <AboutRightSection
          summary={summary}
          path={path}
          education={education}
          skills={skills}
        />
      </div>
    </div>
  );
};

export default About;
