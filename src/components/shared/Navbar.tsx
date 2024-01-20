"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const paths = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Tools", path: "/tools" },
    { name: "Games", path: "/games" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    // { name: "Contact Me", path: "/contact" },
    // { name: "About Me", path: "/about" },
    // { name: "Testimonials", path: "/testimonials" },
    // { name: "Resume", path: "/resume" },
    // { name: "FAQ", path: "/faq" },
    // { name: "Terms", path: "/terms" },
    // { name: "Privacy", path: "/privacy" },
    // { name: "404", path: "/404" },
  ];

  const navLinks = paths.map((path) => (
    <li key={path.name}>
      <Link
        href={path.path}
        className={`${pathname === path.path ? "active" : ""}`}
      >
        {path.name}
      </Link>
    </li>
  ));

  return (
    <nav className="fixed top-0 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link href="/" className="text-xl font-bold">
          Shehjad Mobin
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link href="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
