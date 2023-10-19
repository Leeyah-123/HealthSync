import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col place-items-center text-center">
      <h1 className="mt-auto text-5xl font-bold mb-3">Oops!</h1>
      <h2 className="text-lg">
        The page you&apos;re looking for is nowhere to be found
      </h2>

      <Link
        to="/"
        className="mb-auto uppercase bg-lemon text-white py-2 px-2.5 mt-3 rounded-md"
      >
        Go back to home page
      </Link>
    </div>
  );
};

export default NotFound;
