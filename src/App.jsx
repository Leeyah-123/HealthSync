import { Outlet } from 'react-router-dom';
import Footer from './components/layout/Footer.jsx';
import Main from './components/core/home/Main';
import LandingNav from './components/layout/landingNav';

function App() {
  return (
    <>
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
