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
  { label: "Components", href: "/components" }
];
