import { AboutLeftSectionProps } from '../interface';

const fields = [
  { name: 'About me', path: 'about' },
  { name: 'Education', path: 'education' },
  { name: 'Skills', path: 'skills' },
];

const AboutLeftSection: React.FC<AboutLeftSectionProps> = ({
  setPath,
  path,
}) => {
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
              onClick={() => setPath(field.path)}
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
