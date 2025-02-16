"use client";
import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 flex justify-between items-center sticky top-0 z-2">
      <div className="flex items-center"> 
        <Link href="/" className="text-yellow-500">
        <Image src="/logo.png" alt="Logo" width={75} height={75} className="mr-2" />
        </Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-yellow-500">Home</Link>
        <Link href="/getting-taxi" className="hover:text-yellow-500 ">Getting a Taxi</Link>
        <Link href="/mobile-app" className="hover:text-yellow-500 ">Mobile App</Link>
        <Link href="/contact" className="hover:text-yellow-500">Contact Us</Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/notifications">
        <Bell className="text-white hover:text-yellow-500 cursor-pointer" size={24} />
        </Link>

        <Link href="/profile">
        <Image src="/user.png" alt="User" width={35} height={35} className="rounded-full" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
