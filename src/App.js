import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Ap_HTU from "./pages/Ap_HTU";
import Ap_Buy from "./pages/Ap_Buy";
import Ap_Profile from "./pages/Ap_Profile";
import Ap_Redeem from "./pages/Ap_Redeem";
import Gst_form from "./pages/Gst_form";
import Pricing from "./components/Pricing";
import Heading from "./components/Heading";
import HelpPage from "./components/HelpPage";
import GSTReconciliationProduct from "./components/GSTReconciliationProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequestDemoPage from "./components/RequestDemoPage";
import About from "./components/About";
import PrivateRoute from "./components/PrivateRoute";
import HelpGuide from "./components/HelpGuide";


const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />

            {/* Private Routes */}
            <Route
              path="/acc_how_to_use"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated()}>
                  <Ap_HTU />
                </PrivateRoute>
              }
            />
            <Route
              path="/acc_buy"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated()}>
                  <Ap_Buy />
                </PrivateRoute>
              }
            />
            <Route
              path="/acc_profile"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated()}>
                  <Ap_Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/acc_redeem"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated()}>
                  <Ap_Redeem />
                </PrivateRoute>
              }
            />
            <Route
              path="/gst_form"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated()}>
                  <Gst_form />
                </PrivateRoute>
              }
            />
            <Route
              path="/help_guide"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated()}>
                  <HelpGuide />
                </PrivateRoute>
              }
            />

            {/* Public Routes */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/heading" element={<Heading />} />
            <Route path="/HelpPage" element={<HelpPage />} />
            <Route
              path="/gst-reconciliation"
              element={<GSTReconciliationProduct />}
            />
            <Route path="/request-demo" element={<RequestDemoPage />} />
            <Route path="/about-us" element={<About />} />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
