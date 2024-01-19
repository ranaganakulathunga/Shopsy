import React from 'react'
import {Link} from 'react-router-dom';

function RgForm() {
  
  return (
  <div >
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" >
             <h1 class="text-4xl font-bold dark:text-dark mb-4">Create an account</h1>
             <p class="mb-4 text-black-500 dark:text-black-400">Enter your details below</p>
             <div className="mb-4">
                   <input className="border-b  w-full py-2 px-3 text-gray-700 leading-tight " 
                   id="username"
                   type="text"
                   placeholder="Name"
      
             />
            </div>
              <div className="mb-4">
                 <input className="border-b w-full py-2 px-3 text-gray-700 leading-tight "
                 id="PhoneNumber"
                 type="text"
                 placeholder="Phone Number"
       
                    />
             </div>
              <div className="mb-6">
                <input className="border-b w-full py-2 px-3 text-gray-700 mb-3 leading-tight " 
                id="password"
                type="password"
                placeholder="Password"
     
             />
      
              </div>
          <div className="flex flex-col space-y-4">
               <button type="button" 
               style={{width:'356px' ,height: '50px' }}
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >Create an Account</button>

  
              <button type="button"
              className="flex items-center justify-center bg-white border hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              style={{ width: '356px', height: '50px', background: 'white' }}>
              <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
    <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333 Z" fill="#EA4335"/>
    <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667 Z" fill="#34A853"/>
    <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" fill="#4285F4"/>
  </svg>
              Sign Up With Google
              </button>
           </div>
    </form>

            <p className="text-center text-gray-500 text-medium">
            Already have an account ? <Link to="/login" className="text-black-700 underline">login</Link> 
            </p>
</div>

  );
}

export default RgForm;
