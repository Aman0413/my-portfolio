"use client";
import Link from "next/link";

import React from "react";

function Navbar() {
  const location = "";

  return (
    <div className=" hidden md:flex justify-end ">
      <div className="navbar bg-[#383839] px-5 py-3 rounded-bl-2xl rounded-tr-2xl w-[60%]">
        <ul className="flex items-center justify-around text-base font-medium p-2">
          <Link
            href="/"
            className={`${location === "/" ? "text-yellow-primary" : ""}`}
          >
            <li className="hover:text-text-secondary transition-all ease-in-out duration-200">
              About
            </li>
          </Link>
          <Link
            href={"/resume"}
            className={`${location === "/resume" ? "text-yellow-primary" : ""}`}
          >
            <li className="hover:text-text-secondary transition-all ease-in-out duration-200">
              Resume
            </li>
          </Link>
          <Link
            href={"/portfolio"}
            className={`${
              location === "/portfolio" ? "text-yellow-primary" : ""
            }`}
          >
            <li className="hover:text-text-secondary transition-all ease-in-out duration-200">
              Portfolio
            </li>
          </Link>
          <Link
            href={"/contact"}
            className={`${
              location === "/contact" ? "text-yellow-primary" : ""
            }`}
          >
            <li className="hover:text-text-secondary transition-all ease-in-out duration-200">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
