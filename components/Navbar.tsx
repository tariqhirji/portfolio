"use client";
import useColorTheme from "@/app/hooks/useColorTheme";
import { NAV_LINKS } from "@/constants";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [section, setSection] = useState("hero");
  const [navBgColor, setNavBgColor] = useState("blue");
  const [colorTheme, setColorTheme] = useColorTheme();

  const changeColor = () => {
    if (window.scrollY > document.getElementById("contact")!.offsetTop - 70) {
      setNavBgColor("secondary");
      setSection("contact");
    } else if (
      window.scrollY >
      document.getElementById("about")!.offsetTop - 70
    ) {
      setNavBgColor("white");
      setSection("about");
    } else if (
      window.scrollY >
      document.getElementById("projects")!.offsetTop - 70
    ) {
      setNavBgColor("white");
      setSection("projects");
    } else if (
      window.scrollY >
      document.getElementById("skills")!.offsetTop - 70
    ) {
      setNavBgColor("secondary");
      setSection("skills");
    } else if (
      window.scrollY >
      document.getElementById("experience")!.offsetTop - 70
    ) {
      setNavBgColor("transparent");
      setSection("experience");
    } else {
      setNavBgColor("blue");
      setSection("hero");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full z-[100] dark:bg-dark1 ${
        navBgColor === "white" ? "bg-white" : `bg-${navBgColor}`
      }`}
      id="nav"
    >
      {({ open }) => (
        <div>
          <div className="relative flex h-16 items-center justify-between mx-auto container px-4">
            {/* Mobile menu button*/}
            <div className="absolute right-0 flex items-center sm:hidden">
              <Disclosure.Button className="relative inline-flex items-center mx-4 justify-center rounded-md p-2 hover:bg-gray hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

            <div className="flex flex-1 items-center justify-between h-full">
              {/* Nav Brand */}
              <div className="flex flex-shrink-0 items-center text-3xl">
                <Link
                  href="/#hero"
                  className={classNames(
                    section === "hero"
                      ? "bg-gray text-white"
                      : "text-black hover:bg-gray hover:text-white",
                    "rounded-md px-3 py-2"
                  )}
                >
                  Tariq Hirji
                </Link>
              </div>

              {/* Nav Links */}
              <div className="hidden sm:block">
                <div className="flex gap-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.key}
                      href={link.href}
                      className={classNames(
                        section === link.key
                          ? "bg-gray text-white"
                          : "text-black hover:bg-gray hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={section === link.key ? "page" : undefined}
                    >
                      <p className="text-lg uppercase">{link.label}</p>
                    </Link>
                  ))}
                </div>
                <button
                  className="dark:text-white text-black bg-sky-500 dark:bg-green-500"
                  onClick={() =>
                    setColorTheme(colorTheme === "light" ? "dark" : "light")
                  }
                >
                  TOGGLE THEME
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {NAV_LINKS.map((link) => (
                <Disclosure.Button
                  key={link.key}
                  as="a"
                  href={link.href}
                  className={classNames(
                    section === link.key
                      ? "bg-gray text-white"
                      : "text-black hover:bg-gray hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={section === link.key ? "page" : undefined}
                >
                  <p className="uppercase">{link.label}</p>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
