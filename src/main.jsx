import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './component /Home.jsx';
import Chat from './component /Chat.jsx';
import Login from './component /Login.jsx';
import process from 'process';
window.process = process;


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "Chat",
        element: <Chat />,
      },
      {
        path: "Login",
        element: <Login />,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
