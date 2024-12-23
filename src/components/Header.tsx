import { useEffect, useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  nickname: string;
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ nickname, path, setPath }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
          <p className="text-3xl font-bold text-main_red">
            {nickname}
            <span className="text-white">.</span>
          </p>
        </div>
        {isMobile ? <MobileNav path={path} /> : <Nav path={path} />}
      </header>
    </div>
  );
};

export default Header;
