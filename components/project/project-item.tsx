import { formatDate } from "@/lib/utils";
import { ProjectItemType } from "@/types";
import { FC } from "react";
import { v4 } from "uuid";
import ProjectItemBrowser from "./project-item-browser";
import ProjectItemContainer from "./project-item-container";
import ProjectItemDate from "./project-item-date";
import ProjectItemHeader from "./project-item-header";
import ProjectItemScreenShot from "./project-item-screenshot";
import ProjectItemTechStacks from "./project-item-tech-stacks";
import ProjectItemVerticalLine from "./project-item-vertical-line";

interface ProjectItemProps {
  project: ProjectItemType;
  isLastItem: boolean;
}

const ProjectItem: FC<ProjectItemProps> = ({ project, isLastItem }) => {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        {/* Body */}
        <ProjectItemVerticalLine />
        <ProjectItemBrowser key={v4()}>
          <ProjectItemContainer>
            <div className="overflow-hidden">
              <ProjectItemHeader
                title={project.title}
                type={project.type}
                keywords={project?.keywords ? project?.keywords : []}
                iconUrl={project.iconUrl ? project.iconUrl : ""}
                iconDescription={
                  project.iconDescription ? project.iconDescription : ""
                }
              />
              <ProjectItemTechStacks techStacks={project.techStacks} />
            </div>
        <div className="flex flex-col items-center justify-center space-y-8 bg-[#0e2c47] p-6 rounded-lg shadow-md md:space-y-12">
          {/* First Item - Clock Icon (same as before) */}
          <div className="flex flex-col items-center text-center space-y-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white group-hover:scale-125 transition-transform duration-300 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-white text-sm md:text-base max-w-xs">
              Technician arrives at your home or business within 24 hours
            </p>
        </div>

      {/* Second Item - New Router Icon */}
      <div className="flex flex-col items-center text-center space-y-2 group">
        <svg width="80px" height="80px" viewBox="0 0 1024.00 1024.00" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.01024"
        className="h-10 w-10 text-white group-hover:scale-125 transition-transform duration-300 ease-in-out"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M569.2 304c1-60-20.8-120.4-65.5-166.2 0 0-18.4-9.8-18.4 18.8 0 3.8 18.4 25.1 18.4 25.1 20.9 29.3 33.1 63.2 36.6 97.7h-1c1.1 8.1 1.8 16.3 2 24.6-0.2 8.2-0.8 16.4-2 24.6h1c-3.4 34.6-15.6 68.4-36.6 97.7 0 0-18.4 21.3-18.4 25.1 0 28.7 18.4 18.8 18.4 18.8 44.7-45.8 66.5-106.2 65.5-166.2z" fill="#000000"></path>
            <path d="M456.8 399.2c-3.8 5.2-7.9 10.3-12.4 15.1 0 0-14.5 9.1-15-15.9-0.2-12.7 15-33.5 15-33.5 6-12 9.9-24.9 11.8-38.1h-1.9c1.7-7.5 2.7-15.1 3-22.8-0.3-7.7-1.3-15.3-3-22.8h1.9c-1.8-13.2-5.8-26.1-11.8-38.1 0 0-15.2-20.7-15-33.5 0.5-25 15-15.9 15-15.9 4.5 4.8 8.7 9.8 12.4 15.1 20.1 27.9 29.6 61.7 28.4 95.2 1.1 33.5-8.4 67.2-28.4 95.2zM121.7 304c-1-60 20.8-120.4 65.5-166.2 0 0 18.4-9.8 18.4 18.8 0 3.8-18.4 25.1-18.4 25.1-20.9 29.3-33.1 63.2-36.6 97.7h1c-1.1 8.1-1.8 16.3-2 24.6 0.2 8.2 0.8 16.4 2 24.6h-1c3.4 34.6 15.6 68.4 36.6 97.7 0 0 18.4 21.3 18.4 25.1 0 28.7-18.4 18.8-18.4 18.8-44.7-45.8-66.5-106.2-65.5-166.2z" fill="#000000"></path>
            <path d="M234.1 399.2c3.8 5.2 7.9 10.3 12.4 15.1 0 0 14.5 9.1 15-15.9 0.2-12.7-15-33.5-15-33.5-6-12-9.9-24.9-11.8-38.1h1.9c-1.7-7.5-2.7-15.1-3-22.8 0.3-7.7 1.3-15.3 3-22.8h-1.9c1.8-13.2 5.8-26.1 11.8-38.1 0 0 15.2-20.7 15-33.5-0.5-25-15-15.9-15-15.9-4.5 4.8-8.7 9.8-12.4 15.1-20.1 27.9-29.6 61.7-28.4 95.2-1.1 33.5 8.4 67.2 28.4 95.2z" fill="#000000"></path>
            <path d="M393.3 555.7c3.1-7.1 4.5-15.2 3.8-23.7l-21.3-255.9c-1.3-15.3-14.9-28-30.3-28-15.6 0-29 12.6-30.3 28L293.9 532c-0.7 8.6 0.7 16.6 3.8 23.7h-120c-62 0-112 50.1-112 111.9v83.9c0 61.8 50.1 111.9 112 111.9h671.1c62 0 112-50.1 112-111.9v-83.8c0-61.8-50.1-111.9-112-111.9l-455.5-0.1z" fill="#000000"></path>
            <path d="M121.6 669.7v83.8c0 30.9 25.1 56 56.1 56h671.1c31 0 56.1-25 56.1-56v-83.8c0-30.9-25.1-56-56.1-56H177.6c-31 0-56 25-56 56z" fill="#FFFFFF"></path>
            <path d="M653.1 709.6c0-7.7 6-14 14.1-14h27.7c7.8 0 14.1 6.5 14.1 14 0 7.7-6 14-14.1 14h-27.7c-7.8 0-14.1-6.5-14.1-14zM541.2 709.6c0-7.7 6-14 14.1-14H583c7.8 0 14.1 6.5 14.1 14 0 7.7-6 14-14.1 14h-27.7c-7.7 0-14.1-6.5-14.1-14zM429.4 709.6c0-7.7 6-14 14.1-14h27.7c7.8 0 14.1 6.5 14.1 14 0 7.7-6 14-14.1 14h-27.7c-7.8 0-14.1-6.5-14.1-14zM317.5 709.6c0-7.7 6-14 14.1-14h27.7c7.8 0 14.1 6.5 14.1 14 0 7.7-6 14-14.1 14h-27.7c-7.8 0-14.1-6.5-14.1-14zM765 709.6c0-23.2 18.6-42 42-42 23.2 0 42 18.6 42 42 0 23.2-18.6 42-42 42-23.2-0.1-42-18.7-42-42zM219.6 667.6c23.2 0 42 18.6 42 42 0 23.2-18.6 42-42 42-23.2 0-42-18.6-42-42 0-23.2 18.6-42 42-42z" fill="#000000"></path>
            <path d="M219.6 723.6c7.7 0 14-6.3 14-14s-6.3-14-14-14-14 6.3-14 14 6.3 14 14 14zM807 723.6c7.7 0 14-6.3 14-14s-6.3-14-14-14-14 6.3-14 14 6.2 14 14 14z" fill="#FFFFFF"></path>
          </g>
        </svg>
        <p className="text-white text-sm md:text-base max-w-xs">
          Diagnose, fix or perform installation of internet, data, or telecommunication services
        </p>
      </div>
      {/* Third Item - New Customer Icon */}
      <div className="flex flex-col items-center text-center space-y-2 group">
        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="-10 -10 120.00 120.00" enable-background="new 0 0 100 100"  stroke="#000000" stroke-width="0.6" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
        className="h-10 w-10 text-white group-hover:scale-125 transition-transform duration-300 ease-in-out"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" stroke-width="0.2"></g>
          <g id="SVGRepo_iconCarrier"> 
            <ellipse cx="41.3" cy="42.3" rx="12.2" ry="13.5"></ellipse> 
            <path d="M52.6,57.4c-3.1,2.8-7,4.5-11.3,4.5c-4.3,0-8.3-1.7-11.3-4.6c-5.5,2.5-11,5.7-11,10.7v2.1c0,2.5,2,4.5,4.5,4.5h35.7c2.5,0,4.5-2,4.5-4.5v-2.1C63.6,63,58.2,59.9,52.6,57.4z"></path> 
            <path d="M68,47.4c-0.2-0.1-0.3-0.2-0.5-0.3c-0.4-0.2-0.9-0.2-1.3,0.1c-2.1,1.3-4.6,2.1-7.2,2.1c-0.3,0-0.7,0-1,0c-0.5,1.3-1,2.6-1.7,3.7c0.4,0.2,0.9,0.3,1.4,0.6c5.7,2.5,9.7,5.6,12.5,9.8H75c2.2,0,4-1.8,4-4v-1.9C79,52.6,73.3,49.6,68,47.4z"></path> 
            <path d="M66.9,34.2c0-4.9-3.6-8.9-7.9-8.9c-2.2,0-4.1,1-5.6,2.5c3.5,3.6,5.7,8.7,5.7,14.4c0,0.3,0,0.5,0,0.8C63.4,43,66.9,39.1,66.9,34.2z"></path> 
          </g>
        </svg>
        <p className="text-white text-sm md:text-base max-w-xs">
          We guarantee competitive prices and complete transparency with our customers
        </p>
      </div>
    </div>
          </ProjectItemContainer>
        </ProjectItemBrowser>
      </div>
      {!isLastItem && <ProjectItemVerticalLine />}
    </>
  );
};

export default ProjectItem;
