import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const GetQuote = ({ setModalOpen }) => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const number = form.number.value;

    const formData = new FormData();
    formData.append('image', image);

    const imgbbApiKey = '99128c73e69356c6d49c12da0a678056';
    const url = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;

    try {
      const imageResponse = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      const imageData = await imageResponse.json();
      const photoURL = imageData.data.display_url;

      const result = await createUser(email, password);
      const user = result.user;

      const userInfo = {
        displayName: name,
        photoURL,
        phoneNumber: number,
      };

      await updateUser(userInfo);

      const userObject = {
        name,
        email,
        photo: photoURL,
        number,
      };

      const saveUserResponse = await fetch('https://vedic-energie-server.vercel.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObject),
      });

      const saveUserData = await saveUserResponse.json();

      if (saveUserData.acknowledged) {
        setModalOpen(false);
        toast.success('User Created Successfully');
      }
    } catch (error) {
      setSignUpError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal-box relative">
        <h3 className="text-2xl font-bold text-center">
          <span>Please Register</span>
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
              name="password"
              type="password"
              placeholder="Type Your Password"
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              placeholder="Upload your Product image"
              type="file"
              name="image"
              accept="image/*"
              className="w-full px-3 py-2 border rounded-md"
              style={{ color: '#98A2B3' }}
              required
            />
            <input
              name="number"
              type="number"
              placeholder="Type Your Number"
              className="w-full px-3 py-2 border rounded-md"
              required
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
        {signUpError && (
          <p className="font-medium my-2" style={{ color: '#FF0000' }}>
            {signUpError}
          </p>
        )}
      </div>
    </div>
  );
};

export default GetQuote;