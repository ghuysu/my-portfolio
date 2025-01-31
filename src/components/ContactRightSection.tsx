import { useContext } from 'react';
import { DataContext } from '../stores/data-context';

const ContactRightSection = () => {
  const { contact } = useContext(DataContext);
  return (
    <div className="flex flex-col gap-y-7">
      <div className="flex flex-row gap-x-3">
        <div className="bg-black h-10 w-10 rounded-lg flex items-center justify-center">
          <img className="w-6 h-6" src="/assets/images/phone-icon.png" />
        </div>
        <div className="flex flex-col">
          <p className="text-[10px] text-gray-600 font-medium">Phone</p>
          <p className="text-sm text-zinc-700 font-semibold">{contact.phone}</p>
        </div>
      </div>
      <div className="flex flex-row gap-x-3">
        <div className="bg-black h-10 w-10 rounded-lg flex items-center justify-center">
          <img className="w-6 h-6" src="/assets/images/email-icon.png" />
        </div>
        <div className="flex flex-col">
          <p className="text-[10px] text-gray-600 font-medium">Email</p>
          <p className="text-sm text-zinc-700 font-semibold">{contact.email}</p>
        </div>
      </div>
      <div className="flex flex-row gap-x-3">
        <div className="bg-black h-10 w-10 rounded-lg flex items-center justify-center">
          <img className="w-6 h-6" src="/assets/images/address-icon.png" />
        </div>
        <div className="flex flex-col">
          <p className="text-[10px] text-gray-600 font-medium">Address</p>
          <p className="text-sm text-zinc-700 font-semibold">
            {contact.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactRightSection;
