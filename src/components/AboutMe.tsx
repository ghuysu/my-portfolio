import { useContext } from 'react';
import { DataContext } from '../stores/data-context';

const AboutMe = () => {
  const { summary } = useContext(DataContext);
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <p className="text-3xl font-bold">About me</p>
      <p className="text-sm text-justify font-medium">
        I am a curious and eager learner, known for my sense of responsibility
        and ability to listen attentively to others. I enjoy playing sports with
        friends, especially badminton and gym, which keep me active and
        energized.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {summary.map((item, index) => {
          return (
            <div className="flex flex-row gap-x-3 items-center" key={index}>
              <p className="text-xs font-medium text-gray-600">{item.name}</p>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;
