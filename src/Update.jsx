/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducers';




function Update() {
  const {id}=useParams();
  const users=useSelector((state)=>state.users);
  const existingUser=users.filter(f=>f.id == id);
  const {name,email}=existingUser[0];

  const [Name,setName]=useState(name);
  const[Email,setEmail]=useState(email);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleUpdate=(event)=>{
    event.preventDefault();
    dispatch(updateUser({
      id:id,
      name:Name,
      email:Email
    }))
    navigate('/')
  }
  

  return (
    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center w-full min-h-screen bg-gray-100">
    <div className="w-96 bg-gray-800 border-b border-gray-600 text-yellow-100 p-5 rounded-lg shadow-lg">
      <h2 className='flex text-bold text-2xl py-5 item-center justify-center'>Update User</h2>



      <form
      onSubmit={handleUpdate}
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
            value={Name}
            onChange={e=> setName(e.target.value)}
            className="form-input mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring focus:ring-yellow-200"
           
          />
        </div>

      {/* Email Field */}
        <div className="flex flex-col">

          <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-300">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={Email}
            onChange={e=>setEmail(e.target.value)}
            className="form-input mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring focus:ring-yellow-200"
        
          />
        </div>
        {/* UpdateField */}

        <button className="w-full py-2 mt-4 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 transition">
          Update
        </button>
      </form>
    </div>
  </div>
  )
}

export default Update