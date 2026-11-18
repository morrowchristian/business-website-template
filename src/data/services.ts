/**
 * Services data.
 * 
 * Used by:
 * - Services page (src/pages/services.astro)
 */
export interface Service {
    title: string;
    description: string;
    href?: string;
}

export const services: Service[] = [
    {
        title: "Web Development",
        description: "Fast, responsive websites built with modern tools — designed to load quickly and work on every device.",
    },
    {
        title: "UI/UX Design",
        description: "Clean, intuitive interfaces that make your business easy to understand and easy to use.",
    },
    {
        title: "E-Commerce",
        description: "Online stores with secure checkout, product pages, and order management built in.",
    },
    {
        title: "SEO & Marketing",
        description: "Get found on search and turn visitors into customers with clear messaging and measurable results.",
    },
    {
        title: "Consulting",
        description: "Practical guidance on what to build, what to skip, and how to get the most from your website.",
    },
    {
        title: "Support & Maintenance",
        description: "Ongoing updates, backups, and fixes so your site stays fast, secure, and up to date.",
    },
];