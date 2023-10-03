import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bg from '../assets/bgsolar.png'
import toast from 'react-hot-toast';

const GetQuote = () => {
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
    <div>
      <Header></Header> {/* Place Header component outside of Section */}
     <section  className={`bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${bg})` }}>
      <div className='bg-black/60'>
        <div className='lg:w-1/3 md:w-2/3 w-4/5 mx-auto pt-32 pb-10'>
        {isLoading ? (
          <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin my-8 mx-auto"></div>
        ) : (
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 border-2 rounded-lg border-orange px-4">
      
      <h1 className='text-3xl font-bold text-center text-white mt-4'>Let's Talk</h1>
     
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md bg-orange text-white placeholder-white border-orange focus:border-orange focus:ring focus:ring-orange"
            /> 
              <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md bg-orange text-white placeholder-white border-orange focus:border-orange focus:ring focus:ring-orange" 
            />
            <input
              name="number"
              type="number"
              placeholder="Contact Number"
              className="w-full px-3 py-2 border rounded-md bg-orange text-white placeholder-white border-orange focus:border-orange focus:ring focus:ring-orange" 
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              className="w-full px-3 py-2 border rounded-md bg-orange text-white placeholder-white border-orange focus:border-orange focus:ring focus:ring-orange" 
            />
            
            <button
              type="submit"
              className="mx-auto mb-4 w-[137px] h-[50px] bg-lightYellow rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-yellow hover:transition-all"
            >
              Submit
            </button>
           
          </form>
          )}
          </div>
     </div>
     </section>
      <Footer></Footer> {/* Place Footer component outside of Section */}
    </div>
  );
};

export default GetQuote;