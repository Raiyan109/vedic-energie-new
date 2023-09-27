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
        toast.success('Message sent successfully');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal-box relative">
        <h3 className="text-3xl font-bold text-center">
          <span className='text-white'>Let's Talk!</span>
        </h3>
        {isLoading ? (
          <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin my-8 mx-auto"></div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 mt-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md bg-orange placeholder-white border-white focus:border-white focus:ring focus:ring-white"
            /> 
              <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md bg-orange placeholder-white border-white focus:border-white focus:ring focus:ring-white" 
            />
            <input
              name="number"
              type="number"
              placeholder="Contact Number"
              className="w-full px-3 py-2 border rounded-md bg-orange placeholder-white border-white focus:border-white focus:ring focus:ring-white" 
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              className="w-full px-3 py-2 border rounded-md bg-orange placeholder-white border-white focus:border-white focus:ring focus:ring-white" 
            />
            <button
              type="submit"
              className="mx-auto w-[137px] h-[50px] bg-lightYellow rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-yellow hover:transition-all"
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