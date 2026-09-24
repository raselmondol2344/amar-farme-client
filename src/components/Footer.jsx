import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#F3F4F6] text-[#4B5563] border-t border-gray-200 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Brand Info */}
                    <div>
                        <h2 className="text-xl font-bold text-[#15803D] mb-3">
                            Amar Farm
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                            Discover fresh, trusted farming products at great prices. Grown with care and delivered straight to your doorstep.
                        </p>
                        <p className="text-xs font-semibold text-gray-500">
                            &copy; {new Date().getFullYear()} Amar Farm. All rights reserved.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold text-[#15803D] uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li>
                                <Link href="/" className="hover:text-[#15803D] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-[#15803D] transition-colors">
                                    Explore Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-[#15803D] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#15803D] transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories / Support */}
                    <div>
                        <h3 className="text-sm font-bold text-[#15803D] uppercase tracking-wider mb-4">
                            Customer Support
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li>
                                <Link href="/faq" className="hover:text-[#15803D] transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="hover:text-[#15803D] transition-colors">
                                    Shipping & Delivery
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-[#15803D] transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-[#15803D] transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Contact */}
                    <div>
                        <h3 className="text-sm font-bold text-[#15803D] uppercase tracking-wider mb-4">
                            Stay Connected
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3">
                            Subscribe to get special offers and fresh arrivals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                            />
                            <Button
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold text-xs h-9 px-4 rounded-md transition-all duration-300"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}