import React, { useState, useEffect } from 'react';
import { FaFacebook, FaHackerrank, FaWhatsapp, FaGithub } from 'react-icons/fa'; // Ensure FaWhatsapp is included here
import profileImage from '../assets/p1.jpg';
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';

const Header = () => {
  const images = [g1, g2, g3];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle automatic image rotation every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-xl rounded-lg overflow-hidden mt-8 fade-in transform transition duration-500 hover:scale-105">
      {/* Profile Image */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4">
        <img
          src={profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border-4 border-gray-900"
        />
      </div>

      {/* Name */}
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold text-gray-900">SAI SUSANTH R</h1>
        <p className="text-gray-500 italic">"Puss Pass Your Limits."</p>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-4">
        <a
          href="#contact"
          className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition duration-300 ease-in-out"
        >
          Get in Touch
        </a>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://www.hackerrank.com/profile/rsaisusanth"
          className="text-pink-500 hover:text-pink-400 transition transform hover:scale-110"
        >
          <FaHackerrank size={30} />
        </a>

        <a
          href="https://github.com/SS7Leo"
          className="text-gray-400 hover:text-gray-300 transition transform hover:scale-110"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100062754496567"
          className="text-blue-500 hover:text-blue-400 transition transform hover:scale-110"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://wa.me/your-phone-number"
          className="text-green-500 hover:text-green-400 transition transform hover:scale-110"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>

      {/* Services Section */}
      <div id="services" className="p-6 mt-4">
        <h2 className="text-xl font-semibold text-teal-400 border-b-2 border-teal-500 pb-2">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-900">Website Design and Development</h3>
            <p className="mt-2 text-gray-600">Creating visually appealing and functional websites.
</p>
          </div>
          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-900">UI/UX Design</h3>
            <p className="mt-2 text-gray-600"> Enhance user experience and retention.</p>
          </div>
          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-900">Website Maintenance and Support</h3>
            <p className="mt-2 text-gray-600">Updating and fixing websites post-launch.
</p>
          </div>
          {/* Service 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-900">Web Hosting and Domain Services</h3>
            <p className="mt-2 text-gray-600"> Setting up domains and hosting for websites.

</p>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
<div id="gallery" className="p-6 mt-4">
  <h2 className="text-xl font-semibold text-teal-400 border-b-2 border-teal-500 pb-2">Gallery</h2>
  <div className="relative mt-4">
    {/* Carousel Images */}
    <div className="overflow-hidden relative">
      <img 
        src={images[currentIndex]} 
        alt="Gallery Image" 
        className="w-full max-h-64 object-contain mx-auto transition-all duration-500"
      />
    </div>
  </div>

  {/* Navigation Button Below Carousel */}
  <div className="text-center mt-4">
    <button 
      className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300 ease-in-out">
      Next Slide
    </button>
  </div>
</div>


      {/* Product Section */}
      <div id="products" className="p-6 mt-4">
        <h2 className="text-xl font-semibold text-teal-400 border-b-2 border-teal-500 pb-2">Products</h2>

        {/* Product 1 */}
        <div className="product-card">
          <h3 className="product-title"> ERP (Enterprise Resource Planning) Application</h3>
          <p className="text-gray-600">ERP systems streamline core business processes, centralizing data across various departments like finance, HR, inventory, and customer relations.</p>
          <p className="product-price">RS 2999</p>
        </div>

        {/* Product 2 */}
        <div className="product-card mt-4">
          <h3 className="product-title">Clone Application Development</h3>
          <p className="text-gray-600">Clone applications replicate the functionality of an existing successful app, often with unique modifications.</p>
          <p className="product-price">Rs 1999</p>
        </div>

        {/* Product 3 */}
        <div className="product-card mt-4">
          <h3 className="product-title">News Application Development</h3>
          <p className="text-gray-600">A news application delivers news articles, videos, or real-time updates to users through a web or mobile platform.</p>
          <p className="product-price">Rs 1799</p>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="p-6 mt-4">
  <h2 className="text-xl font-semibold text-teal-400 border-b-2 border-teal-500 pb-2">Contact</h2>

  {/* Phone */}
  <p className="mt-4 text-gray-700">Phone: <a href="tel:+919774556000" className="text-teal-500 hover:underline">+91 9774556000</a></p>
  
  {/* Email */}
  <p className="mt-4 text-gray-700">Email: <a href="mailto:businesscard77@gmail.com" className="text-teal-500 hover:underline">businesscard77@gmail.com</a></p>
  
  {/* Address and Map */}
  <div className="mt-4 text-gray-700">
    <p>Address: Krishnagiri, Tamil Nadu, India</p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.828655419522!2d77.972739!3d12.521944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab6375d949b3f7%3A0x3d257b36eb3c380d!2sKrishnagiri%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1673972328349!5m2!1sen!2sus"
      width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="rounded-md shadow-lg mt-2"
    ></iframe>
  </div>
</div>




    </div>
  );
}

export default Header;
