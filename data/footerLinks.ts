// data/footerLinks.ts
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

export const footerLinks: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Placements", href: "/placement" },
  // { label: "Enrichment", href: "/enrichment" },
];

export const quickLinks = [
  { label: "Admissions", href: "/program?tab=admission" },
  { label: "Courses", href: "/#programs" },
  { label: "Faculty", href: "/faculty" },
  { label: "Contact", href: "/contact" },
];

export const alumniFacilities = [
  { label: "Computing Facility", href: "/facilities?tab=computingfacilities" },
  { label: "Blackboard", href: "/facilities?tab=blackboard" },
  { label: "Sports", href: "/facilities?tab=sports" },
  { label: "Hostel", href: "/facilities?tab=hostel" },
  { label: "Music Club", href: "/facilities?tab=musicclub" },
  { label: "Library", href: "/facilities?tab=library" },
];

export const rankings = [
  { label: "Ranking 2026", href: "/ranking?tab=rank2026" },
  { label: "Ranking 2025", href: "/ranking?tab=rank2025" },
  { label: "Ranking 2024", href: "/ranking?tab=rank2024" },
  { label: "Ranking 2023", href: "/ranking?tab=rank2023" },
  { label: "Ranking 2020", href: "/ranking?tab=rank2020" },
  { label: "Ranking 2019", href: "/ranking?tab=rank2019" },
  { label: "Ranking 2017", href: "/ranking?tab=rank2017" },
  { label: "Ranking 2016", href: "/ranking?tab=rank2016" },
  { label: "Ranking 2015", href: "/ranking?tab=rank2015" },
  { label: "Ranking 2014", href: "/ranking?tab=rank2014" },
  { label: "Ranking 2013", href: "/ranking?tab=rank2013" },
];

export const socialIcons = [
  { icon: FaFacebook, href: "https://www.facebook.com/sonamanagement", color: "#1877F2" },
  { icon: FaInstagram, href: "https://www.instagram.com/sona_mba/?hl=en", color: "#E4405F" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/school/sona-school-of-management/", color: "#0077B5" },
  { icon: FaTwitter, href: "https://x.com/sonamba", color: "#1DA1F2" },
  { icon: FaYoutube, href: "https://www.youtube.com/c/SonaSchoolofManagement", color: "#FF0000" },
];
