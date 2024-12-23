import { SkillsProps } from '../interface';

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  console.log(skills);
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <p className="text-3xl font-bold">Skills</p>
      <p className="text-sm text-justify font-medium">
        I'm passionate about becoming a full-stack web developer, and I’ve
        dedicated myself to learning and applying a diverse range of
        technologies in my projects. While I’ve gained experience in various
        tech stacks, I see this as just the beginning of my journey. I’m always
        eager to explore new tools and frameworks to broaden my skill set and
        build innovative solutions.
      </p>
      <div className="grid grid-cols-1 gap-3">
        {skills.map((skill, index) => (
          <div
            className="flex flex-col gap-y-2 items-start bg-zinc-200 bg-opacity-70 py-2 rounded-md"
            key={index}
          >
            <p className="ml-2 text-sm font-semibold text-zinc-600">
              {skill.name}
            </p>
            <div className="grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-flow-col">
              {skill.list.map((techStack, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center text-white bg-black w-14 h-14 rounded-md items-center gap-2 ml-2"
                >
                  <img
                    src={techStack.value}
                    alt={techStack.name}
                    className="w-5 h-5"
                  />
                  <p className="text-[8px] font-medium">{techStack.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
