import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer.jsx';
// import Navbar from './components/layout/Navbar.jsx';
import LandingNav from './components/layout/landingNav';
import Main from './components/core/home/Main';

function App() {
  return (
    <>
      <Navbar />
      <LandingNav />
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
