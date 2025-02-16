"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Booking = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen text-white p-8">
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/ride.png"
          alt="Ride Image"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
          />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 p-6">
        <h2 className="text-3xl font-semibold">NEED A RIDE?</h2>
        <h1 className="text-4xl font-bold">
          Book with <span className="text-yellow-500 italic">myRIDE</span> now!
        </h1>

        <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Find a ride now</h3>
            <button className="flex items-center text-gray-400 hover:text-yellow-500">
              Ride now <ChevronDown className="ml-1 w-4 h-4" />
            </button>
          </div>

          <div className="mb-4 d-flex">
            <label className="block text-gray-400 text-sm mb-1">Your Pickup</label>
            <input
              type="text"
              placeholder="Current Location"
              className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-1">Your Destination</label>
            <input
              type="text"
              placeholder="Enter Destination"
              className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              />
          </div>
          <div className="at-one flex justify-between items-center">
            <button className="w-2/5 bg-yellow-500 font-bold py-3 rounded-md hover:bg-yellow-700 transition">
              🔍 FIND A DRIVER
            </button>
            <button className="text-gray-400 text-sm hover:text-yellow-500">MORE OPTIONS</button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-black text-white py-16 px-8 text-center">
      <h2 className="text-3xl font-bold mb-6">THE BEST OUT THERE</h2>
      <h1 className="text-4xl font-bold mb-12">Why choose <span className="text-yellow-500 italic">myRide</span>?</h1>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center">
          <Image src="/Riders.png" alt="Rides Everywhere" width={100} height={100} />
          <h3 className="text-xl font-semibold mt-4">Our rides are everywhere</h3>
          <p className="text-gray-400">We have a wide range of coverage. We are available in multiple cities in the US and Asia.</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/booking.png" alt="Fast Booking" width={100} height={100} />
          <h3 className="text-xl font-semibold mt-4">Fast and easy booking</h3>
          <p className="text-gray-400">Book by going to myride.com or download our mobile app for iOS and Android.</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/money.png" alt="Save Money" width={100} height={100} />
          <h3 className="text-xl font-semibold mt-4">Your wallet will thank you</h3>
          <p className="text-gray-400">We have the lowest fares available now and you can make it even lower by using myRide points.</p>
        </div>
      </div>
    </div>
              </>
  );
};

export default Booking;
