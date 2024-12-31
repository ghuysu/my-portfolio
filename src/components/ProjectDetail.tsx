import { ProjectDetailProps } from '../interface';

const getTechStackIconUrl = (name: string): string => {
  switch (name) {
    case 'HTML':
      return '/assets/images/html-icon.png';
    case 'CSS':
      return '/assets/images/css-icon.png';
    case 'React':
      return '/assets/images/react-icon.png';
    case 'TailwindCSS':
      return '/assets/images/tailwind-icon.png';
    case 'Bootstrap':
      return '/assets/images/bootstrap-icon.svg';
    case 'Javascript':
      return '/assets/images/js-icon.png';
    case 'Typescript':
      return '/assets/images/ts-icon.png';
    case 'Java':
      return '/assets/images/java-icon.png';
    case 'Python':
      return '/assets/images/python-icon.png';
    case 'C++':
      return '/assets/images/cpp-icon.png';
    case 'Node.js':
      return '/assets/images/nodejs-icon.png';
    case 'Express.js':
      return '/assets/images/expressjs-icon.png';
    case 'NestJS':
      return '/assets/images/nestjs-icon.png';
    case 'Flask':
      return '/assets/images/flask-icon.png';
    case 'Docker':
      return '/assets/images/docker-icon.png';
    case 'Postman':
      return '/assets/images/postman-icon.png';
    case 'MongoDB':
      return '/assets/images/mongodb-icon.png';
    case 'MySQL':
      return '/assets/images/mysql-icon.png';
    case 'PostgreSQL':
      return '/assets/images/postgresql-icon.png';
    case 'Redis':
      return '/assets/images/redis-icon.png';
    case 'AWS S3':
      return '/assets/images/awss3-icon.png';
    case 'Git':
      return '/assets/images/git-icon.png';
    case 'Github':
      return '/assets/images/github-icon.png';
    case 'Gitlab':
      return '/assets/images/gitlab-icon.png';
    case 'CI/CD':
      return '/assets/images/cicd-icon.png';
    case 'Microservices':
      return '/assets/images/microservices-icon.png';
    default:
      return '/assets/images/default-icon.png';
  }
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  setShowedProject,
}) => {
  return (
    <div>
      <div className="w-[700px] flex flex-col gap-y-6 p-8 rounded-xl bg-gray-800 relative">
        <img src={project.imageUrls[0]} className="object-cover mt-5" />
        <div className="">
          {project.usedTechs.map((tech, index) => (
            <div className="inline-block" key={index}>
              <div className="gap-x-1 bg-gray-600 p-1 rounded-lg mr-1 mb-1 flex flex-col items-center">
                <img
                  className="rounded-md w-4"
                  src={getTechStackIconUrl(tech)}
                />
                <p className="text-[8px] text-gray-300">{tech}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-xl text-gray-200">{project.name}</p>
          <p className="text-[11px] text-gray-400">{project.time}</p>
        </div>
        <p className="text-xs text-justify font-light text-main_gray">
          {project.description}
        </p>
        <div>
          {project.link.map((link, index) => (
            <a
              href={link.value}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
              key={index}
            >
              <button className="font-semibold text-base px-6 py-2 rounded-full bg-main_red text-white hover:bg-white hover:text-main_red transition">
                {link.name}
              </button>
            </a>
          ))}
        </div>
        <div
          onClick={() => setShowedProject(null)}
          className="absolute top-2 right-3 bg-black rounded-md px-2 cursor-pointer hover:text-main_red text-white font-semibold text-2xl"
        >
          x
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
