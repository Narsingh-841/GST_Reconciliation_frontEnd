import React from "react";
import {
  FaPhone,
  FaMapMarker,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Map from "./Map";

export default function Contact() {
  return (
    <section className="bg-gray-100 text-white p-4 sm:p-8">
      <div id="contact" className="bg-gray-700 p-6 sm:p-8 rounded-lg">
        <div className="max-w-[1240px] mx-auto text-center mb-10">
          <div className="bg-gray-800 border inline-block px-4 py-1 rounded-full mb-6 shadow-lg">
            Contact Us
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's Connect</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="w-full h-48 sm:h-64 lg:h-auto overflow-hidden">
              <Map />
            </div>
          </div>

          <div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <FaPhone className="mr-2" />
                  <p className="text-sm sm:text-base">+916283289834</p>
                </div>
                <div className="flex items-center">
                  <FaMapMarker className="mr-2" />
                  <p className="text-sm sm:text-base">
                    Indiqube, Alpha Building, Kadubeesanahalli, Panathur,
                    Bengaluru, Karnataka 560103
                  </p>
                </div>
                <div className="flex items-center flex-wrap">
                  <FaEnvelope className="mr-2" />
                  <a
                    href="mailto:toptechautomation@theoutsourcepro.com.au"
                    className="text-blue-400 hover:underline text-sm sm:text-base break-words"
                  >
                    {`toptechautomation\u200B@\u200Btheoutsourcepro.com.au`}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg mt-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Social Media
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <FaInstagram className="mr-2" />
                  <p className="text-sm sm:text-base">
                    <a
                      href="https://www.instagram.com/top_theoutsourcepro/?igshid=Yzg5MTU1MDY%3D"
                      className="text-blue-400 hover:underline"
                    >
                      top_theoutsourcepro
                    </a>
                  </p>
                </div>
                <div className="flex items-center">
                  <FaFacebook className="mr-2" />
                  <p className="text-sm sm:text-base">
                    <a
                      href="https://www.facebook.com/people/The-Outsource-Pro-TOP/100089274189547/?is_tour_dismissed=true"
                      className="text-blue-600 hover:underline"
                    >
                      The Outsource Pro
                    </a>
                  </p>
                </div>
                <div className="flex items-center">
                  <FaTwitter className="mr-2" />
                  <p className="text-sm sm:text-base">
                    <a
                      href="https://twitter.com/TOPtheoutsource"
                      className="text-blue-400 hover:underline"
                    >
                      TOPtheoutsource
                    </a>
                  </p>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="mr-2" />
                  <p className="text-sm sm:text-base">
                    <a
                      href="https://www.linkedin.com/company/the-outsourcepro/"
                      className="text-blue-700 hover:underline"
                    >
                      The Outsource Pro
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
