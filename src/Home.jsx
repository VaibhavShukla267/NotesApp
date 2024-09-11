/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducers';


function Home() {
    const users=useSelector((state)=>state.users);
    const dispatch=useDispatch()

    const handleDelete = (id) => {
        if (users.length === 1) {
            alert("You cannot delete the last user.");
            return;
        }
    
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if(confirmDelete){
        dispatch(deleteUser({id:id}))
        }
    }
   
    
  return (
    <div className='container flex flex-col items-center justify-center mx-auto py-8'>
        <h1 className='text-3xl font-bold mb-6'>CRUD Operations Using ReactJs</h1>

        {/*******************Create***********************/}
        <Link to="/Create" type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create+</Link>
        <table className=' table p-[12em] m-12 border-2 justify-center'>
            <thead>
                <tr className='border-2'>
                    <th className='px-[0.5em] border-2 '>ID</th>
                    <th className='px-[0.5em] border-2 '>Name</th>
                    <th className='px-[0.5em] border-2 '>Email</th>
                    <th className='px-[0.5em] border-2 '>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
        {/* ***************Delete*****************/}
                        <button
                        onClick={()=>handleDelete(user.id)}
                         type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-1.5 text-center me-1 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">DELETE</button>
                        </td>

        {/***********************Edit******************/}

                        <td>
                        <Link to={`/Edit/${user.id}`} 
                        type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-1.5 text-center me-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">EDIT</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home