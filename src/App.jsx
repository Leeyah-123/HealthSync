import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* Footer should go here */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
