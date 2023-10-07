const Signin = () => {
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
      <form className="w-full h-full my-4 mx-auto">
        <div className="flex flex-col md:flex-row lg:flex-row">
          <div className="flex flex-col p-2">
            <label className="text-left" htmlFor="fullName">
              Email:
            </label>
            <input
              id="email"
              className="w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 font-mono tracking-wider"
              type="email"
              placeholder="e.g: johndoe@gmail.com"
            ></input>
          </div>
          <div className="flex flex-col p-2">
            <label className="text-left" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              className="w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 font-mono tracking-wider"
              type="password"
              placeholder="Password"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
