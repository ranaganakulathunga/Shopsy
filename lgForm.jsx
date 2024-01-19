import React from 'react'
import {Link} from 'react-router-dom'


function LgForm() {

  
  
  return (
    
    <div className="pt-10 mt-4">
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" >
                  <h1 class="text-4xl font-bold dark:text-dark mb-4">Log in to Exclusive</h1>
                  <p class="mb-4 text-black-500 dark:text-black-400">Enter your details below</p>
    
                <div className="mb-4">
                      <input className="border-b w-full py-2 px-3 text-gray-700 leading-tight "
                      id="username"
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
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >Login
                  </button>
            </div>

      </form>
            <p className="text-center text-gray-500 text-medium">
            don't have an account ? <Link to="/signUp" className="text-black-700 underline">Sign Up</Link> 
            </p>
</div>
  )
}

export default LgForm