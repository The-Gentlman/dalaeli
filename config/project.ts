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
          '<a href="/isp" className="text-blue-500">Click to See our Isp List</a>'
        ],
      },
    ],
  },
];

export default projectPageConfig;