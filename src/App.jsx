import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
