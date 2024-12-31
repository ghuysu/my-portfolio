import { useEffect, useRef, useState } from 'react';
import { Project, ProjectsProps } from '../interface';
import ProjectsLeftSection from '../components/ProjectsLeftSection';
import ProjectsRightSection from '../components/ProjectsRightSection';
import ProjectDetail from '../components/ProjectDetail';
import gsap from 'gsap';

const typeOfProjects = ['All', 'Backend', 'Frontend', 'Fullstack'];

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [path, setPath] = useState<string>(typeOfProjects[0]);
  const [numberOfProjects, setNumberOfProjects] = useState<number>(
    projects.length,
  );
  const [showedProject, setShowedProject] = useState<Project | null>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showedProject) return;
    if (showedProject) {
      gsap.fromTo(
        shadowRef.current,
        { opacity: 0 },
        { opacity: 0.9, duration: 0.5, ease: 'power2.out' },
      );
    } else {
      gsap.to(shadowRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [showedProject]);

  return (
    <div className="bg-white flex flex-row text-black h-[calc(100vh-theme(height.20))] mx-6 sm:mx-16 xl:mx-60">
      {showedProject && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <ProjectDetail
            project={showedProject}
            setShowedProject={setShowedProject}
          />
          <div
            ref={shadowRef}
            className="absolute top-0 left-0 z-10 w-full h-full bg-zinc-900 opacity-90"
            onClick={() => setShowedProject(null)}
          ></div>
        </div>
      )}
      <div className="w-1/5 mt-10 sm:mt-32">
        <ProjectsLeftSection
          numberOfProjects={numberOfProjects}
          typeOfProjects={typeOfProjects}
          path={path}
          setPath={setPath}
        />
      </div>
      <div className="w-4/5 ml-10 sm:ml-20 mt-10 sm:mt-32 mb-5 overflow-y-scroll">
        <ProjectsRightSection
          typeOfProjects={typeOfProjects}
          path={path}
          projects={projects}
          setNumberOfProjects={setNumberOfProjects}
          setShowedProject={setShowedProject}
        />
      </div>
    </div>
  );
};

export default Projects;
