import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bg from '../assets/bgsolar.png'


const GetQuote = () => {
  return (
    <div>
      <Header></Header> {/* Place Header component outside of Section */}
     <section  className={`bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${bg})` }}>
      <div className='bg-black/60'>
        <div className='lg:w-1/3 md:w-2/3 w-4/5 mx-auto pt-32 pb-10'>
      <form action="https://formsubmit.co/vedicenergie@gmail.com" method="POST" className="grid grid-cols-1 gap-3 border-2 rounded-lg border-orange px-4">
      <h1 className='text-3xl font-bold text-center text-white mt-4'>Let's Talk</h1>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md bg-orange text-white placeholder-white border-white focus:border-white focus:ring focus:ring-white"
            /> 
              <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md bg-orange text-white placeholder-white border-white focus:border-white focus:ring focus:ring-white" 
            />
            <input
              name="number"
              type="number"
              placeholder="Contact Number"
              className="w-full px-3 py-2 border rounded-md bg-orange text-white placeholder-white border-white focus:border-white focus:ring focus:ring-white" 
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              className="w-full px-3 py-2 border rounded-md bg-orange text-white placeholder-white border-white focus:border-white focus:ring focus:ring-white" 
            />
            <button
              type="submit"
              className="mx-auto mb-4 w-[137px] h-[50px] bg-lightYellow rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-yellow hover:transition-all"
            >
              Submit
            </button>
            
          </form>
          </div>
     </div>
     </section>
      <Footer></Footer> {/* Place Footer component outside of Section */}
    </div>
  );
};

export default GetQuote;