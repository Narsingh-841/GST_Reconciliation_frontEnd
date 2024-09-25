import React, { useState } from "react";
import Image from "../assets/top.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleLogoClick = () => {
    scroller.scrollToTop();
    closeMenu();
  };

  const handleScrollToAbout = () => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo('about', {
        smooth: true,
        duration: 500,
      });
    }, 0);
    closeMenu();
  };

  const handleScrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo('contact', {
        smooth: true,
        duration: 500,
      });
    }, 0);
    closeMenu();
  };

  const handleSignInClick = () => {
    const authToken = localStorage.getItem('authToken'); // Use the correct key
    if (authToken) {
      navigate('/acc_profile'); // Navigate to profile if token exists
    } else {
      navigate('/sign-in'); // Navigate to sign-in otherwise
    }
    closeMenu();
  };

  return (
    <div className="bg-[#f8f9fa] p-4 md:p-6 transform scale-105 relative z-10">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center relative z-20">
        <div className="flex items-center">
          <img
            src={Image}
            alt="Logo"
            className="h-16 w-auto mr-20 cursor-pointer"
            onClick={handleLogoClick}
          />
          <ul className={`md:flex space-x-9 items-center hidden md:flex ml-8`}>
            <li>
              <RouterLink to="/">
                <button className="hover:font-bold">Home</button>
              </RouterLink>
            </li>
            <li>
              <button onClick={handleScrollToAbout} className="hover:font-bold">About Us</button>
            </li>
            <li>
              <RouterLink to="/gst-reconciliation">
                <button className="hover:font-bold">Product</button>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/pricing">
                <button className="hover:font-bold">Pricing</button>
              </RouterLink>
            </li>
            <li>
              <button onClick={handleScrollToContact} className="hover:font-bold">Contact Us</button>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          {showMenu ? (
            <FiX className="text-2xl cursor-pointer" onClick={closeMenu} />
          ) : (
            <FiMenu className="text-2xl cursor-pointer" onClick={() => setShowMenu(true)} />
          )}
        </div>

        <ul className="md:flex space-x-8 items-center hidden md:flex">
          <li>
            <button onClick={handleSignInClick} className="border-2 border-gray-400 text-white px-4 py-2 w-32 hover:font-bold rounded-md bg-gray-800">
              Sign In
            </button>
          </li>
          <li>
            <RouterLink to="/sign-up">
              <button className="bg-gray-800 text-white border-2 border-gray-400 px-4 py-2 w-100 hover:font-bold rounded-md">
                Register Now
              </button>
            </RouterLink>
          </li>
        </ul>
      </div>

      {showMenu && (
        <div className="md:hidden">
          <ul className="flex flex-col mt-4 px-4">
            <li>
              <RouterLink to="/">
                <button onClick={closeMenu} className="hover:font-bold">Home</button>
              </RouterLink>
            </li>
            <li>
              <button onClick={handleScrollToAbout} className="hover:font-bold">About Us</button>
            </li>
            <li>
              <RouterLink to="/gst-reconciliation">
                <button className="hover:font-bold">Products</button>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/pricing">
                <button className="hover:font-bold">Pricing</button>
              </RouterLink>
            </li>
            <li>
              <button onClick={handleScrollToContact} className="hover:font-bold">Contact Us</button>
            </li>
            <li>
              <button onClick={handleSignInClick} className="bg-gray-800 text-white border-2 border-gray-400 px-4 py-2 w-100 hover:font-bold rounded">Sign In</button>
            </li>
            <li>
              <RouterLink to="/sign-up">
                <button className="bg-gray-800 text-white border-2 border-gray-400 px-4 py-2 w-100 hover:font-bold rounded">Register Now</button>
              </RouterLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
