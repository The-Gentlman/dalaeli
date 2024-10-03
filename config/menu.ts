import {
  UserCircleIcon as AboutIcon,
  Squares2X2Icon as BlogIcon,
  PaperAirplaneIcon as ContactIcon,
  BoltIcon as HomeIcon,
} from "@heroicons/react/24/outline";
import { MenuType } from "types";

const menuConfig: MenuType[] = [
  {
    title: "Home",
    url: "/",
    idx: 1,
    icon: HomeIcon,
  },
  {
    title: "About Us",
    url: "/about",
    idx: 2,
    icon: AboutIcon,
  },
  {
    title: "Our Services",
    url: "/blog",
    idx: 3,
    icon: BlogIcon,
  },
  {
    title: "Contact US",
    url: "/contact",
    idx: 4,
    icon: ContactIcon,
  },
];

export default menuConfig;
