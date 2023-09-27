import React from 'react';

const SendMail = () => {
    return (
        <section className="min-h-screen bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1545209463-e2825498edbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60")'}}>
            <div className="bg-black/60">
                <div className="flex flex-col justify-center items-center flex-1 py-12 ">
                    <div className="w-full px-8 py-10 overflow-hidden bg-orange shadow-2xl rounded-xl lg:max-w-xl ">
                        <p className="mt-2 text-xl text-white">
                            Ask us everything and we would love to hear from you
                        </p>
                        <form className="mt-6" action="https://formsubmit.co/vedicenergie@gmail.com" method="POST">
                            <div className="flex-1 mt-6">
                                <label className="block mb-2 text-lg text-white">Email address</label>
                                <input name='email' type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 placeholder-white rounded-md bg-orange text-white border-white focus:border-white focus:ring focus:ring-white" />
                            </div>
                            <div className="w-full mt-6">
                                <label className="block mb-2 text-white">Message</label>
                                <textarea name='message' className="block w-full h-32 px-5 py-3 mt-2 placeholder-white rounded-md md:h-48 rounded-md bg-orange text-white border-white focus:border-white focus:ring focus:ring-white" placeholder="Message" defaultValue={""} />
                            </div>
                            <div className='text-center'>
                            <button type='submit' className=" w-[137px] h-[50px] bg-lightYellow rounded-md lg:text-[18px] md:text-sm sm:text-[18px] hover:bg-yellow hover:transition-all my-4">
                                Get in touch
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SendMail;