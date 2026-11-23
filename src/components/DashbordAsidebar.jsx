"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export default function DashbordAsidebar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const role = user?.role || "seller";

  const [isOpen, setIsOpen] = useState(false);

  const navMenu = {
    seller: [
      {
        title: "Overview",
        href: "/dashbord/seller",
      },
      {
        title: "Add-Product",
        href: "/dashbord/seller/add-products",
      },
      {
        title: "My Products",
        href: "/dashbord/seller/products",
      },
      {
        title: "Orders",
        href: "/dashbord/seller/orders",
      },
      {
        title: "Analytics",
        href: "/dashbord/seller/analytics",
      },
    ],

    buyer: [
      {
        title: "Overview",
        href: "/dashbord/buyer",
      },
      {
        title: "Cart",
        href: "/dashbord/buyer/cart",
      },
      
    ],

    admin: [
      {
        title: "Overview",
        href: "/dashbord/admin",
      },
      {
        title: "Users",
        href: "/dashbord/admin/user",
      },
      {
        title: "Products",
        href: "/dashbord/admin/products",
      },
    ],
  };

  const menu = navMenu[role] || navMenu.seller;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-3 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white shadow-md transition hover:bg-green-700 md:hidden"
        aria-label="Open dashboard menu"
      >
        <IoMenu size={22} />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 shrink-0 border-r border-gray-200 bg-white
          transform transition-transform duration-300 ease-in-out
          md:relative md:z-auto md:translate-x-0
          lg:w-64
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col p-4 sm:p-5">

          {/* Logo + Mobile Close */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex min-w-0 items-center gap-2"
            >
              <Image
                src="/asset/logo1.jpeg"
                width={55}
                height={55}
                alt="Amar Farme Logo"
                className="h-10 w-10 shrink-0 rounded-full border-2 border-green-200 object-cover sm:h-11 sm:w-11"
              />

              <h3 className="truncate text-lg font-bold text-green-700 sm:text-xl">
                Amar <span className="text-orange-400">Farme</span>
              </h3>
            </Link>

            {/* Close button - Mobile */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 md:hidden"
              aria-label="Close dashboard menu"
            >
              <IoClose size={22} />
            </button>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-7 flex-1 space-y-1.5 overflow-y-auto">
            {menu.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700 sm:px-4"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
