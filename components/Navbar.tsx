"use client";
import { NAV_LINKS } from "@/constants";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [section, setSection] = useState("hero");
  const [navBgColor, setNavBgColor] = useState("blue");
  const [theme, setTheme] = useState("light");

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

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full z-[100] ${
        navBgColor === "white" ? "bg-white" : `bg-${navBgColor}`
      } ${section === "experience" ? "dark:bg-transparent" : "dark:bg-dark1"}`}
      id="nav"
    >
      {({ open }) => (
        <div>
          <div className="relative flex h-16 items-center justify-between mx-auto container px-6 lg:px-4">
            {/* Mobile menu button*/}

            <div className="absolute right-6 flex gap-4 items-center sm:hidden">
              <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />

              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-secondary">
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
                      ? "bg-gray text-white dark:text-blue"
                      : "text-black hover:bg-gray hover:text-white dark:text-secondary dark:hover:text-blue",
                    "rounded-md px-3 py-2 transition duration-200"
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
                          ? "bg-gray text-white dark:text-blue"
                          : "text-black hover:bg-gray hover:text-white dark:text-secondary dark:hover:text-blue",
                        "rounded-md px-3 py-2 text-sm font-medium transition duration-200"
                      )}
                      aria-current={section === link.key ? "page" : undefined}
                    >
                      <p className="text-lg uppercase">{link.label}</p>
                    </Link>
                  ))}
                  <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-6 lg:px-2 pb-3 pt-2">
              {NAV_LINKS.map((link) => (
                <Disclosure.Button
                  key={link.key}
                  as="a"
                  href={link.href}
                  className={classNames(
                    section === link.key
                      ? "bg-gray text-white dark:text-blue"
                      : "text-black hover:bg-gray hover:text-white dark:text-secondary",
                    "block rounded-md px-3 py-2 text-base font-medium transition duration-200"
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
