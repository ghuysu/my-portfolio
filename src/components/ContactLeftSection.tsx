import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactOptions = [
  '-Select a type of contact-',
  'Hiring for a position',
  'Doing freelancer work',
  'Communicating/Making friends',
  'Others',
];

const validateInput = (email: string, phone: string, title: number) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(\+?\d{1,3})?(\d{8,15})$/;

  return {
    isValidEmail: emailRegex.test(email),
    isValidPhone: phone ? phoneRegex.test(phone) : true,
    isSelectedTitle: title !== 0,
  };
};

const ContactLeftSection = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    title: 0,
    message: '',
  });
  const [validation, setValidation] = useState({
    isValidEmail: true,
    isValidPhone: true,
    isSelectedTitle: true,
  });
  const [isSending, setSending] = useState(false);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const sendEmail = async () => {
    const { email, phone, title } = formData;
    const { isValidEmail, isValidPhone, isSelectedTitle } = validateInput(
      email,
      phone,
      title,
    );

    setValidation({ isValidEmail, isValidPhone, isSelectedTitle });

    if (!isValidEmail || !isValidPhone || !isSelectedTitle) {
      toast.error('Please fill in all required fields correctly!');
      return;
    }

    setSending(true);
    try {
      const response = await fetch(
        'https://my-portfolio-backend-production-4411.up.railway.app/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            title: contactOptions[formData.title],
            time: Date.now(),
          }),
        },
      );

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          title: 0,
          message: '',
        });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred while sending the message.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-6 p-6 rounded-xl bg-gray-300">
      <p className="text-2xl font-bold text-black">Let's work together</p>
      <p className="text-xs font-light text-zinc-800">
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
            onChange={(e) => handleInputChange('firstname', e.target.value)}
            value={formData.firstname}
          />
          <input
            type="text"
            placeholder="Lastname"
            required
            className="w-full bg-gray-100 text-xs p-3 rounded-md"
            onChange={(e) => handleInputChange('lastname', e.target.value)}
            value={formData.lastname}
          />
          <div className="flex flex-col items-end">
            <input
              type="text"
              placeholder="Email address"
              required
              className="w-full bg-gray-100 text-xs p-3 rounded-md"
              onChange={(e) => handleInputChange('email', e.target.value)}
              value={formData.email}
            />
            {!validation.isValidEmail && (
              <p className="text-xs text-main_red font-extralight pr-1">
                Please enter a valid email
              </p>
            )}
          </div>
          <div className="flex flex-col items-end">
            <input
              type="text"
              placeholder="Phone number (optional)"
              className="w-full bg-gray-100 text-xs p-3 rounded-md"
              onChange={(e) => handleInputChange('phone', e.target.value)}
              value={formData.phone}
            />
            {!validation.isValidPhone && (
              <p className="text-xs text-main_red font-extralight pr-1">
                Please enter a valid phone number
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <select
            value={formData.title}
            className="text-xs p-3 rounded-md w-full"
            onChange={(e) => handleInputChange('title', Number(e.target.value))}
            required
          >
            {contactOptions.map((option, index) => (
              <option key={index} value={index} disabled={index === 0}>
                {option}
              </option>
            ))}
          </select>
          {!validation.isSelectedTitle && (
            <p className="text-xs text-main_red font-extralight pr-1">
              Please select a type of contact
            </p>
          )}
        </div>
        <textarea
          rows={10}
          className="rounded-md text-xs p-3"
          placeholder="Type your message here"
          onChange={(e) => handleInputChange('message', e.target.value)}
          required
          value={formData.message}
        ></textarea>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="w-1/3 py-3 px-4 bg-white text-main_red text-sm font-bold rounded-lg hover:bg-main_red hover:text-white transition-colors duration-150"
          >
            {isSending ? 'Sending...' : 'Send message'}
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
      />
    </div>
  );
};

export default ContactLeftSection;
