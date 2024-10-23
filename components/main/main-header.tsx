"use client";

import { Logo, Toggle } from "@/components/navigations/core";
import { DesktopNav } from "@/components/navigations/desktop";
import { MobileMenuButton, MobileNav } from "@/components/navigations/mobile";
import menus from "@/config/menu";
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";
import React from "react";
import { Fragment } from "react";

const MainHeader = () => {
  const currentPath = usePathname();

  return (
    <div className="border-y-1 sticky top-0 z-50 border-black/5 bg-gray-50 shadow-sm shadow-gray-300 dark:border-white/10 dark:bg-slate-800 dark:shadow-slate-900/60">
      <Disclosure>
        {({ open }) => (
          <>
            <nav className="relative flex h-16 items-center justify-between px-10">
              <div className="flex flex-1 justify-start pl-2">
                <Logo />
              </div>
              <div>
                <div className="hidden gap-x-6 sm:flex sm:flex-1">
                  <DesktopNav menus={menus} phoneNumber={"+61 402216671"} />
              </div>
              </div>
                <div className="flex flex-1 justify-end pr-2 md:hidden">
                <MobileMenuButton open={open} />
              </div>
            </nav>
            <MobileNav fragment={Fragment} menus={menus} />
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MainHeader;
