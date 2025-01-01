import { ProjectDetailProps } from '../interface';
import ImageSlider from './ImageSlider';

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
      <div className=" w-[350px] md:w-[500px] lg:w-[700px] flex flex-col gap-y-3 sm:gap-y-6 p-5 rounded-xl bg-gray-800 relative z-20">
        <div className='object-cover mt-5'>
          <ImageSlider imageUrls={project.imageUrls}/>
        </div>
        <div className="">
          {project.usedTechs.map((tech, index) => (
            <div className="inline-block" key={index}>
              <div className="gap-x-2 bg-gray-600 p-1 rounded-lg mr-2 mb-2 flex flex-col items-center">
                <img
                  className="rounded-md w-4 sm:w-5"
                  src={getTechStackIconUrl(tech)}
                />
                <p className="text-[8px] sm:text-[9px] text-gray-300">{tech}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-2xl text-gray-200">{project.name}</p>
          <p className="text-sm text-gray-400">{project.time}</p>
        </div>
        <p className="text-sm text-justify font-normal text-main_gray">
          {project.description}
        </p>
        <div className={`grid grid-cols-${project.link.length} gap-x-4 justify-center`}>
          {project.link.map((link, index) => (
            <a
              href={link.value}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-center text-[10px] sm:text-xs lg:text-sm px-2 sm:px-6 py-2 rounded-full bg-white text-main_red hover:bg-main_red hover:text-white transition duration-200"
              key={index}
            >
                {link.name}
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
