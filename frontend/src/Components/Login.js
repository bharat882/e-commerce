
import React, { useState } from 'react';
import one from '../Images/one.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@gmail\.com$/.test(formData.email)) {
      errors.email = 'Email should be a valid gmail address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle successful form submission here
      console.log('Form submitted successfully');

    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-200 p-4">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full">
        <div className="md:w-1/2 p-6 bg-blue-600 flex items-center justify-center rounded-l-lg">
          <img
            src={one}
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
            Welcome to InstaShipin
          </h2>
          <p className="text-center text-gray-600 mb-8">Ship Smarter Today</p>

          <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Username or email
              </label>
              <div className='flex items-center relative'>
                <span className='absolute pl-3'>
                  <i className='fas fa-user text-gray-400'></i>
                </span>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Username or email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}

            </div>
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>

              <div className='flex items-center relative'>
                <span className='absolute pl-3'>
                  <i className='fas fa-lock text-gray-400'></i>

                </span>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"

                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}

            </div>
            <div className="mb-4 flex items-center justify-between">
              <label className="block text-gray-500 text-sm">
                <input className="mr-2 leading-tight" type="checkbox" />
                Remember me
              </label>
              <a
                className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Sign in
              </button>
            </div>
            <div className="text-center">
              <a
                className="text-blue-500 hover:text-blue-800 text-sm"
                href="/signup"
              >
                New User? Create your new Account
              </a>
            </div>

            <div className="flex flex-col items-center mt-4">
              <p className='text font-bold text-center mb-4 mt-4 text-blue-600'>OR LOGIN USING</p>
              <div className="flex justify-center">
                <a href="https://myaccount.google.com" className="mx-2 text-blue-500 hover:text-blue-800"><i className="fab fa-google"></i></a>
                <a href="https://x.com/i/flow/login" className="mx-2 text-blue-500 hover:text-blue-800"><i className="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com" className="mx-2 text-blue-500 hover:text-blue-800"><i className="fab fa-facebook"></i></a>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
