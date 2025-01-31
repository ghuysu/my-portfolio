import { useContext } from 'react';
import { ProjectsLeftSectionProps } from '../interface';
import { PathContext } from '../stores/path-context';
import { useNavigate } from 'react-router-dom';

const ProjectsLeftSection: React.FC<ProjectsLeftSectionProps> = ({
  numberOfProjects,
  typeOfProjects,
}) => {
  const { path, setPath } = useContext(PathContext);
  const nagivate = useNavigate();
  return (
    <div className="flex flex-col gap-y-8">
      <p className="text-black text-xl sm:text-4xl font-bold">
        Let's see my projects!
      </p>
      <p className="text-xs text-justify text-gray-500 font-medium">
        Total {numberOfProjects} projects
      </p>
      <div className="flex flex-col gap-y-4">
        {typeOfProjects.map((type, index) => {
          return (
            <button
              key={index}
              className={`${path === type.value ? 'bg-main_red text-white' : 'bg-zinc-200 text-black hover:bg-zinc-400 transition duration-100'} text-sm font-medium rounded-md w-full h-9`}
              onClick={() => {
                setPath(type.value);
                nagivate(type.value);
              }}
            >
              {type.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsLeftSection;
