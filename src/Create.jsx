import React from 'react'

function Create() {
  return (
    <div className='flex w-100 vh-100 justify-center align-middle'>
        <div className='w-52 border-b-gray-600 text-yellow-100 p-5'>
            <form>
                <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' className='form-control'/>
                </div>

                <div>
                <label htmlFor="Email">Email:</label>
                <input type="Email" name='Email' className='form-control'/>
                </div><br/>
                <button className='btn btn-info'></button>
            </form>
        </div>
    </div>
  )
}

export default Create