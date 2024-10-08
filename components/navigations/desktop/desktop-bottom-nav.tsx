import { FC } from "react";
import { FooterType } from "types";

interface DesktopBottomNavProps {
  footer: FooterType;
}
const DesktopBottomNav: FC<DesktopBottomNavProps> = ({ footer }) => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-2 py-7 flex justify-center items-center">
        <p className="text-center text-base text-slate-500 dark:text-slate-400">
          &copy; {footer.copyright}
        </p>
      </div>
    </>
  );
};


export default DesktopBottomNav;
