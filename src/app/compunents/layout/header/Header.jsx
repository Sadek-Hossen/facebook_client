"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => pathname === path;

  return (
    <header className="p-4 shadow">
      {/* Mobile header */}
      <div className="flex justify-between items-center lg:hidden">
        <h1 className="font-bold text-[#0866FF]">Facebook</h1>
        <div className="flex gap-4">
          <SearchIcon />
          <button onClick={toggleMenu}>
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Desktop header */}
      <div className="container flex justify-between h-16 mx-auto items-center">
        <div className="hidden lg:flex">
          <Link href="/">
            <img
              className="rounded-full w-[30%]"
              src="/img/facebook.png"
              alt="facebook logo"
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="items-stretch space-x-3 flex mx-auto">
          <li>
            <Link
              href="/"
              className={`flex items-center  px-4 -mb-1 transition-all ${
                isActive("/") ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <HomeIcon className="/ " />
            </Link>
          </li>
          <li>
            <Link
              href="/aboutMe"
              className={`flex items-center px-4 -mb-1 transition-all ${
                isActive("/aboutMe") ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <PeopleIcon />
            </Link>
          </li>
          <li>
            <Link
              href="/messages"
              className={`flex items-center px-4 -mb-1 transition-all ${
                isActive("/messages") ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <MapsUgcIcon />
            </Link>
          </li>
          <li>
            <Link
              href="/videos"
              className={`flex items-center px-4 -mb-1 transition-all ${
                isActive("/videos") ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <SmartDisplayIcon />
            </Link>
          </li>
          <li>
            <Link
              href="/notifications"
              className={`flex items-center px-4 -mb-1 transition-all ${
                isActive("/notifications") ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <CircleNotificationsIcon />
            </Link>
          </li>
        </ul>

        {/* Desktop Sign In */}
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <Link href="/signUp">
            <button className="px-8 py-3 hover:opacity-70 transition-all cursor-pointer font-semibold rounded bg-violet-600 text-gray-50">
              Sign In
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        {/* <button onClick={toggleMenu} className="p-4 lg:hidden focus:outline-none">
          <MenuIcon className="w-6 h-6 text-gray-800" />
        </button> */}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex flex-col lg:hidden space-y-2 mt-4">
          <li>
            <Link href="/" className="block px-4 py-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/aboutMe" className="block px-4 py-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/signUp" className="block px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50 hover:opacity-70 transition-all cursor-pointer ">
              Sign In
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
