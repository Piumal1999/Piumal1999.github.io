"use client";

import { useState } from "react";
import socialLinks from "../../../data/social";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#" },
    { name: "Blog", href: "https://piumal1999.medium.com/" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4">
      <div className="flex flex-1 items-center justify-end lg:justify-between">
        <nav aria-label="Global" className="hidden lg:block">
          <ul className="flex items-center gap-10 text-sm">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  className="transition text-white hover:text-white/75"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="items-center gap-4">
          <div className="gap-4 hidden lg:flex">
            {socialLinks.map((link, index) => (
              <a
                className="text-white transition hover:text-white/75"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox={link.viewBox}
                >
                  {link.svgPath}
                </svg>
              </a>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              className="block rounded p-2.5 transition bg-gray-800 text-white hover:text-white/75"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          aria-label="Global"
          className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg"
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  className="font-semibold transition text-white hover:text-white/75"
                  href={item.href}
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  className=" transition text-white hover:text-white/75"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox={link.viewBox}
                  >
                    {link.svgPath}
                  </svg>
                </a>
              ))}
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
