export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type RaceItem = {
  title: string;
  distance: string;
  ascent: string;
  colour: string;
};
