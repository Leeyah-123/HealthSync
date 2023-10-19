import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center text-center p-1">
        <div className="relative">
          <h1 className="font-mono text-[1.5rem] relative z-50">Signup</h1>
          <span
            className="bg-[#CDFB47] rounded-full w-5 h-5 absolute top-0 -left-2"
            aria-hidden
          ></span>
        </div>
        <h2 className="text-[.9rem] text-gray-400 pt-[.4em] tracking-wider">
          Create a HealthSync account
        </h2>
      </div>
      <form
        className="grid lg:grid-cols-2 h-full my-4 mx-auto sm:w-[80%] md:w-[90%] p-2 gap-2"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="text-left" htmlFor="firstName">
            First Name<span className="text-red-500 font-bold">*</span>
          </label>
          <input
            id="firstName"
            className="w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 font-mono tracking-wider"
            type="text"
            placeholder="e.g: John"
            required
          />
        </div>
        <div>
          <label className="text-left" htmlFor="lastName">
            Last Name<span className="text-red-500 font-bold">*</span>
          </label>
          <input
            id="lastName"
            className="w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 font-mono tracking-wider"
            type="text"
            placeholder="e.g: Doe"
            required
          />
        </div>
        <div>
          <label className="text-left" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            className="w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 font-mono tracking-wider"
            type="text"
            placeholder="e.g: John@Doe"
          />
        </div>
        <div>
          <label className="text-left" htmlFor="gender">
            Gender<span className="text-red-500 font-bold">*</span>
          </label>
          <select
            id="gender"
            className="w-full pl-2 pr-5 rounded-md pt-3 pb-2 border border-slate-400 font-mono tracking-wider"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
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
            placeholder="e.g: 123@password"
            required
          />
        </div>
        <div>
          <label className="text-left" htmlFor="height">
            Height(m)
          </label>
          <input
            id="height"
            className="w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 font-mono tracking-wider"
            type="number"
            placeholder="e.g: 2"
          />
        </div>
        <div>
          <label className="text-left" htmlFor="weight">
            Weight(kg)
          </label>
          <input
            id="weight"
            className="w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 font-mono tracking-wider"
            type="number"
            placeholder="e.g: 60"
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-[#CDFB47] py-2 rounded-md md:col-span-2"
        >
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

export default Signup;
