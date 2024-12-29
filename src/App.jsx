import { Outlet } from "react-router-dom";
import Navbar from "./component /Navbar";

const App = () => {
  return (
    <div>
      <main style={{ display: 'flex', flexDirection: 'column', height: '100vh', gap: '1rem'}}>
        <Navbar />
        <Outlet /> {/* Render child routes */}
      
      </main>
    </div>
  );
};

export default App;
