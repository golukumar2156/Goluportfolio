import React from "react";
import { useLocation } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
function Formfill() {
  const location = useLocation();
  if (location.pathname === "/" || location.pathname === "/about") return null;

  return (
    <div>
      <section className="pt-50 px-5 xl:ml-4 sm:px-6 lg:px-10 pb-10">
        <h1 className="text-center text-5xl font-bold text-[#dea725]">Let's Connect</h1>
        <div className="text-center md:text-xl pt-5 text-[#989c81]">Looking for a dedicated Spring Boot developer ? I’d love to hear about your project and discuss </div>
           <div className="text-center md:text-xl pb-14 text-[#989c81]">how we can build something great together.</div>
        <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-10 lg:space-y-0">
          {/* Form Card */}
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-gradient-to-r from-[#498284] to-[#0F766E]   rounded-xl shadow-md w-full max-w-3xl p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-bold text-center">Send Me a Message</h2>
              <h2 className="text-black  mb-6 text-center">
                Tell me about your project and I'll get back to you as soon as possible.
              </h2>
              <form action="#" className="space-y-6">
                <div className="flex flex-col md:flex-row md:space-x-6">
                  <div className="flex-1 mb-4 md:mb-0">
                    <label htmlFor="firstName" className="block text-black font-medium mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter name"
                      className="w-full py-2 px-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="lastName" className="block text-black font-medium mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="last name"
                      className="w-full py-2 px-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-black font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    className="w-full py-2 px-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-black font-medium mb-1">
                    Company/Organization <span className="text-gray-300">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Your Company"
                    className="w-full py-2 px-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-black  font-medium mb-1">Project Type</label>
                  <select
                    id="projectType"
                    className="w-full py-2 px-3 border rounded-lg text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select project type</option>
                    <option value="web">Web Development</option>
                    <option value="other">Backend Development</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-black font-medium mb-1">Project Timeline</label>
                  <select
                    id="timeline"
                    className="w-full py-2 px-3 border rounded-lg text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">When do you need this completed?</option>
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="soon">Soon (2-4 weeks)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="block text-black font-medium mb-1">Project Details</label>
                  <textarea
                    id="details"
                    rows={4}
                    placeholder="Describe your project requirements, tech stack preferences, specific features needed, and any other relevant details..."
                    className="w-full py-2 px-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer duration-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Info & Cards */}
          <div className="flex-1 flex flex-col space-y-5">
            {/* Contact Card */}
            <div className="bg-gradient-to-r from-[#4c9696] to-[#0a6d65] rounded-xl shadow-md p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-black mb-2 text-center">Get In Touch</h2>
              <p className="text-black mb-6 text-center">
                Multiple ways to reach me. Choose what works best for you.
              </p>
              <ul className="space-y-6">
                {/* Example item */}
                <li className="flex items-start space-x-4">
                  <span className="p-2 text-3xl text-blue-600 rounded-lg flex items-center">
                  <MdOutlineEmail />
                  </span>
                  <div>
                    <div className="font-semibold text-black">Email</div>
                    <div className="text-black">golusiddharthgs@gmail.com</div>
                    <div className="text-black text-sm">Best for detailed project discussions</div>
                  </div>
                </li>
                 {/* Example item */}
                <li className="flex items-start space-x-4">
                  <span className="p-2 text-3xl text-blue-600 rounded-lg flex items-center">
                  <FaWhatsapp />
                  </span>
                  <div>
                    <div className="font-semibold text-black">WhatApp</div>
                    <div className="text-black">8434432268</div>
                  </div>
                </li>
                 {/* Example item */}
                <li className="flex items-start space-x-4">
                  <span className="p-2 text-3xl text-blue-600 rounded-lg flex items-center">
                  <CiLocationOn />
                  </span>
                  <div>
                    <div className="font-semibold text-black">Location</div>
                    <div className="text-black">India</div>
                    <div className="text-black text-sm">Best for detailed project discussions</div>
                  </div>
                </li>
                {/* Add other contact items similarly */}
              </ul>
            </div>

            {/* Social Card */}
            <div className="bg-gradient-to-r from-[#4c9696] to-[#0a6d65]  shadow-md rounded-xl p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <h2 className="text-lg font-semibold text-black">Connect on Social Media</h2>
              <div className="flex space-x-6 text-black">
                
<a href="#" className="flex items-center hover:text-blue-600 transition-colors text-black gap-2"> <FaGithub />GitHub</a>
                 <a href="#" className="flex items-center hover:text-blue-700 transition-colors text-black gap-2"><CiLinkedin />LinkedIn</a>
                <a href="#" className="flex items-center hover:text-blue-700 transition-colors text-black gap-2"><FaXTwitter /> twitter</a>
              </div>
            </div>

            {/* FAQ Card */}
            <div className="bg-gradient-to-r from-[#4c9696] to-[#0a6d65]  shadow-lg rounded-xl p-6 space-y-6">
              <h2 className="text-lg font-semibold text-black text-center">Frequently Asked Questions</h2>
              <div>
                <h3 className="font-medium text-black">What technologies do you work with?</h3>
                <p className="text-black mt-1">
                  I specialize in Java, Spring Boot, MySQL, and React.js. I'm also familiar with REST APIs, and modern development practices.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-black">Are you available for freelance work?</h3>
                <p className="text-black mt-1">
                  Yes! I'm open to freelance projects, part-time opportunities, and full-time positions.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-black">Do you provide ongoing support?</h3>
                <p className="text-black mt-1">
                  I offer post-development support, bug fixes, and feature enhancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Formfill;
