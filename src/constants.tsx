import Icon from "./components/icon";
import { RaceItem, SideNavItem } from "./types";

const ROOT_PATH: string = "/vegan-trail-challenge/";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: ROOT_PATH,
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Races",
    path: ROOT_PATH + "races",
    icon: <Icon icon="lucide:footprints" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      // { title: "All", path: "/races" },
      { title: "Mini", path: ROOT_PATH + "races/mini" },
      { title: "Half", path: ROOT_PATH + "races/half" },
      { title: "Marathon", path: ROOT_PATH + "races/marathon" },
      { title: "Ultra", path: ROOT_PATH + "races/ultra" },
    ],
  },
  {
    title: "Registration",
    path: ROOT_PATH + "registration",
    icon: <Icon icon="lucide:square-pen" width="24" height="24" />,
  },
  {
    title: "Food",
    path: ROOT_PATH + "food",
    icon: <Icon icon="lucide:pizza" width="24" height="24" />,
  },
  {
    title: "Info",
    path: ROOT_PATH + "info",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Timetable", path: ROOT_PATH + "info/timetable" },
      { title: "Rules", path: ROOT_PATH + "info/rules" },
      { title: "Other Info", path: ROOT_PATH + "info/other-info" },
    ],
  },
  {
    title: "Gallery",
    path: ROOT_PATH + "gallery",
    icon: <Icon icon="lucide:camera" width="24" height="24" />,
  },
  {
    title: "Results",
    path: ROOT_PATH + "results",
    icon: <Icon icon="lucide:trophy" width="24" height="24" />,
  },
  {
    title: "Contact",
    path: ROOT_PATH + "contact",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
];

export const RACE_DETAILS: RaceItem[] = [
  {
    title: "Mini",
    distance: "12",
    ascent: "500",
    colour: "green",
    path: ROOT_PATH + "races/mini",
  },
  {
    title: "Half",
    distance: "21",
    ascent: "1000",
    colour: "purple",
    path: ROOT_PATH + "races/half",
  },
  {
    title: "Marathon",
    distance: "42",
    ascent: "2000",
    colour: "blue",
    path: ROOT_PATH + "races/marathon",
  },
  {
    title: "Ultra",
    distance: "60",
    ascent: "3000",
    colour: "yellow",
    path: ROOT_PATH + "races/ultra",
  },
];
