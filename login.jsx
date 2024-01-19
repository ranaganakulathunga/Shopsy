import React from 'react';
import Myimage from '../assets/Slide2.avif';
import LgForm  from '../componets/lgForm'

function Login() {
  return (
    <div className="flex flex-row">
            <div className="relative w-1/2 h-full hidden sm:block  md:block items-center justify-center">
                  <div className="absolute top-[80%] left-[20%] flex flex-col">
                      <h1 className="text-5xl text-white font-extrabold mb-2">Welcome Back!</h1>
                      <p className="text-lg mb-4 text-white">Log in to your account to explore exciting features.</p>
                 </div>
                      <img src={Myimage} 
                       alt="Description of the image"
                        style={{objectFit: 'cover',  borderRadius: '0px 10px 10px 0px', 
                        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.8)', }} />
           </div>

          <div className="w-1/2 h-full flex items-center justify-center">
               <LgForm />
         </div>
    </div>


  );
}

export default Login;
