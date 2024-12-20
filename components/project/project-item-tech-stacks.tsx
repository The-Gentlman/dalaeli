import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

interface ProjectItemTechStacksProps {
  techStacks: {
    title: string;
    stacks: string[];
  }[];
}

const ProjectItemTechStacks: FC<ProjectItemTechStacksProps> = ({ techStacks }) => {
  return (
    <div className="relative p-3">
      <div className="relative mt-6 flex flex-col gap-4 rounded-xl border border-dashed border-slate-500/50 p-4 sm:mx-0 ">
        <div className="text-normal absolute left-2.5 top-0 -translate-y-1/2 bg-white px-2 font-normal text-slate-500 dark:bg-slate-800">
          Interduce
        </div>

        {techStacks.map((techStack) => (
          <div key={uuidv4()} className="flex flex-col gap-1.5">
            <p className="text-lg font-semibold leading-6 text-slate-800 dark:text-slate-200 text-left">
              {techStack.title}:
            </p>
            <dd className="text-medium text-slate-600 dark:text-slate-400 sm:text-sm text-left ml-2">
              {techStack.stacks.map((stack) => (
                <div
                  key={uuidv4()}
                  dangerouslySetInnerHTML={{ __html: stack }}
                />
              ))}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectItemTechStacks;
