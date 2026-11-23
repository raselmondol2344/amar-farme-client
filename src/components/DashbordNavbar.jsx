"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";

export default function DashbordNavbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-3 shadow-sm sm:h-18 sm:px-5 md:h-20 md:px-6">

      {/* Left Side */}
      <div className="flex items-center gap-3 pl-12 md:pl-0">
        <h1 className="text-lg font-semibold text-gray-800 sm:text-xl">
          Dashboard
        </h1>
      </div>

      {/* Right Side */}
      {user && (
        <div className="flex items-center">

          <Dropdown>
            <Dropdown.Trigger className="cursor-pointer rounded-full outline-none">
              <Avatar className="h-9 w-9 sm:h-10 sm:w-10">
                <Avatar.Image
                  alt={user?.name || "User"}
                  src={user?.image}
                />

                <Avatar.Fallback>
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </Avatar.Fallback>
              </Avatar>
            </Dropdown.Trigger>

            <Dropdown.Popover className="w-[280px] max-w-[calc(100vw-24px)]">
              
              {/* User Information */}
              <div className="px-3 pb-2 pt-3">
                <div className="flex items-center gap-2.5">
                  <Avatar size="sm">
                    <Avatar.Image
                      alt={user?.name || "User"}
                      src={user?.image}
                    />

                    <Avatar.Fallback>
                      {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </Avatar.Fallback>
                  </Avatar>

                  <div className="flex min-w-0 flex-col">
                    <p className="truncate text-sm font-medium">
                      {user?.name}
                    </p>

                    <p className="truncate text-xs text-muted">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dropdown Menu */}
              <Dropdown.Menu
                onAction={(key) => console.log(`Selected: ${key}`)}
              >
                <Dropdown.Item
                  id="dashboard"
                  textValue="Dashboard"
                >
                  <Link
                    className="flex w-full items-center gap-2"
                    href={`/dashbord/${user?.role}`}
                  >
                    <MdDashboard />
                    <Label>Dashboard</Label>
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item
                  id="profile"
                  textValue="Profile"
                >
                  <div className="flex items-center gap-2">
                    <CgProfile />
                    <Label>Profile</Label>
                  </div>
                </Dropdown.Item>

                <Dropdown.Item
                  id="logout"
                  textValue="Logout"
                  variant="danger"
                  onClick={handleSignOut}
                >
                  <div className="flex items-center gap-2">
                    <BiLogOut />
                    <Label>Logout</Label>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>
      )}
    </header>
  );
}
