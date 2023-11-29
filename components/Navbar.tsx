"use client";
import { useState } from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [section, setSection] = useState("hero");
  return (
    <>
      <nav className="fixed w-full z-[100] bg-blue">
        <div className="relative flex h-16 flex-wrap items-center justify-between mx-auto container px-2 lg:px-4">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <div className="flex flex-shrink-0 items-center text-3xl">
                <Link
                  className="rounded-md px-3 py-2 transition duration-200 text-black dark:text-secondary hover:bg-gray hover:text-secondary dark:hover:text-blue"
                  href="#hero"
                >
                  Tariq Hirji
                </Link>
              </div>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <MdMenu className="block h-6 w-6" />
              </button>
            </div>

            <div
              className={
                "lg:flex flex-grow bg-blue items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
            >
              <div className="flex flex-col lg:flex-row lg:ml-auto gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    className={
                      "rounded-md px-3 py-2 text-sm font-medium transition duration-200" +
                      (section === link.key
                        ? "bg-gray text-secondary dark:text-blue"
                        : "text-black dark:text-secondary hover:bg-gray hover:text-secondary dark:hover:text-blue")
                    }
                  >
                    <p className="text-lg uppercase">{link.label}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
