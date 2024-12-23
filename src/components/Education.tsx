import { EducationProps } from '../interface';

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <p className="text-3xl font-bold">Education</p>
      <p className="text-sm text-justify font-medium">
        I am currently a fourth-year engineering student with a strong interest
        in technology. I have a good command of English, particularly in
        communication and reading comprehension. I frequently work with and
        learn about JavaScript, and I am passionate about becoming a skilled
        JavaScript Developer in the near future.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {education.map((certificate, index) => {
          return (
            <div
              className="flex flex-col gap-y-2 items-start bg-zinc-200 bg-opacity-70 py-2 rounded-md"
              key={index}
            >
              <p className="ml-2 text-[10px] font-normal text-zinc-500">
                {certificate.time}
              </p>
              <p className="ml-2 text-base font-semibold">{certificate.name}</p>
              <p className="ml-2 text-xs font-semibold text-zinc-600">
                {certificate.location}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
