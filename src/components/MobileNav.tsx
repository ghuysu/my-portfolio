import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { links } from '../links';

interface MobileNavProps {
  path: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ path }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;
    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: '100%' },
        { x: '10%', duration: 0.5, ease: 'power2.out' },
      );
      gsap.fromTo(
        shadowRef.current,
        { opacity: 0 },
        { opacity: 0.9, ease: 'power2.out' },
      );
    } else {
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(shadowRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [menuOpen]);

  return (
    <div className="mt-2">
      {menuOpen && (
        <div
          ref={shadowRef}
          className="absolute top-0 -left-6 z-10 w-svw h-svh bg-zinc-900 opacity-90"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <button
        className="text-black font-semibold"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={faBars} className="text-2xl" />
      </button>
      {menuOpen && (
        <div
          ref={menuRef}
          className={`fixed z-10 h-screen w-4/6 bg-white shadow-lg top-0 right-0 transform`}
        >
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <button
              className="text-main_red right-0 font-semibold mt-4 mb-3"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={`block py-2 px-4 text-main_gray font-semibold hover:bg-zinc-100 ${
                    path === link.path ? 'text-main_red' : ''
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link
              to="/contact"
              className={`block py-2 px-4 text-main_gray font-semibold hover:bg-zinc-100 ${
                path === '/contact' ? 'text-main_red' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Contact me
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
