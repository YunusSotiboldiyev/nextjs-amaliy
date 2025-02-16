"use client";
import { useState } from "react";
import Image from "next/image";
const rideOptions = [
  {
    title: "Basic",
    description:
      "The best balance of price and comfort. You will not go wrong with our basic rides.",
    image: "/image1.png",
  },
  {
    title: "Comfort",
    description:
      "If comfort is your priority, this is the ride for you. It’s spacious and packed with features.",
    image: "/image2.png",
  },
  {
    title: "Business",
    description:
      "Do you want to travel around the city in style? Make sure to select our business class rides.",
    image: "/image3.png",
  },
  {
    title: "Deluxe",
    description:
      "The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for.",
    image: "/image4.png",
  },
];


export default function BestRides() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-16 px-6">
      <div className="text-center">
        <h3 className="text-yellow-400 font-semibold">WHY SHOULD YOU RIDE WITH US?</h3>
        <h2 className="text-3xl font-bold mt-2">Best in class rides</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {rideOptions.map((ride, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <Image
              src={ride.image}
              alt={ride.title}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{ride.title}</h3>
            <p className="text-gray-400 mt-2">{ride.description}</p>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        ))}
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
    </section>
  );
}
