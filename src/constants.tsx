import Icon from "./components/icon";
import { RaceItem, SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Races",
    path: "/races",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      // { title: "All", path: "/races" },
      { title: "Mini", path: "/races/mini" },
      { title: "Half", path: "/races/half" },
      { title: "Marathon", path: "/races/marathon" },
      { title: "Ultra", path: "/races/ultra" },
    ],
  },
  {
    title: "Registration",
    path: "/registration",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "Info",
    path: "/info",
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Timetable", path: "/info/timetable" },
      { title: "Rules", path: "/info/rules" },
      { title: "Other Info", path: "/info/other-info" },
    ],
  },
  {
    title: "Gallery",
    path: "/gallery",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
  {
    title: "Results",
    path: "/results",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];

export const RACE_DETAILS: RaceItem[] = [
  { title: "mini", distance: "12", ascent: "500", photo: "/photo-mini.png" },
  { title: "half", distance: "21", ascent: "1000", photo: "/photo-half.png" },
  {
    title: "marathon",
    distance: "42",
    ascent: "2000",
    photo: "/photo-marathon.png",
  },
  { title: "ultra", distance: "60", ascent: "3000", photo: "/photo-ultra.png" },
];
