import { memo, useContext } from 'react';
import { DataContext } from '../stores/data-context';

const Services = memo(() => {
  const { services } = useContext(DataContext);
  return (
    <div className="bg-white text-black h-[calc(100vh-theme(height.20))] mx-6 sm:mx-16 md:mx-30 xl:mx-60 grid grid-cols-1 place-content-start md:place-content-center">
      <div className="grid grid-cols-1 mt-5 md:mt-0 md:grid-cols-2 gap-12 md:gap-24 lg:gap-32">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-3 border-t-0 pb-4 border-l-0 border-r-0 border-b-[1px] border-solid border-black relative group"
          >
            <p className="text-base font-extrabold group-hover:text-main_red">{`0${index + 1}.`}</p>
            <p className="text-xl font-bold group-hover:text-main_red">
              {service.name}
            </p>
            <p className="text-justify text-xs">{service.description}</p>
            <div className="absolute right-0 flex items-center justify-center text-white text-xl rounded-xl p-1 w-8 h-8 bg-black">
              {index + 1 === 1 && (
                <i className="a-duotone fa-solid fa-server"></i>
              )}
              {index + 1 === 2 && (
                <i className="a-duotone fa-solid fa-newspaper"></i>
              )}
              {index + 1 === 3 && (
                <i className="a-duotone fa-solid fa-globe"></i>
              )}
              {index + 1 === 4 && (
                <i className="a-duotone fa-solid fa-house"></i>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Services;
