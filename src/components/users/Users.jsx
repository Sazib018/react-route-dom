import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
    const users = useLoaderData();

    return (
        <>
            <div className='text-2xl font-semibold mt-5'>Users</div>
            <div className='grid grid-cols-2 gap-6 my-20'>
                {users.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        </>
    );
};

export default Users;
