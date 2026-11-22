/**
 * Global navigation configuration.
 *
 * Used by:
 * - Header
 * - Footer
 */
export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Components", href: "/components" },
  { label: "Guides", href: "/guides" }
];
