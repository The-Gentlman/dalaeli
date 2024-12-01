import { ProjectItemType } from "@/types";

const projectPageConfig: ProjectItemType[] = [
  {
    id:1,
    title: "Radio",
    iconUrl: "/images/authors/logo.png",
    iconDescription: "Connected Radios",
    screenShotUrl: "/images/projects/ourjob.jpg",
    screenShotDescription: "Radio",
    type: "Radio",
    keywords: ["Repairs", "Analysis", "Installation"],
    techStacks: [
      {
        title: "Services",
        stacks: ["Maintenance", "router", "Server"],
      },
      {
        title: "Sulgon",
        stacks: [
          "iQTEL – Connecting You with Reliability, Expertise, and Innovation."
        ],
      },
      {
        title: "Isp List",
        stacks: [
          "Click to See our Isp List (Temproary disable)"
        ],
      },
    ],
  },
];

export default projectPageConfig;
