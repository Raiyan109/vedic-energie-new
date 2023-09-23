import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

const GetQuote = ({ setModalOpen }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const number = form.number.value;
      const message = form.message.value;
      const userObject = {
        name,
        email,
        number,
        message
      };

      const saveUserResponse = await fetch('https://vedic-energie-server.vercel.app/usermessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObject),
      });

      const saveUserData = await saveUserResponse.json();

      if (saveUserData.acknowledged) {
        setModalOpen(false);
        toast.success('Message send successfully');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occured');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal-box relative">
        <h3 className="text-2xl font-bold text-center">
          <span>Let's Talk!</span>
        </h3>
        {isLoading ? (
          <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin my-8 mx-auto"></div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 mt-6">
            <input
              type="text"
              name="name"
              placeholder="Type Your Name"
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              name="email"
              type="email"
              placeholder="Type Your Email"
              className="w-full px-3 py-2 border rounded-md"
            />
            
            <input
              name="number"
              type="number"
              placeholder="Type Your Number"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <textarea
              name="message"
              placeholder="Type Your Message"
              rows="3" // Set the number of rows here
              className="w-full px-3 py-2 border rounded-md"
            />
            <button
              type="submit"
              className="mx-auto lg:w-[137px] lg:h-[50px] md:w-[105px] md:h-[40px] w-[90px] h-[30px] lg:my-0 my-3 text-lightBlue rounded-md lg:text-[18px] md:text-sm text-xs hover:bg-lightYellow hover:text-navyBlue hover:transition-all"
              style={{ backgroundColor: 'rgb(47, 69, 183)', color: 'rgb(240, 239, 255)' }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default GetQuote;