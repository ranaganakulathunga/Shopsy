import React from 'react'
import Myimage from '../assets/Slide2.avif';
import RgForm  from '../componets/RgForm';

function signUp() {
    return (
        <div className="flex flex-row gap-3">
                 <div className="relative basis-1/2  hidden sm:block  md:block">
                 <div className="absolute top-[80%] left-[20%] flex flex-col">
                     <h1 className="text-5xl text-white font-extrabold mb-2">Join Us Today!</h1>
                     <p className="text-lg mb-4 text-white">Create an account and unlock a world of possibilities. </p>
                 </div>
                 <img src={Myimage}  alt="Description of the image" style={{
                 objectFit: 'cover', 
                 borderRadius: '0px 10px 10px 0px', 
                 boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.8)', }} />
                 </div>
    
          <div className="basis-1/2  flex items-center justify-center ">
                <RgForm />
          </div>
    </div>
    
      );
}

export default signUp
