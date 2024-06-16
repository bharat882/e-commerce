import React, { useState } from 'react';
import one from '../Images/one.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let errorMessages = [];

    // Check if all fields are filled
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        formErrors[field] = 'This field is required';
        errorMessages.push(`${field.replace(/([A-Z])/g, ' $1')} is required`);
      }
    });

    // Email validation
    if (formData.email && !formData.email.includes('@gmail.com')) {
      formErrors.email = 'Email should contain @gmail.com';
      errorMessages.push('Email should contain @gmail.com');
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@]).{8,}$/;
    if (formData.password && !passwordRegex.test(formData.password)) {
      formErrors.password = 'Password must be at least 8 characters long, contain @, one lowercase letter, one uppercase letter, and one digit';
      errorMessages.push('Password must be at least 8 characters long, contain @, one lowercase letter, one uppercase letter, and one digit');
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
      errorMessages.push('Passwords do not match');
    }

    setErrors(formErrors);

    if (errorMessages.length > 0) {
      alert(`Please fix the following errors:\n${errorMessages.join('\n')}`);
    }

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with form submission
      alert('Form submitted successfully');
      console.log('Form submitted', formData);
      // Add further logic for form submission (e.g., API call)
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-200 p-4">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full">
        <div className="md:w-1/2 p-6 bg-blue-600 flex items-center justify-center rounded-l-lg">
          <img src={one} alt="Signup Illustration" className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Get Started With Your Account</h2>
          <a
            href="https://myaccount.google.com"
            className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
            <i className="fab fa-google mr-2"></i> Register With Google
          </a>
          <div className="flex items-center justify-center mb-4">
            <span className="h-px w-full bg-gray-300"></span>
            <span className="px-3 text-gray-500">OR</span>
            <span className="h-px w-full bg-gray-300"></span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex mb-4 space-x-2">
              <div className="w-1/2">
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.firstName ? 'border-red-500' : ''}`}
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
              </div>
              <div className="w-1/2">
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.lastName ? 'border-red-500' : ''}`}
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
              </div>
            </div>
            <div className="mb-4">
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                id="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? 'border-red-500' : ''}`}
                id="phone"
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
            </div>
            <div className="mb-4 relative">
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
            </div>
            <div className="mb-4 relative">
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmPassword ? 'border-red-500' : ''}`}
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-500 text-sm">
                <input className="mr-2 leading-tight" type="checkbox" />
                I agree to the terms and conditions of your Company.
              </label>
            </div>
            <div className="mb-4">
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
