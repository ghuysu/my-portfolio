import { ProjectsLeftSectionProps } from '../interface';

const ProjectsLeftSection: React.FC<ProjectsLeftSectionProps> = ({
  numberOfProjects,
  typeOfProjects,
  path,
  setPath,
}) => {
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
              className={`${path === type ? 'bg-main_red text-white' : 'bg-zinc-200 text-black hover:bg-zinc-400 transition duration-100'} text-sm font-medium rounded-md w-full h-9`}
              onClick={() => setPath(type)}
            >
              {type}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsLeftSection;
