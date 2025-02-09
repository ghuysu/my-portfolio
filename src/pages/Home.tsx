import { memo } from 'react';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';

const Home = memo(() => {
  return (
    <div className="bg-white text-black h-[calc(100vh-theme(height.20))] w-svw">
      <div className="lg:mx-16 xl:mx-16 md:mx-16 sm:mx-16 mx-6 flex flex-col h-full pt-5 justify-start lg:mt-0 lg:justify-center items-center">
        <div className="lg:flex-row flex-col space-y-52">
          <div className="max-w-screen-lg mx-auto flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col items-center xl:space-x-20 lg:space-x-20">
            {/* Left Section */}
            <div className="w-[320px] h-full md:h-[300px] sm:h-[300px]">
              <LeftSection />
            </div>

            {/* Right Section */}
            <div>
              <RightSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
