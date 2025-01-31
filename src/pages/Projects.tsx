import { useContext, useEffect, useRef, useState } from 'react';
import { Project } from '../interface';
import ProjectsLeftSection from '../components/ProjectsLeftSection';
import ProjectsRightSection from '../components/ProjectsRightSection';
import ProjectDetail from '../components/ProjectDetail';
import gsap from 'gsap';
import { DataContext } from '../stores/data-context';

const typeOfProjects = [
  { name: 'All', value: '/projects' },
  { name: 'Fullstack', value: '/projects/fullstack' },
  { name: 'Frontend', value: '/projects/frontend' },
  { name: 'Backend', value: '/projects/backend' },
];

const Projects = () => {
  const { projects } = useContext(DataContext);
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
        <div className="absolute top-0 left-0 w-svw h-svh flex items-center justify-center">
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
        />
      </div>
      <div className="w-4/5 ml-10 sm:ml-20 mt-10 sm:mt-32 mb-5 overflow-y-scroll">
        <ProjectsRightSection
          typeOfProjects={typeOfProjects}
          projects={projects}
          setNumberOfProjects={setNumberOfProjects}
          setShowedProject={setShowedProject}
        />
      </div>
    </div>
  );
};

export default Projects;
