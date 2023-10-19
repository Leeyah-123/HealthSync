import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center text-center p-1">
        <div className="relative">
          <h1 className="font-mono text-[1.5rem] relative z-50">Signin</h1>
          <span
            className="bg-[#CDFB47] rounded-full w-5 h-5 absolute top-0 -left-2"
            aria-hidden
          ></span>
        </div>
        <h2 className="text-[.9rem] text-gray-400 pt-[.4em] tracking-wider">
          Welcome back! Please enter your details
        </h2>
      </div>
      <form
        className="grid h-full my-4 mx-auto sm:w-[80%] md:w-[90%] p-2 gap-2"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="text-left" htmlFor="email">
            Email<span className="text-red-500 font-bold">*</span>
          </label>
          <input
            id="email"
            className="w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 font-mono tracking-wider"
            type="email"
            placeholder="e.g: johndoe@gmail.com"
            required
          />
        </div>
        <div>
          <label className="text-left" htmlFor="password">
            Password<span className="text-red-500 font-bold">*</span>
          </label>
          <input
            id="password"
            className="w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 font-mono tracking-wider"
            type="password"
            placeholder="e.g: 123@Password"
            required
          />
        </div>

        <button type="submit" className="mt-2 bg-[#CDFB47] py-2 rounded-md">
          Submit
        </button>

        <p className="text-xs mt-2">
          <span className="text-red-500 font-bold">*</span> indicates required
          fields
        </p>
      </form>
    </div>
  );
};

export default Signin;
