import { Spinner, useToast } from '@chakra-ui/react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { authRequests } from '../../utils/apiRequests/auth.requests';

const Signup = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    gender: 'male',
    email: '',
    password: '',
    height: 0,
    weight: 0,
  };

  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  // Hide or show Password
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const validateForm = () => {
    // ensure all required fields are present as not all browsers prevent submission of form when required fields are empty
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.gender ||
      !form.password
    )
      return 'Please fill in all required fields';

    // Ensure password is a strong password
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[-!_@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

    if (!passwordRegex.test(form.password))
      return 'Password must be at least 8 to 20 characters long and must contain at least a symbol, upper and lower case letters and a number';

    if (!form.username) delete form.username;
    if (!form.height) delete form.height;
    if (!form.weight) delete form.weight;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form input and display error if any form input id invalid
    const formError = validateForm();
    if (formError) return toast({ status: 'error', title: formError });

    // Send signup request
    setLoading(true);
    const response = await authRequests().signup(form);
    setLoading(false);

    // display error message, if any
    if (!response.success)
      return toast({
        status: 'error',
        title: response.message,
      });

    // Set user in state
    authContext.login(response.data.user);

    // Display success message then redirect user to dashboard
    toast({
      status: 'success',
      title: response.message,
      onCloseComplete: navigate('/dashboard'),
    });
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center text-center p-1">
        <div className="relative">
          <h1 className="font-mono text-[1.5rem] relative z-50">Signup</h1>
          <span
            className="bg-[#CDFB47] rounded-full w-5 h-5 absolute top-0 -left-2"
            aria-hidden
          />
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
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
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
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
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
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
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
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
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
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
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
          <div className="relative">
            <input
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              id="password"
              className="w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 font-mono tracking-wider"
              type={showPassword ? 'text' : 'password'}
              placeholder="e.g: JohnDoe@123"
              required
            />
            <button
              onClick={toggleShowPassword}
              type="button"
              title={`${showPassword ? 'Hide' : 'Show'} Password`}
              className="absolute top-1/2 -translate-y-1/2 right-2"
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
        </div>
        <div>
          <label className="text-left" htmlFor="height">
            Height(m)
          </label>
          <input
            value={form.height}
            onChange={(e) => setForm({ ...form, height: e.target.value })}
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
            value={form.weight}
            onChange={(e) => setForm({ ...form, weight: e.target.value })}
            id="weight"
            className="w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 font-mono tracking-wider"
            type="number"
            placeholder="e.g: 60"
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="mt-2 bg-[#CDFB47] py-2 rounded-md md:col-span-2 disabled:opacity-50"
        >
          {loading ? <Spinner marginTop={1} /> : 'Submit'}
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
