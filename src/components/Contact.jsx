import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/H25Pn9j/pexels-energepiccom-313691.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
          </div>
        </div>
      </div>
      <section className="contact-section py-12 bg-gray-100 mt-10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-center mb-9 text-[#39938f]">
              Get In Touch
            </h2>
            <form
              action="#"
              method="POST"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <label for="name" className="block font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label for="email" className="block font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2">
                <label
                  for="message"
                  className="block font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#39938f] text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  

      <Footer></Footer>
    </div>
  );
};

export default Contact;
