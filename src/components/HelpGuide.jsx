import React, { useState } from "react";

const HelpGuide = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black p-4 flex flex-col md:flex-row">
      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden bg-gray-300 text-black p-2 rounded-lg mb-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "Close Contents" : "Show Contents"}
      </button>

      {/* Left Side - Table of Contents */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block bg-gray-300 p-4 rounded-lg shadow-lg mb-4 md:mr-6 md:mb-0 md:w-1/4 h-fit sticky top-6`}
      >
        <h2 className="text-xl font-semibold mb-4 text-black">
          Table of Contents
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {[
            "Getting Started",
            "Account Setup",
            "Dashboard Overview",
            "Gst reconciliaton From page",
            "How to Use GST Reconciliation",
            "Understanding Reconciliation Results",
            "Troubleshooting",
            "Contact Support",
            "Logging Out",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-black hover:underline"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Side - Content Sections */}
      <div className="bg-gray-900 p-4 md:p-8 rounded-lg shadow-lg text-white md:w-3/4">
        <h1 className="text-3xl font-bold mb-6 text-yellow-300">
          GST Reconciliation User Help Guide
        </h1>

        {[
          {
            id: "getting-started",
            title: "Getting Started",
            content: (
              <>
                <p className="mb-2">Follow these steps to get started:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Visit the GST Reconciliation homepage.</li>
                  <li>Explore our product offerings and descriptions.</li>
                  <li>Request a demo to see the platform in action.</li>
                  <li>Learn more about us and our mission.</li>
                  <li>Navigate to the Product page for detailed features.</li>
                  <li>Contact us for any inquiries or support.</li>
                  <li>Sign up or log in to your account.</li>
                </ol>
              </>
            ),
          },
          {
            id: "account-setup",
            title: "Account Setup",
            content: (
              <>
                <p className="mb-2">
                  Set up your account by following these steps:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Click on the "Register" button to create a new account
                    manually.
                  </li>
                  <li>
                    Use social login options to sign in quickly using Google or
                    Microsoft.
                  </li>
                  <li>Secure your account by setting a strong password.</li>
                  <li>Verify your email address to activate your account.</li>
                  <li>
                    Update your profile information with accurate business
                    details.
                  </li>
                  <li>
                    If you forget your password, use the "Forgot Password"
                    feature to reset it.
                  </li>
                </ol>
              </>
            ),
          },
          {
            id: "dashboard-overview",
            title: "Dashboard Overview",
            content: (
              <>
                <p className="mb-2">Your Dashboard provides these features:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    View and edit your personal information on the User Profile
                    page.
                  </li>
                  <li>Watch How to use videos for effective navigation.</li>
                  <li>
                    Complete the GST forms in the GST Reconciliation section.
                  </li>
                </ol>
              </>
            ),
          },
          {
            id: "gst-reconciliaton-from-page",
            title: "Gst reconciliaton From page",
            content: (
              <>
                <p className="mb-2">Follow these steps:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Go to the GST Reconciliation section.</li>
                  <li>Enter the Form details.</li>
                  <li>Follow the instructions to complete the Form process.</li>
                </ol>
              </>
            ),
          },
          {
            id: "how-to-use-gst-reconciliation",
            title: "How to Use GST Reconciliation",
            content: (
              <>
                <p className="mb-2">
                  To begin the GST reconciliation process, fill in the form as
                  follows:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <strong className="text-blue">Note:</strong> Ensure the
                    details match those in your ATO and Xero accounts.
                  </li>
                  <li>Complete all required fields.</li>
                </ol>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border bg-gray-700 mt-4 mb-4">
                    <thead>
                      <tr className="bg-gray-600">
                        <th className="border border-gray-400 p-2 text-left">
                          Field Name
                        </th>
                        <th className="border border-gray-400 p-2 text-left">
                          Description
                        </th>
                        <th className="border border-gray-400 p-2 text-left">
                          Example
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800">
                      {[
                        {
                          name: "ATO Id",
                          description: "Enter your Xero email id",
                          example: "johndoe@gmail.com",
                        },
                        {
                          name: "Client Name",
                          description: "Enter client name",
                          example: "The Outsource Pro Pvt Ltd",
                        },
                        {
                          name: "From",
                          description: "Start date of the period",
                          example: "01/07/2022",
                        },
                        {
                          name: "To",
                          description: "End date of the period",
                          example: "30/09/2022",
                        },
                        {
                          name: "July September Quarter",
                          description: "Enter the client quarter details",
                          example: "Jul 2022 - Sep 2022 Business statement",
                        },
                        {
                          name: "October December Quarter",
                          description: "Enter the client quarter details",
                          example: "Oct 2022 - Dec 2022 Business statement",
                        },
                        {
                          name: "January March Quarter",
                          description: "Enter the client quarter details",
                          example: "Jan 2023 - Mar 2023 Business statement",
                        },
                        {
                          name: "April June Quarter",
                          description: "Enter the client quarter details",
                          example: "Apr 2023 - Jun 2023 Business statement",
                        },
                        {
                          name: "XERO Id",
                          description: "Enter your Xero email id",
                          example: "johndoe@gmail.com",
                        },
                        {
                          name: "XERO Password",
                          description: "Enter your password",
                          example: "********",
                        },
                        {
                          name: "Security Question 1",
                          description: "What is your dream job?",
                          example: "Enter your dream job",
                        },
                        {
                          name: "Security Answer 1",
                          description: "Answer the first security question",
                          example: "Software Engineer",
                        },
                        {
                          name: "Security Question 2",
                          description: "What is your first pet's name?",
                          example: "First pet's name",
                        },
                        {
                          name: "Security Answer 2",
                          description: "Answer to the second security question",
                          example: "Dog",
                        },
                        {
                          name: "User Name",
                          description: "Enter your name",
                          example: "John",
                        },
                        {
                          name: "User Email",
                          description: "Enter your email address",
                          example: "john@gmail.com",
                        },
                      ].map(({ name, description, example }) => (
                        <tr className="bg-gray-700" key={name}>
                          <td className="border border-gray-400 p-2">{name}</td>
                          <td className="border border-gray-400 p-2">
                            {description}
                          </td>
                          <td className="border border-gray-400 p-2">
                            {example}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ),
          },
          {
            id: "understanding-reconciliation-results",
            title: "Understanding Reconciliation Results",
            content: (
              <>
                <p className="mb-2">
                  After completing the process, the user will
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Receive a screenshot of the ATO login code in their email.
                  </li>
                  <li>
                    Verify the ATO code in your ATO MY Gov mobile Application.
                  </li>
                  <li>
                    After 5 minutes, a BAS sheet will be generated and sent to
                    the user's email with the reconciled GST details.
                  </li>
                </ol>
              </>
            ),
          },
          {
            id: "troubleshooting",
            title: "Troubleshooting",
            content: (
              <>
                <p className="mb-2">
                  If you encounter issues, follow these steps:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Check your internet connection.</li>
                  <li>Ensure your login credentials are correct.</li>
                  <li>Review any error messages for guidance.</li>
                </ol>
              </>
            ),
          },
          {
            id: "contact-support",
            title: "Contact Support",
            content: (
              <>
                <p className="mb-2">
                  Alternatively, you can reach us through the dashboard by
                  following these steps:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Go to the dashboard after logging in.</li>
                  <li>Scroll to the bottom and click on the "Help" button.</li>
                  <li>
                    Fill in the provided form with accurate details including
                    your name, email, and the issue you're facing.
                  </li>
                  <li>
                    Once submitted, our support team will review your request
                    and get back to you promptly.
                  </li>
                </ol>
                <br />
                <p className="mb-2">
                  For further assistance, contact our support team:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:toptechautomation@theoutsourcepro.com.au"
                      className="hover:underline"
                    >
                      toptechautomation@theoutsourcepro.com.au
                    </a>
                  </li>
                  <li>Phone: +91 6283289834</li>
                </ul>
              </>
            ),
          },
          {
            id: "logging-out",
            title: "Logging Out",
            content: (
              <>
                <p className="mb-2">To log out, follow these steps:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Open the sidebar.</li>
                  <li>Select "Log Out" at the bottom.</li>
                </ol>
              </>
            ),
          },
        ].map(({ id, title, content }) => (
          <section key={id} id={id} className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
            {content}
          </section>
        ))}
      </div>
    </div>
  );
};

export default HelpGuide;
