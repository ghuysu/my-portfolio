import ContactLeftSection from '../components/ContactLeftSection';
import ContactRightSection from '../components/ContactRightSection';
import { ContactProps } from '../interface';

const Contact: React.FC<ContactProps> = ({ email, address, phone }) => {
  return (
    <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 bg-white h-[calc(100vh-theme(height.20))] mx-6 sm:mx-16 md:mx-30 xl:mx-60">
      <div className="mt-10 lg:mt-0 w-full lg:w-2/3 flex items-center">
        <ContactLeftSection />
      </div>
      <div className="w-full lg:w-1/3 flex items-center">
        <ContactRightSection email={email} address={address} phone={phone} />
      </div>
    </div>
  );
};

export default Contact;
