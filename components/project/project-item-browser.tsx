import { FC, ReactNode } from "react";

interface ProjectItemBrowserProps {
  children: ReactNode;
}

const ProjectItemBrowser: FC<ProjectItemBrowserProps> = ({ children }) => {
  return (
    <>
      <div className="relative w-full rounded-2xl bg-white/20 p-2.5 shadow-sm shadow-black/5 ring-[0.8px] ring-black/5 dark:bg-white/5 dark:shadow-white/5 dark:ring-white/10">
        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 opacity-[0.15] blur-lg"></div>
        <div className="relative max-w-full rounded-[0.62rem] shadow-sm shadow-black/5 ring-[0.8px] ring-black/5 dark:shadow-white/5 dark:ring-white/10">
          {/* AddressBar */}
          <div className="rounded-t-xl bg-gray-50 py-2.5 dark:bg-slate-700">
          </div>
          {/* Project body */}
          <div className="relative rounded-b-[0.62rem] border-t border-black/5 bg-white pb-8 dark:border-white/10 dark:bg-slate-800">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItemBrowser;
