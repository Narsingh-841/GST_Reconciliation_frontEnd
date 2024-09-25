import React, { useState } from 'react';
import axios from 'axios';
import { Sidebar } from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, db } from "../pages/firebase";
import { collection, addDoc } from 'firebase/firestore'; // Firestore functions

export default function HelpPage() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when the request starts

    try {
      // Store form details in Firestore
      await addDoc(collection(db, 'contactRequests'), {
        to,
        subject,
        text,
        createdAt: new Date(),
      });

      // Send email request
      await axios.post('https://api-issp7n7t4a-uc.a.run.app/api/send-email', { to, subject, text });
      toast.success('Request sent successfully! Our team will contact you soon.');

      // Clear input fields
      setTo('');
      setSubject('');
      setText('');
    } catch (error) {
      console.error('Error sending email or saving to Firestore:', error);
      toast.error('An error occurred while sending the request.');
    } finally {
      setIsLoading(false); // Set loading to false after the request completes
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <Sidebar />
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 bg-gray-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Help Center</h2>
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-lg font-medium text-red-500">How do I reset my password?</h4>
                <p className="text-gray-600">To reset your password, go to the login page and click on "Forgot Password." Follow the instructions sent to your email to reset it.</p>
              </li>
              <li>
                <h4 className="text-lg font-medium text-red-500">How can I contact support?</h4>
                <p className="text-gray-600">You can contact support via the form below or email us directly at <a href="mailto:toptechautmation@theoutsourcepro.com.au" className="text-indigo-600 hover:underline">toptechautomation@theoutsourcepro.com.au</a></p>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
            <form onSubmit={sendEmail} className="space-y-4 bg-gray-200 p-4 rounded-md">
              <div>
                <label htmlFor="to" className="block text-sm font-medium text-gray-700">Enter your email</label>
                <input
                  type="email"
                  id="to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  required
                  placeholder='Enter your email'
                  className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  placeholder='Enter the subject'
                  className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                  placeholder='Enter the message'
                  rows="3"
                  className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? 'Sending...' : 'Send'} {/* Change button text based on loading state */}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
