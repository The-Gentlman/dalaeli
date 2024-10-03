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
        <ProjectItemDate year={formatDate(project.date)} />
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
            <ProjectItemScreenShot
              screenshotUrl={project.screenShotUrl ? project.screenShotUrl : ""}
              screenshotDescription={
                project.screenShotDescription
                  ? project.screenShotDescription
                  : ""
              }
              type={project.type}
            />
          </ProjectItemContainer>
        </ProjectItemBrowser>
      </div>
      {!isLastItem && <ProjectItemVerticalLine />}
    </>
  );
};

export default ProjectItem;
