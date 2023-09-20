import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const GetQuote = () => {
  const {createUser,updateUser}=useContext(AuthContext);
  const navigate=useNavigate();
const handleSubmit=event=>{
     event.preventDefault();
     const form=event.target;
     const name=form.name.value;
     const email=form.email.value;
     const password=form.password.value;
     const image=form.image.files[0];
     const number=form.number.value;
     console.log(name,email,password,image,number);
     const formData=new FormData();
     formData.append('image',image);
     const imgbbApiKey = '99128c73e69356c6d49c12da0a678056';
     const url=`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;
     fetch(url,{
      method: 'POST',
        body: formData,
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data.data.display_url);
      createUser(email,password)
      .then(result=>{
        const user=result.user;
        console.log(user);
        const userInfo={
         didplayName: name,
          photoURL:data.data.display_url,
          phoneNumber:number
        };
        updateUser(userInfo)
        .then(()=>{
          saveUser(name,email,data.data.display_url,number)
        })
      })
      .catch(error=>console.log(error))
     })
     .catch(error=>console.log(error))
     const saveUser = (name, email, photo,number) => {
      const user = { name, email, photo,number };
      fetch(`https://vedic-energie-server.vercel.app/users`, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.acknowledged){
            toast.success('User Created Successfully');
            form.reset();
            navigate('/');
          }
          
        })
}
}
    return (
       
        <div className="modal">
          <div className="modal-box relative">
            <h3 className="text-xl font-bold text-center">
              <span>Please Register </span>    
                </h3>
                  <form 
                  onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-3 mt-6"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder='Type Your Name'
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
                    />
                    <button
                     type="submit"
                     className="mx-auto lg:w-[137px] lg:h-[50px] md:w-[105px] md:h-[40px] w-[90px] h-[30px] lg:my-0 my-3 text-lightBlue rounded-md lg:text-[18px] md:text-sm text-xs hover:bg-lightYellow hover:text-navyBlue hover:transition-all"
                     style={{ backgroundColor: 'rgb(47, 69, 183)',color:'rgb(240, 239, 255)' }}
                     >
                      Submit
                   </button>
                  </form>
            
          </div>
        </div>
       
     
         
    );
};

export default GetQuote;