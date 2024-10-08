"use client";

import { DesktopBottomNav } from "@/components/navigations/desktop";
import footer from "@/config/footer";
import { usePathname } from "next/navigation";
import React from "react";

const MainFooter = () => {
  const currentPath = usePathname();

  return (
    <footer className="mt-auto bottom-0 z-40 border-y-[1.2px] border-slate-300 bg-gray-50 shadow-t-sm dark:border-slate-600/50 dark:bg-slate-800 dark:shadow-slate-900">
      <nav className="mx-auto hidden max-w-5xl items-center justify-between md:flex">
        <DesktopBottomNav footer={footer} />
      </nav>
    </footer>
  );
};

export default MainFooter;
