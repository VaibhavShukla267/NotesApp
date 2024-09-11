/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { addUser } from './UserReducers';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';





function Create() {
  const [name,setName]=useState('');
  const[email,setEmail]=useState('');
// Used This navigate to send the info back to our home page 
  const navigate=useNavigate()

  const users=useSelector((state)=>state.users);

  const dispatch=useDispatch();

  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(addUser({id:users[users.length-1].id+1,name,email}))
    navigate('/')
    // The above is the path to home as we have defined in app.jsx


  }


  return (
    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center w-full min-h-screen bg-gray-100">
      <div className="w-96 bg-gray-800 border-b border-gray-600 text-yellow-100 p-5 rounded-lg shadow-lg">
        <h2 className='flex text-bold text-2xl py-5 item-center justify-center'>Add New User</h2>



        <form
        onSubmit={handleSubmit}
         className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-300">
              {/* Name Field */}
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-input mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring focus:ring-yellow-200"
              onChange={e=>setName(e.target.value)}
            />
          </div>

        {/* Email Field */}
          <div className="flex flex-col">

            <label htmlFor="Email" className="mb-2 text-sm font-medium text-gray-300">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring focus:ring-yellow-200"
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
          {/* Submit Field */}

          <button className="w-full py-2 mt-4 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
