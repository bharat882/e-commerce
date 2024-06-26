import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = 'First Name is required';
    if (!formData.lastName) tempErrors.lastName = 'Last Name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.subject) tempErrors.subject = 'Subject is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-lg border border-gray-300">
          <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full border rounded p-2 ${errors.firstName && 'border-red-500'}`}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full border rounded p-2 ${errors.lastName && 'border-red-500'}`}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded p-2 ${errors.email && 'border-red-500'}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full border rounded p-2 ${errors.subject && 'border-red-500'}`}
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
            <textarea
              name="message"
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded p-2 ${errors.message && 'border-red-500'}`}
              rows="5"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded mr-52">
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/3 mt-10 lg:mt-0 lg:ml-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p>Montreal, Quebec, Canada</p>
                <p>H4E 2V9</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-2xl">
                <i className="fas fa-phone-alt"></i> 
              </div>
              <div>
                <p>1-877-989-6321</p>
                <p>Mon to Fri (8am-8pm EST)</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-2xl">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p>support@instashipin.com</p>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
