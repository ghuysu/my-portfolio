import AboutLeftSection from '../components/AboutLeftSection';
import AboutRightSection from '../components/AboutRightSection';

const About = () => {
  return (
    <div className="bg-white flex flex-row text-black h-[calc(100vh-theme(height.20))] mx-6 sm:mx-16 md:mx-30 xl:mx-60">
      <div className="w-1/4 mt-32">
        <AboutLeftSection />
      </div>
      <div className="w-3/4 ml-5 md:ml-20 mt-32 overflow-y-scroll">
        <AboutRightSection />
      </div>
    </div>
  );
};

export default About;
