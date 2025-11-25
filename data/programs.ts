type Program = {
  title: string;
  description: string;
  href: string;
  image: string; // add image field
};

export const programs: Program[] = [
  {
    title: "Finance",
    description:
      "Master corporate finance, investment analysis, and risk management for high-impact roles in banking and consulting.",
    href: "#contact",
    image: "/images/programs/finance.jpg",
  },
  {
    title: "Marketing",
    description:
      "Learn brand strategy, consumer insights, and digital growth to drive measurable market results.",
    href: "#contact",
    image: "/images/programs/marketing.jpg",
  },
  {
    title: "Human Resources",
    description:
      "Develop expertise in talent strategy, org development, and HR analytics to lead people-first organizations.",
    href: "#contact",
    image: "/images/programs/hr.jpg",
  },
  {
    title: "Operations",
    description:
      "Optimize systems with supply chain, lean management, and analytics to scale efficient businesses.",
    href: "#contact",
    image: "/images/programs/operations.jpg",
  },
  {
    title: "Business Analytics",
    description:
      "Blend business acumen with data science to make evidence-based leadership decisions.",
    href: "#contact",
    image: "/images/programs/analytics.jpg",
  },
  {
    title: "Entrepreneurship",
    description:
      "Build and scale ventures with practical frameworks, fundraising, and go-to-market strategies.",
    href: "#contact",
    image: "/images/programs/entrepreneurship.jpg",
  },
];
