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
    icon: <Icon icon="lucide:footprints" width="24" height="24" />,
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
    icon: <Icon icon="lucide:square-pen" width="24" height="24" />,
  },
  {
    title: "Food",
    path: "/food",
    icon: <Icon icon="lucide:pizza" width="24" height="24" />,
  },
  {
    title: "Info",
    path: "/info",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
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
    icon: <Icon icon="lucide:camera" width="24" height="24" />,
  },
  {
    title: "Results",
    path: "/results",
    icon: <Icon icon="lucide:trophy" width="24" height="24" />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
];

export const RACE_DETAILS: RaceItem[] = [
  {
    title: "MINI",
    distance: "12",
    ascent: "500",
    colour: "green0",
  },
  { title: "HALF", distance: "21", ascent: "1000", colour: "orange" },
  {
    title: "MARATHON",
    distance: "42",
    ascent: "2000",
    colour: "blue",
  },
  {
    title: "ULTRA",
    distance: "60",
    ascent: "3000",
    colour: "red",
  },
];
