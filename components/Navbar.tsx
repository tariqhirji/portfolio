"use client";
import { NAV_LINKS } from "@/constants";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#6C63FF] fixed w-full" id="nav">
      {({ open }) => (
        <div>
          <div className="relative flex h-16 items-center justify-between mx-auto container px-3">
            {/* Mobile menu button*/}
            <div className="absolute right-0 flex items-center sm:hidden">
              <Disclosure.Button className="relative inline-flex items-center mx-3 justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
              <div className="flex flex-shrink-0 items-center">
                <Link href="/#hero" className="text-black text-3xl">
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
                        link.active
                          ? "bg-gray-900 text-white"
                          : "text-black hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={link.active ? "page" : undefined}
                    >
                      <p className="text-lg uppercase">{link.label}</p>
                    </Link>
                  ))}
                </div>
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
                    link.active
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={link.active ? "page" : undefined}
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