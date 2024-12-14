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
        title: "Works",
        stacks: ["Maintenance", "router", "Server"],
      },
      {
        title: "Repairs",
        stacks: [
          "We provide repairs and maintenance services for your radio."
        ],
      },
      {
        title: "Installation",
        stacks: [
          "We install radio systems for businesses and homes."
        ],
      },
    ],
  },
];

export default projectPageConfig;
