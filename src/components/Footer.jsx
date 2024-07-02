import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin }  from "react-icons/fa";

function Footer() {
  return (
    <div><footer className="bg-[#0ca39a] text-white py-12">
    <div className="container mx-auto lg:flex px-3">
      <div className="lg:w-2/5">
        <h2 className="text-xl font-medium">Contact Us</h2>
        <p className="mt-4">123 Main Street, City</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="lg:w-1/2 flex justify-between mt-8 lg:mt-0">
        <div>
          <h2 className="text-xl font-medium">Quick Links</h2>
          <ul className="mt-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-medium">Follow Us</h2>
          <ul className="mt-4 flex gap-4">
            <li><a href="#" className="hover:underline"><FaFacebook /></a></li>
            <li><a href="#" className="hover:underline"><FaTwitter /></a></li>
            <li><a href="#" className="hover:underline"><FaInstagram /></a></li>
            <li><a href="#" className="hover:underline"><FaLinkedin /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer