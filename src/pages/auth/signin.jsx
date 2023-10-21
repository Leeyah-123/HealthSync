import { Spinner, useToast } from '@chakra-ui/react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { authRequests } from '../../utils/apiRequests/auth.requests';

const Signin = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  const initialState = {
    email: '',
    password: '',
  };

  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  // Hide or show Password
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const validateForm = () => {
    // ensure all required fields are present as not all browsers prevent submission of form when required fields are empty
    if (!form.email || !form.password)
      return 'Please fill in all required fields';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form input and display error if any form input id invalid
    const formError = validateForm();
    if (formError) return toast({ status: 'error', title: formError });

    // Send signup request
    setLoading(true);
    const response = await authRequests().login(form);
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
    });

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
          />
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
              placeholder="e.g: 123@Password"
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

        <button
          type="submit"
          className="mt-2 bg-[#CDFB47] py-2 rounded-md disabled:opacity-50"
          disabled={loading}
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

export default Signin;
