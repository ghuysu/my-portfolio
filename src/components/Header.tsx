import { useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { useLocation } from 'react-router-dom';
import { PathContext } from '../stores/path-context';
import { DataContext } from '../stores/data-context';

const Header = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { setPath } = useContext(PathContext);
  const { nickname } = useContext(DataContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPath(location.pathname), [location]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <header className="flex justify-between items-center lg:px-16 md:px-6 px-6 py-4 relative bg-gradient-to-b from-zinc-100 to-zinc-50">
        <div>
          <p
            className="text-3xl font-bold text-main_red cursor-pointer"
            onClick={() => setPath('/')}
          >
            {nickname}
            <span className="text-white">.</span>
          </p>
        </div>
        {isMobile ? <MobileNav /> : <Nav />}
      </header>
    </div>
  );
};

export default Header;
