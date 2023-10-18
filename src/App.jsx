import { Outlet } from 'react-router-dom';
import Main from './components/compound/Main.jsx';
import Footer from './components/layout/Footer.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Contactmain from './components/compound/contactmain.jsx';
function App() {
  return (
    <>
      <Contactmain />
      {/* <Navbar />
      <Main />
      <main>
        <Outlet />
      </main> */}

      {/* Footer should go here */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
