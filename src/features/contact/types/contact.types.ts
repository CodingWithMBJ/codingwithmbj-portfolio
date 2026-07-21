import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: IconDefinition;
  external?: boolean;
}
