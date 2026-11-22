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
  { label: "Components", href: "/components" },
  { label: "Examples", href: "/examples" },
  { label: "Guides", href: "/guides" }
];
