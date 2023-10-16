import { Outlet } from 'react-router-dom';
import Main from './components/compound/Main.jsx';
import Footer from './components/layout/Footer.jsx';
import Navbar from './components/layout/Navbar.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <main>
        <Outlet />
      </main>

      {/* Footer should go here */}
      <Footer />
    </>
  );
}

export default App;
