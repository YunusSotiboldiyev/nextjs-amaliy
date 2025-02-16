"use client"; 
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Apple, Play, Download } from "lucide-react";
const MobileAppPage = () => {
    const [showForm, setShowForm] = useState(false);
  return (
    <div className="py-16 px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-slate-200 text-xl uppercase">Book rides on the go!</p>
          <p className="text-4xl font-bold mt-2">Introducing the</p>
          <p className="text-yellow-400 text-4xl font-bold">myRIDE Mobile App</p>

          <div className="flex space-x-4 mt-6 justify-center lg:justify-start">
            <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
              <Play className="w-6 h-6 mr-2" />
              <span>Get it on Google Play</span>
            </button>
            <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
              <Apple className="w-6 h-6 mr-2" />
              <span>Download on the App Store</span>
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src="/Banner.png"
            alt="myRIDE Mobile App"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="text-center mt-16">
        <h3 className="text-yellow-400 uppercase">Quick and Easy Booking</h3>
        <h2 className="text-3xl font-bold mt-2">How does it work?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
          <Image
            src="/Bookn1.png"
            alt="myRIDE Mobile App"
            width={100}
            height={100}
            className="rounded-lg"
          />
            <h3 className="text-xl mt-4">Download the app</h3>
            <p className="text-gray-400 mt-2">
              Download the MyRide App from the <span className="text-yellow-400">App Store</span> or from the <span className="text-yellow-400">Google Playstore</span>.
            </p>
          </div>

          <div className="flex flex-col items-center">
          <Image
            src="/Bookn2.png"
            alt="myRIDE Mobile App"
            width={100}
            height={100}
            className="rounded-lg"
          />
            <h3 className="text-xl mt-4">Sign up</h3>
            <p className="text-gray-400 mt-2">
              Sign up quickly. You can either sign up with Facebook, Google, or your email.
            </p>
          </div>

          <div className="flex flex-col items-center">
          <Image
            src="/Bookn3.png"
            alt="myRIDE Mobile App"
            width={100}
            height={100}
            className="rounded-lg"
          />
            <h3 className="text-xl mt-4">Book a ride</h3>
            <p className="text-gray-400 mt-2">
              Add your destination, select your ride class, and find a driver.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <h3 className="text-yellow-400 uppercase">Quick and Easy Booking</h3>
        <h2 className="text-3xl font-bold mt-2">FAQ</h2>

        <div className="max-w-4xl mx-auto mt-6">
        <div className="max-w-4xl mx-auto mt-6">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <ul className="text-left bg-gray-800 p-4 space-y-2">
              <li className="text-lg border-b border-gray-700 py-2">How can I pay?</li>
              <li className="text-lg border-b border-gray-700 py-2">How to earn and use MyRide points?</li>
              <li className="text-lg border-b border-gray-700 py-2">How to earn incentives by driving with MyRide?</li>
              <li className="text-lg border-b border-gray-700 py-2">How to contact MyRide if I have any problems?</li>
              <li className="text-lg py-2">What is the status of my application as a driver?</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl mt-12 flex flex-col md:flex-row items-center justify-between">
        <Image
          src="/image5.png"
          alt="driver-image"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold">Become a Driver</h3>
          <p className="text-gray-400 mt-2 max-w-lg">
            Be a part of a growing community of myRiders. Register as a driver and don’t forget to
            register your car as well.
          </p>
        </div>
        <button
          className="mt-4 md:mt-0 bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded"
          onClick={() => setShowForm(true)}
        >
          Register Now
        </button>
      </div>

      {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 relative">
                    <button
                      className="absolute top-2 right-2 text-white text-xl"
                      onClick={() => setShowForm(false)}
                    >
                      &times;
                    </button>
                    <div className="flex">
                      <div className="w-1/2">
                      <Image
                  src="/image5.png"
                  alt="driver-image"
                  width={150}
                  height={150}
                  className="rounded-lg"
                     />
                      </div>
                      <div className="w-1/2">
                    <h2 className="text-yellow-400 text-lg font-bold mb-4">Drive with MyRide</h2>
                    <p className="text-xs">Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</p>
                      </div>
                    </div>
                    <form className="space-y-4">
                      <input type="text" placeholder="First Name" required className="w-full p-2 rounded bg-gray-800 text-white" />
                      <input type="text" placeholder="Last Name"required className="w-full p-2 rounded bg-gray-800 text-white" />
                      <input type="email" placeholder="Email Address"required className="w-full p-2 rounded bg-gray-800 text-white" />
                      <select className="w-full p-2 rounded bg-gray-800 text-white">
                        <option>Singapore</option>
                        <option>Uzbekistan</option>
                        <option>United States</option>
                        <option>Turkey</option>
                        <option>Angeland</option>
                      </select>
                      <input type="text" placeholder="City" className="w-full p-2 rounded bg-gray-800 text-white" />
                      <input type="text" placeholder="Referral Code" className="w-full p-2 rounded bg-gray-800 text-white" />
                      <div className="flex justify-between">
                        <div className="w-1/2">
                        <p>I drive my own car</p>
                        </div>
                        <div className="">
                        <input type="checkbox" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" required id="terms" className="w-4 h-4" />
                        <label htmlFor="terms" className="text-gray-400 text-sm">
                          I agree to MyRide's <a href="#" className="text-yellow-400">Terms & Conditions</a> and <a href="#" className="text-yellow-400">Privacy Policy</a>.
                        </label>
                      </div>
        
                      <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
      )}
    </div>
  );
};

export default MobileAppPage;
