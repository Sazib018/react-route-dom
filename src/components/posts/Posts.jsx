import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-4 gap-6 mb-6">
        {posts.map(post => (
          <div 
            key={post.id} 
            className="border-2 border-orange-700 p-6 rounded-lg"
          >   
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>
              <button className='bg-green-600 py-3 px-6 rounded-md mt-4 font-semibold text-white'>Read more</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
