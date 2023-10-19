import { Outlet } from 'react-router-dom';
import Footer from './components/layout/Footer.jsx';
import Navbar from './components/layout/Navbar.jsx';
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      {/* Footer should go here */}
      <Footer />
    </>
  );
}

export default App;
