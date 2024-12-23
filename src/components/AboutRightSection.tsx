import React from 'react';
import { AboutRightSectionProps } from '../interface';
import AboutMe from './AboutMe';
import Education from './Education';
import Skills from './Skills';

const AboutRightSection: React.FC<AboutRightSectionProps> = ({
  path,
  summary,
  education,
  skills,
}) => {
  return (
    <div>
      {path === 'about' && <AboutMe summary={summary} />}
      {path === 'education' && <Education education={education} />}
      {path === 'skills' && <Skills skills={skills} />}
    </div>
  );
};

export default AboutRightSection;
