import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiViewGrid } from "react-icons/hi";
import { FaArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { auth, db } from "../pages/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { LuUserCog } from "react-icons/lu";
import { AiOutlineLogout } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { FaSquarespace } from "react-icons/fa";
import { TbHomeMove } from "react-icons/tb";

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDocRef = doc(db, "user", currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUser(userDoc.data());
        } else {
          console.error("No such document in Firestore!");
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev); // Use functional state update
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      auth
        .signOut()
        .then(() => {
          console.log("User signed out");
          localStorage.removeItem("authToken"); // Remove the token from local storage
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Error signing out: ", error);
        });
    }
  };

  const isActive = (path) => (location.pathname === path ? "bg-gray-700" : "");

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full transition-transform ease-in-out duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-16"
        } bg-gray-800 text-white shadow-md z-50 ${isSidebarOpen ? "w-49" : "w-16"}`}
      >
        <div className="flex flex-col h-full p-6">
          {/* User Profile */}
          <div className={`flex items-center mb-5 ${isSidebarOpen ? "" : "justify-center"}`}>
            <Link to="/acc_Profile">
              <img
                src={user?.photo || "https://via.placeholder.com/150"}
                alt="Profile"
                className={`h-9 w-9 rounded-full ${isSidebarOpen ? "mr-2" : ""}`}
              />
            </Link>
            {isSidebarOpen && (
              <span className="text-sm font-medium">
                {user ? `${user.firstName} ${user.lastName}` : " "}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-2 mb-4">
            {[
              { path: "/acc_profile", label: "Profile", Icon: LuUserCog },
              { path: "/Gst_Form", label: "GST Reconciliation", Icon: FaSquarespace },
              { path: "/acc_how_to_use", label: "How to use", Icon: HiViewGrid },
              { path: "/HelpPage", label: "Help", Icon: BiHelpCircle },
              { path: "/", label: "Home", Icon: TbHomeMove },
            ].map(({ path, label, Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center p-2 rounded-md transition-colors hover:bg-gray-700 ${isActive(path)}`}
              >
                <Icon className="text-xl" />
                {isSidebarOpen && <span className="ml-2">{label}</span>}
              </Link>
            ))}
          </div>

          {/* Logout Button */}
          <div className="flex flex-col space-y-2">
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-2 rounded-md transition-colors text-red-600 hover:bg-gray-700"
            >
              <AiOutlineLogout className="text-xl" />
              {isSidebarOpen && <span className="ml-2">Logout</span>}
            </button>
          </div>

          {/* Sidebar Toggle Button */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 right-0 flex items-center justify-center ${
              isSidebarOpen ? "bg-white text-gray-800" : "bg-gray-800 text-white"
            } rounded-l-full w-8 h-8`}
          >
            <button onClick={toggleSidebar} className="w-full h-full flex items-center justify-center">
              <FaRegArrowAltCircleRight
                className={`transform ${isSidebarOpen ? "rotate-180" : ""} transition-transform`}
                size={20}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar icon to open */}
      {!isSidebarOpen && (
        <div className="fixed top-1/2 -translate-y-1/2 left-0 flex items-center justify-center bg-gray-800 text-white rounded-r-full w-8 h-8 z-50">
          <button onClick={toggleSidebar} className="w-full h-full flex items-center justify-center">
            <FaArrowAltCircleLeft
              className="transform rotate-180 transition-transform"
              size={20}
            />
          </button>
        </div>
      )}
    </>
  );
};
