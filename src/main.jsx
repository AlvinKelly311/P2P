import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './component /Home.jsx';
import Chat from './component /Chat.jsx';
import Login from './component /Login.jsx';
import process from 'process'; // Import process

window.process = process; // Assign process to window
import crypto from 'crypto-browserify';
window.customCrypto = crypto; // Use a different property name

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "login",
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
