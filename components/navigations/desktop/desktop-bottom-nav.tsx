import { FC } from "react";
import { FooterType } from "types";

interface DesktopBottomNavProps {
  footer: FooterType;
}
const DesktopBottomNav: FC<DesktopBottomNavProps> = ({ footer }) => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-2 pt-7 relative flex justify-center items-center bottom-0 flex-col">
        <p className="text-center text-base text-slate-500 dark:text-slate-400">
            © 2023-{new Date().getFullYear()} IQTEL All rights reserved. ABN: 63168369980
        </p>
        <small className="text-center text-xs text-slate-500  opacity-[.2] pb-1">Mohammad Ali Foroozani</small>
      </div>
    </>
  );
};


export default DesktopBottomNav;

