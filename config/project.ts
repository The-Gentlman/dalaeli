import { ProjectItemType } from "@/types";

const projectPageConfig: ProjectItemType[] = [
  {
    title: "",
    iconUrl: "/images/authors/logo.png",
    iconDescription: "Connected Radios",
    screenShotUrl: "/images/projects/ourjob.jpg",
    screenShotDescription: "Radio",
    type: "Radio",
    keywords: ["Your Trusted Telecom Partner"],
    techStacks: [
      {
        title: "Maintenance, Router, Server",
        stacks: [
          "We provide expert maintenance and support for routers and servers, ensuring your systems run smoothly."
        ],
      },
      {
        title: "Reliability and Innovation",
        stacks: [
          "Connecting homes and businesses with dependable telecommunication solutions for over 15 years."
        ],
      },
      {
        title: "ISP List",
        stacks: [
          "<a href='/isp' class='text-blue-500 font-bold underline hover:text-blue-600'>Click To See ISP List</a>",
        ],
      },
    ],
  },
];

export default projectPageConfig;
