import React, { useState } from 'react';
import axios from 'axios';
import Requestdemo from '../assets/RequestDemo.gif'; 
import Navbar from '../components/Navbar'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestDemoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }

    setIsLoading(true); // Set loading state to true
    try {
      // Send request to the backend API for demo request
      await axios.post('https://api-issp7n7t4a-uc.a.run.app/api/send-demo-email', {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      });

      setIsSubmitted(true);
      toast.success('Demo request sent successfully!', { position: 'top-center' });
    } catch (error) {
      setError('Something went wrong. Please try again.');
      toast.error('Failed to send demo request. Please try again later.', { position: 'bottom-center' });
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white">
      <Navbar />
      <div className="flex justify-center mt-10 items-center flex-grow">
        <div className="w-full md:w-1/2 p-5 flex justify-center">
          <div className="w-full max-w-md bg-gray-300 rounded-lg shadow-lg p-5">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Request a Demo</h1>
            {isSubmitted ? (
              <div className="text-center text-green-600">
                <p>Thank you for requesting a demo! We will get in touch with you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p className="text-red-600 mb-4">{error}</p>}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isLoading} // Disable button while loading
                  className={`w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Sending...' : 'Request Demo'} {/* Change button text when loading */}
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 p-5 flex justify-center">
          <img
            src={Requestdemo}
            alt="Request demo"
            className="w-full h-auto object-cover max-w-md rounded-lg"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RequestDemoPage;
