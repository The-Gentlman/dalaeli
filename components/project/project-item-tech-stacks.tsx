import { ProjectItemTechStack } from "@/types";
import { FC } from "react";
import { v4 } from "uuid";

interface ProjectItemTechStacksProps {
  techStacks: ProjectItemTechStack[];
}

const ProjectItemTechStacks: FC<ProjectItemTechStacksProps> = ({
  techStacks,
}) => {
  return (
    <>
      <div className="relative p-3">
        <div className="relative mt-6  gap-4 rounded-xl border border-dashed border-slate-500/50 p-4 sm:mx-0">
          <div className="text-normal absolute left-2.5 top-0 -translate-y-1/2 bg-white px-2 font-normal text-slate-500 dark:bg-slate-800">
            Introduce
          </div>

          {techStacks.map((techStack) => (
            <div key={v4()} className="block mb-3 my-2">
              <p className="flex text-medium font-semibold leading-6 text-slate-800 dark:text-slate-200">
                {techStack.title}
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: techStack.stacks.join(' ') }}
                className="text-small text-justify text-slate-600 dark:text-slate-400 ml-2"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectItemTechStacks;
