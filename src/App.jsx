import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";

const App = () => {
  // State to store environment check
  const [isProduction, setIsProduction] = useState(false);

  useEffect(() => {
    // Check if the app is running in production mode
    const isProd = process?.env?.NODE_ENV === 'production';
    setIsProduction(isProd); // Update state with the result
    console.log('Is Production:', isProd);
  }, []);

  // Conditional logging based on the environment
  useEffect(() => {
    if (isProduction) {
      console.log('This is production mode');
      // Put any production-specific code here
    } else {
      console.log('This is development mode');
      // Put any development-specific code here
    }
  }, [isProduction]); // Run this effect whenever isProduction changes

  return (
    <div>
      <main style={{ display: 'flex', flexDirection: 'column', height: '100vh', gap: '1rem' }}>
        <Navbar />
        <Outlet /> {/* Render child routes */}
      </main>
    </div>
  );
};

export default App;
