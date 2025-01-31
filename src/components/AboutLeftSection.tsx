import { useContext } from 'react';
import { PathContext } from '../stores/path-context';
import { useNavigate } from 'react-router-dom';

const fields = [
  { name: 'About me', path: '/about' },
  { name: 'Education', path: '/about/education' },
  { name: 'Skills', path: '/about/skills' },
];

const AboutLeftSection = () => {
  const { path, setPath } = useContext(PathContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-8">
      <p className="text-black text-4xl font-bold">Why hire me?</p>
      <p className="text-xs text-justify text-gray-500 font-medium">
        Here is some key information to help you decide if I’m the right fit for
        your team.
      </p>
      <div className="flex flex-col gap-y-4">
        {fields.map((field, index) => {
          return (
            <button
              key={index}
              className={`${path === field.path ? 'bg-main_red text-white' : 'bg-zinc-200 text-black hover:bg-zinc-400 transition duration-100'} text-sm font-medium rounded-md w-full h-9`}
              onClick={() => {
                setPath(field.path);
                navigate(field.path);
              }}
            >
              {field.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AboutLeftSection;
