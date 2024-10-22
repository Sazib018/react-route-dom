import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => { 
    const { name, email, phone, website, id } = user;

    return (
        <div className='border-2 border-orange-700 p-6 rounded-lg text-start'>
            <h1 className='text-2xl'><strong>Name:</strong> {name}</h1>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Mobile No:</strong> {phone}</p>
            <small className='block'><strong>Website Link:</strong> {website}</small>
            <Link to={`/users/${id}`}>
                <button className='bg-green-600 py-3 px-6 rounded-md mt-4 font-semibold text-white'>
                    See Details
                </button>
            </Link>
        </div>
    );
};

export default User;
