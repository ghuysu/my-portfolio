import { Link } from 'react-router-dom';

interface NavProps {
  path: string;
}

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Education', path: '/education' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
];

const Nav: React.FC<NavProps> = ({ path }) => {
  return (
    <nav className="flex lg:space-x-8 md:space-x-4 mt-1">
      {links.map((link, index) => (
        <Link
          to={link.path}
          key={index}
          className={`text-main_gray font-semibold py-2 border-t-0 border-l-0 border-r-0 border-b-4 hover:text-main_red ${
            path === link.path && 'border-main_red border-solid'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
