import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
  const post = useLoaderData();

  return (
    <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-md max-w-md mx-auto mt-10 mb-10">
      <h1 className="text-3xl font-bold mb-4">{post.id}</h1>
      <p>{post.title}</p>
    </div>
  );
};

export default PostDetails;
