import { useState } from 'react';

const contactOptions = [
  '-Select a type of contact-',
  'Hiring for a position',
  'Doing freelancer work',
  'Communicating/Making friends',
];

const checkEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const checkPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+?\d{1,3})?(\d{8,15})$/;
  return phoneRegex.test(phone);
};

const ContactLeftSection = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isValidEmail, setValidEmail] = useState<boolean>(true);
  const [isValidPhone, setValidPhone] = useState<boolean>(true);
  const [isSelectedTitle, setSelectedTitle] = useState<boolean>(true);

  const sendEmail = () => {
    if (!checkEmail(email)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }

    if (phone && !checkPhoneNumber(phone)) {
      setValidPhone(false);
    } else {
      setValidPhone(true);
    }

    if (title === '') {
      setSelectedTitle(false);
    } else {
      setSelectedTitle(true);
    }

    if (isValidEmail && isValidPhone && isSelectedTitle) {
      console.log({firstname, lastname, email, phone, title, message})
      return;
    }
  };

  return (
    <div className="flex flex-col gap-y-6 p-6 rounded-xl bg-gray-300">
      <p className="text-2xl font-bold text-black">Let's work together</p>
      <p className="text-xs font-extralight text-zinc-800">
        Thank you for your interest! Please fill out the form below to share
        your information and purpose of contact. Whether you’re hiring, looking
        for collaboration, or simply connecting, I look forward to hearing from
        you.
      </p>
      <form
        className="flex flex-col gap-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          sendEmail();
        }}
      >
        <div className="grid grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Firstname"
            required
            className="w-full bg-gray-100 text-xs p-3 rounded-md"
            onChange={(event) => setFirstname(event.target.value)}
          />
          <input
            type="text"
            placeholder="Lastname"
            required
            className="w-full bg-gray-100 text-xs p-3 rounded-md"
            onChange={(event) => setLastname(event.target.value)}
          />
          <div className="flex flex-col items-end">
            <input
              type="text"
              placeholder="Email address"
              required
              className="w-full bg-gray-100 text-xs p-3 rounded-md"
              onChange={(event) => setEmail(event.target.value)}
            />
            {!isValidEmail && (
              <p className="text-xs text-main_red font-extralight pr-1">
                Please enter a valid email
              </p>
            )}
          </div>
          <div className="flex flex-col items-end">
            <input
              type="text"
              placeholder="Phone number(optional)"
              className="w-full bg-gray-100 text-xs p-3 rounded-md"
              onChange={(event) => setPhone(event.target.value)}
            />
            {!isValidPhone && (
              <p className="text-xs text-main_red font-extralight pr-1">
                Please enter a valid phone number
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <select
            defaultValue={0}
            className="text-xs p-3 rounded-md w-full"
            onChange={(event) => {
              setTitle(contactOptions[Number(event.target.value)]);
            }}
            required
          >
            <option value={0} disabled className="text-zinc-500">
              {contactOptions[0]}
            </option>
            <option value={1}>{contactOptions[1]}</option>
            <option value={2}>{contactOptions[2]}</option>
            <option value={3}>{contactOptions[3]}</option>
          </select>
          {!isSelectedTitle && (
            <p className="text-xs text-main_red font-extralight pr-1">
              Please select a type of contact
            </p>
          )}
        </div>
        <textarea
          rows={10}
          className="rounded-md text-xs p-3"
          placeholder="Type your message here"
          onChange={(event) => setMessage(event.target.value)}
          required
        ></textarea>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="w-1/3 py-3 px-4 bg-white text-main_red text-sm font-bold rounded-lg hover:bg-main_red hover:text-white transition-colors duration-150"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactLeftSection;
