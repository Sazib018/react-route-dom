import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();

    return (
        <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-md max-w-md mx-auto mt-10 mb-10">
            <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company?.name}</p>
            <p><strong>Address:</strong> {`${user.address?.street}, ${user.address?.city}`}</p>
        </div>
    );
};

export default UserDetails;
