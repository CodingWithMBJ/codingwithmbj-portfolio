import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressCard,
  faCircleUser,
  faCode,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export type NavigationId = "home" | "about" | "portfolio" | "contact";

export type NavigationItem = {
  id: NavigationId;
  name: string;
  section?: string;
  path?: string;
  icon: IconDefinition;
};
export const navigation: NavigationItem[] = [
  { id: "home", name: "Home", section: "hero", icon: faHouse },
  { id: "about", name: "About", section: "about", icon: faCircleUser },
  { id: "portfolio", name: "Portfolio", section: "portfolio", icon: faCode },
  { id: "contact", name: "Contact", section: "contact", icon: faAddressCard },
];
