
"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Avatar } from '@heroui/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const { data: session, } = authClient.useSession()
  const user = session?.user


  const handleDelete = async ()=>{
    await authClient.signOut();
  }










  return (
    <nav className=" sticky top-0 z-50 w-full bg-green-50/70 border-b border-green-100 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Navbar */}
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/asset/logo1.jpeg"
              width={55}
              height={55}
              alt="Amar Farme Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-green-200"
            />

            <h3 className="text-xl sm:text-2xl font-bold text-green-700">
              Amar <span className="text-orange-400">Farme</span>
            </h3>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">

            {
              user? <>
              <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-green-600 font-medium transition"
              >
                Home
              </Link>
            </li>


            <li>
              <Link
                href="/products"
                className="text-gray-600 hover:text-green-600 font-medium transition"
              >
                Products
              </Link>
            </li>




            <li>
              <Link
                href="/add-products"
                className="text-gray-600 hover:text-green-600 font-medium transition"
              >
                Add Product
              </Link>
            </li>

            

            <li>
              <Link
                href="/cart"
                className="text-gray-600 hover:text-green-600 font-medium transition"
              >
                Cart
              </Link>
            </li>
              </>:

              <>

              <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-green-600 font-medium transition"
              >
                Home
              </Link>
            </li>


            <li>
              <Link
                href="/products"
                className="text-gray-600 hover:text-green-600 font-medium transition"
              >
                Products
              </Link>
            </li>
              
              
              </>
            }
            

          
          </ul>


          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {user ? <>
            

               
            <Link
                href="/profile"
                className="text-gray-600 hover:text-green-600 font-medium transition"
              >
               <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
              </Link>


                <Button
                onClick={handleDelete}
                variant="danger"
                className=" ml-5"
              >
                Logout
              </Button>
           
            </> : 
              <>
                <Link href="/login">
                  <Button
                    variant="bordered"
                    className="border-green-300 text-green-700 hover:bg-green-100"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/signUp">
                  <Button className="bg-green-500 text-white hover:bg-green-600">
                    Sign Up
                  </Button>
                </Link>
              </>
            }
          </div>











          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="bg-white/80 border border-green-100 rounded-xl p-3 shadow-sm">

              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-600 transition"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/products"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-600 transition"
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    href="/cart"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-600 transition"
                  >
                    Cart
                  </Link>
                </li>

                <li>
                  <Link
                    href="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-600 transition"
                  >
                    Profile
                  </Link>
                </li>
              </ul>

              {/* Mobile Auth Buttons */}
              <div className="flex gap-2 mt-3 pt-3 border-t border-green-100">
                <Button
                  variant="bordered"
                  className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
                >
                  Login
                </Button>

                <Button className="flex-1 bg-green-500 text-white hover:bg-green-600">
                  Sign Up
                </Button>
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
