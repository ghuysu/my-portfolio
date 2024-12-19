import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LeftSection = () => {
    const [isNotLaptop, setIsNotLapTop] = useState(window.innerWidth <= 780);
    
    useEffect(() => {
      const handleResize = () => setIsNotLapTop(window.innerWidth < 1024);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(() => console.log(isNotLaptop), [isNotLaptop])
  
  return (
    <div className="w-[320px] h-full md:h-[280px] sm:h-[280px] flex flex-col items-center justify-center relative">
      {/* Vòng tròn quay với Framer Motion */}
      <motion.svg
        viewBox={isNotLaptop ? "0 0 280 280" : "0 0 506 506"}
        xmlns="http://www.w3.org/2000/svg"
        className={isNotLaptop? "w-[280px] h-[280px] absolute" : "w-96 h-96 absolute -bottom-[38px]"}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <motion.circle
          cx={isNotLaptop ? "140" : "252"}
          cy={isNotLaptop ? "140" : "252"}
          r={isNotLaptop ? "135" : "225"}
          stroke="#e50815"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            strokeDasharray: '24 10 0 0',
          }}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      </motion.svg>

      <img
        src="https://i.ibb.co/pfvssCh/circular-crop.png"
        alt="Profile"
        className="object-cover xl:w-[320px] lg:w-[320px] w-[250px] z-[2] xl:mb-[30px] lg:mb-[30px]"
      />
    </div>
  );
};

export default LeftSection;
