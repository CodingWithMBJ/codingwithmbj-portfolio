import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import type { ContactLink } from "../types/contact.types";

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: "Send me an email",
    href: "mailto:YOUR_EMAIL@example.com",
    icon: faEnvelope,
  },
  {
    id: "github",
    label: "GitHub",
    value: "CodingWithMBJ",
    href: "https://github.com/CodingWithMBJ",
    icon: faGithub,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Mohamed Jalloh",
    href: "https://www.linkedin.com/in/abooabdillaahmbj/",
    icon: faLinkedinIn,
    external: true,
  },
  {
    id: "location",
    label: "Location",
    value: "Saint Paul, Minnesota",
    href: "https://www.google.com/maps/search/?api=1&query=Saint+Paul+Minnesota",
    icon: faLocationDot,
    external: true,
  },
];
