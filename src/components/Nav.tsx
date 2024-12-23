import { Link } from 'react-router-dom';
import { links } from '../links';

interface NavProps {
  path: string;
}

const Nav: React.FC<NavProps> = ({ path }) => {
  return (
    <nav className="flex lg:space-x-8 md:space-x-4 mt-1">
      {links.map((link, index) => (
        <Link
          to={link.path}
          key={index}
          className={`text-black font-medium py-2 border-t-0 border-l-0 border-r-0 border-b-4 hover:text-main_red ${
            path === link.path && 'border-main_red border-solid'
          }`}
        >
          {link.name}
        </Link>
      ))}
      <Link
        to="/contact"
        className={`flex items-center font-semibold text-base px-4 py-1 rounded-full hover:bg-main_red hover:text-black transition-colors duration-300 ${path === '/contact' ? 'bg-main_red text-black' : 'text-white bg-main_red'}`}
      >
        Contact me
      </Link>
    </nav>
  );
};

export default Nav;
