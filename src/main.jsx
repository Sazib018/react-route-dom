import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Errorpage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';
import Users from './components/users/Users';
import UserDetails from './components/users/UserDetails';
import App from './App';
import Posts from './components/posts/Posts';
import PostDetails from './components/posts/PostDetails';

/* const route = createBrowserRouter([
   {
   path: "/",
    element: <div>This is home</div>
  },
  {
   path: "/about",
    element: <div>this is about</div>
  },
])  */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <div>This is about</div>,
      },
      {
        path: "/contact",
        element: <div>This is Contact</div>,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "users/:userId",
        element: <UserDetails />,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      /*   posts api & loader */
      {
        path: "/posts",
        element: <Posts />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "posts/:postId",
        element: <PostDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
