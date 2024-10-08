import { cn } from "@/lib/utils";
import { MenuType } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import { v4 } from "uuid";
import { motion, AnimatePresence } from 'framer-motion';
import React from "react";

const Popup = ({ phoneNumber, onClose, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg p-5 shadow-lg max-w-xs w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-lg mb-2 text-center">Call Me</h2>
            <p className="text-center">
              <a href={`tel:${phoneNumber}`} className="text-blue-600 underline">
                {phoneNumber}
              </a>
            </p>
            <motion.button
              onClick={onClose}
              className="mt-4 block w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


interface DesktopNavProps {
  menus: MenuType[];
  phoneNumber: string;
}

const DesktopNav: FC<DesktopNavProps> = ({ menus, phoneNumber }) => {
  const currentPath = usePathname();
  let path;
  if (currentPath.split("/").length > 1) {
    path = `/${currentPath.split("/")[1]}`;
  } else {
    path = currentPath;
  }

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="hidden gap-x-6 md:flex items-center">
        {menus.map(({ url, title }) => (
          <Link
            href={url}
            key={v4()}
            className={cn(
              "relative inline-flex items-center rounded-full px-4 py-1 text-base font-medium text-gray-600 ring-1 ring-transparent transition duration-200 active:scale-[96%] active:ring-black/20 dark:text-slate-400 dark:active:ring-white/20",
              {
                "bg-gradient-to-t from-gray-100 via-gray-50 to-gray-50 px-4 shadow-md shadow-black/5 ring-1 ring-black/10 dark:bg-gradient-to-t dark:from-slate-700 dark:via-slate-700 dark:to-slate-800 dark:ring-white/10":
                  path === url,
              },
              {
                "hover:dark:ring-white/1 bg-transparent ring-transparent hover:bg-gradient-to-tr hover:from-gray-200 hover:via-gray-100 hover:to-gray-50 hover:shadow-md hover:shadow-black/5 hover:ring-1 hover:ring-black/10 hover:dark:bg-gradient-to-tl hover:dark:from-slate-700 hover:dark:via-slate-700 hover:dark:to-slate-800":
                  path !== url,
              },
            )}
          >
            <div className="relative">{title}</div>
          </Link>
        ))}
        <img
          src="/favicons/call-now.png"
          className="ml-2 cursor-pointer h-9 w-9 transition-transform transform hover:scale-110"
          onClick={() => setIsPopupOpen(true)}
          alt="Call Icon"
        />
      </div>

      {isPopupOpen && (
        <Popup
          phoneNumber={phoneNumber || "+61 402216671"}
          onClose={() => setIsPopupOpen(false)}
          isVisible={isPopupOpen}
        />
      )}
    </>
  );
};

export default DesktopNav;
