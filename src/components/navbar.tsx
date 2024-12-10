import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import React from "react";
import { FaT } from "react-icons/fa6";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <header className="w-[1339px] bg-[#252B42] text-white">
        {/* Top bar */}
        <div className="flex items-center justify-between px-8 h-[50px] text-sm">
          {/* Left Section: Phone and Email */}
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <IoCallOutline />
              <span>(225) 555-0118</span>
            </span>
            <span className="flex items-center space-x-1">
              <FaRegEnvelope />
              <span>michelle.rivera@example.com</span>
            </span>
          </div>

          {/* Center Section: Text */}
          <div className="text-center">
            <p>Follow us and get a chance to win 80% off</p>
          </div>

          {/* Right Section: Social Icons */}
          <div className="flex items-center space-x-2">
            <p>Follow us:</p>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="h-[70px] flex items-center justify-between px-8 py-3 bg-white text-[#252B42]">
          {/* Left Section: Heading */}
          <div className="flex items-center space-x-28">
            <div className="text-2xl font-bold">Bandage</div>
            <nav className="flex items-center space-x-4 text-[12px] text-gray-500 font-semibold list-none">
              <Link href="/home">
                <li className="hover:text-blue-600">Home</li>
              </Link>
              <Link href="/shoppage">
                <li className="hover:text-blue-600">Shop</li>
              </Link>
              <Link href="/aboutpage">
                <li className="hover:text-blue-600">About</li>
              </Link>
              <Link href="/contactpage">
                <li className="hover:text-blue-600">Contact</li>
              </Link>
              <Link href="/pricepage">
                <li className="hover:text-blue-600">Price</li>
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4 pl-44">
            <a
              href="#"
              className="text-blue-500 hover:underline text-[12px] flex items-center font-bold">
              <CiUser />
              Login / Register
            </a>
            <div className="flex items-center gap-4 text-blue-400 relative">
              <CiSearch />

              {/* Cart Icon with Number Badge */}
              <div className="relative">
                <BsCart />
                <span className="absolute -top-2 -right-3 text-blue-600 text-[8px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  1
                </span>
              </div>

              <CiHeart />
              <span className="absolute -top-2 -right-3 text-blue-600 text-[8px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                1
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
