import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
    const users = useLoaderData();

    return (
        <div className='p-6'>
            <div className='text-2xl font-semibold mt-5'>Users</div>
            <div className='grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 my-20'>
                {users.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default Users;
