"use client";

import { useSession } from "@/lib/auth-client";
import { Card, Button } from "@heroui/react";
import { FiUser, FiMail, FiEdit3, FiLogOut } from "react-icons/fi";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  const user = session?.user;

  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Please Login
          </h2>
          <p className="mt-2 text-gray-500">
            Login to view your profile.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-green-50/50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-medium text-green-600">
            MY ACCOUNT
          </p>

          <h1 className="mt-1 text-3xl md:text-4xl font-bold text-gray-800">
            My Profile
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your account information
          </p>
        </div>

        {/* Profile Card */}
        <Card className="p-6 md:p-8 rounded-3xl border border-green-100 shadow-sm bg-white">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <span className="text-4xl font-bold text-green-600">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </span>
            </div>

            {/* User Info */}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-gray-800">
                {user?.name}
              </h2>

              <p className="mt-1 text-gray-500">
                {user?.email}
              </p>

              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                Active Account
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-100" />

          {/* Information */}
          <div className="space-y-4">
            {/* Name */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
              <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                <FiUser className="text-green-600 text-xl" />
              </div>

              <div>
                <p className="text-sm text-gray-400">Full Name</p>
                <p className="font-semibold text-gray-800">
                  {user?.name}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
              <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                <FiMail className="text-green-600 text-xl" />
              </div>

              <div>
                <p className="text-sm text-gray-400">Email Address</p>
                <p className="font-semibold text-gray-800 break-all">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button
              className="bg-green-500 text-white hover:bg-green-600"
              startContent={<FiEdit3 />}
            >
              Edit Profile
            </Button>

            <Button
              variant="bordered"
              className="border-red-200 text-red-500 hover:bg-red-50"
              startContent={<FiLogOut />}
            >
              Logout
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}