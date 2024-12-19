import { RightSectionProps } from '../interface';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const RightSection: React.FC<RightSectionProps> = ({
  about,
  fullname,
  contact,
  role,
}) => {
  const roleRef = useRef<HTMLDivElement>(null);
  const [currentRole, setCurrentRole] = useState<string>(role[0]);
  const roleIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(roleRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          roleIndex.current = (roleIndex.current + 1) % role.length;
          setCurrentRole(role[roleIndex.current]);

          gsap.fromTo(
            roleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 },
          );
        },
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [role]);

  return (
    <div className="text-center xl:text-left lg:text-left flex-1">
      <p className="mt-4 text-main_red text-2xl">
        <span ref={roleRef} className="font-semibold inline-block">
          <span className="text-white"> -</span>
          {currentRole}
          <span className="text-white"> -</span>
        </span>
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mt-4">
        Hello, <br></br>I&apos;m{' '}
        <span className="text-main_red">{fullname}</span>
      </h1>
      <p className="mt-10 text-justify">{about}</p>

      {/* Buttons and Social Icons */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center lg:justify-start">
        <a
          href={contact.cv}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-transparent font-semibold border-2 border-main_red border-solid text-main_red px-6 py-2 rounded-full hover:bg-main_red hover:text-white transition">
            Check my Resume/CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default RightSection;
