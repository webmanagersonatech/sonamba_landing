"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Fuse from "fuse.js";
import { navItems } from "../data/nav";
import { footerLinks, quickLinks, alumniFacilities, rankings } from "../data/footerLinks";
import { FiMenu, FiX, FiChevronDown, FiSearch } from "react-icons/fi";
import { facultyMembers } from "../data/facultymembers";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const flattenedItems = [
    ...navItems.flatMap((item) =>
      item.submenu
        ? [
          { label: item.label, href: item.href },
          ...item.submenu.map((sub) => ({
            label: `${item.label} → ${sub.label}`,
            href: sub.href,
          })),
        ]
        : [{ label: item.label, href: item.href }]
    ),
    ...footerLinks,
    ...quickLinks,
    ...alumniFacilities,
    ...rankings,
    ...facultyMembers.map((f) => ({
      label: f.name,
      href: "/faculty?tab=facultyinfo", // base href
      type: "faculty",
    })),
  ];

  // Fuse.js setup
  const fuse = new Fuse(flattenedItems, {
    keys: ["label"],
    threshold: 0.3,
  });

  useEffect(() => {
    if (searchQuery.trim()) {
      setSearchResults(fuse.search(searchQuery));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearchSelect = (item: any) => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);

    if (item.type === "faculty") {
      router.push(
        `/faculty?tab=facultyinfo&faculty=${encodeURIComponent(item.label)}`
      );
    } else {
      router.push(item.href as any);
    }
  };


  const socialLinks = [
    { icon: FaFacebook, href: "https://www.facebook.com/sonamanagement", color: "#1877F2" },
    { icon: FaTwitter, href: "https://x.com/sonamba", color: "#1DA1F2" },
    { icon: FaInstagram, href: "https://www.instagram.com/sona_mba/?hl=en", color: "#E4405F" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/school/sona-school-of-management/", color: "#0077B5" },
    { icon: FaYoutube, href: "https://youtube.com", color: "#FF0000" },
  ];

  const headerHeight = scrolled ? 80 : 112;
  const base64String = "/images/about/logo.webp"
  const handleMobileLinkClick = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    <>
      <div className="fixed left-0 right-0 z-50 w-full">
        {/* Topbar */}
        <div className="w-full bg-maroon text-white relative z-50">
          <div className="flex items-center justify-between px-4 sm:px-6 py-2 text-sm">

            {/* Left: Social Icons + NAAC */}
            <div className="flex flex-1 min-w-0 items-center gap-2 overflow-hidden">
              {/* Social Icons */}
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                {socialLinks.map(({ icon: Icon, href, color }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 transition-all p-1.5 sm:p-2 rounded-full hover:bg-transparent hover:scale-110 flex-shrink-0"
                  >
                    <Icon
                      className="text-white transition-colors duration-500 w-3 h-3 sm:w-4 sm:h-4"
                      style={{ color: "white" }}
                    />
                    <style jsx>{`
              a:hover svg {
                color: ${color} !important;
              }
            `}</style>
                  </a>
                ))}
              </div>

              {/* NAAC Badge */}
              <p className="flex sm:hidden items-center text-[8px] font-semibold text-yellow-500 border-b border-yellow-500 px-1 py-0.5 rounded uppercase whitespace-nowrap flex-shrink-0">
                <img
                  src="/images/about/naac-a++.webp"
                  alt="NAAC Logo"
                  className="mr-1 w-4 h-4 object-cover rounded flex-shrink-0"
                  loading="lazy"
                />
                NAAC 'A++'- Grade & NBA Accredited
              </p>

              {/* Desktop / Tablet badges (hidden on mobile) */}
              <p className="hidden sm:inline-flex items-center text-[7px] sm:text-[9px] md:text-[10px] font-semibold text-yellow-500 border-b border-yellow-500 px-1 sm:px-1.5 py-0.5 rounded  whitespace-nowrap flex-shrink-0">
                <img
                  src="/images/about/naac-a++.webp"
                  alt="NAAC Logo"
                  className="mr-1 w-4 h-4 sm:w-5 sm:h-5 object-cover rounded flex-shrink-0"
                  loading="lazy"
                />
                NAAC - Accredited 'A++'- Grade
              </p>

              <span className="hidden sm:inline text-yellow-500 font-semibold">|</span>

              {/* NBA Badge */}
              <p className="hidden sm:inline-flex items-center text-[7px] sm:text-[9px] md:text-[10px] font-semibold text-yellow-500 border-b border-yellow-500 px-1 sm:px-1.5 py-0.5 rounded  whitespace-nowrap flex-shrink-0">
                NBA Accredited
              </p>

            </div>

            {/* Right: Search */}
            <div className="flex-shrink-0 ml-2 relative">
              {!searchOpen ? (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="bg-white/20 hover:bg-white transition-all p-1 sm:p-2 rounded-full"
                >
                  <FiSearch className="text-white hover:text-maroon w-3 h-3 sm:w-4 sm:h-4" />
                </button>

              ) : (
                <div className="absolute right-0 mt-2 w-[90vw] sm:w-[250px] z-50">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-1 text-sm border-b-2 border-yellow-400 outline-none bg-maroon text-white placeholder:text-white/70"
                    autoFocus
                  />
                  {/* Suggestions */}
                  {searchResults.length > 0 && (
                    <ul className="absolute top-full mt-1 w-full bg-white text-gray-800 rounded shadow-lg z-50 max-h-60 overflow-y-auto">
                      {searchResults.map(({ item }) => (
                        <li
                          key={item.label}
                          onClick={() => handleSearchSelect(item)}
                          className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="absolute right-2 top-2 text-white/80 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>





        {/* Main Header */}
        <header
          className={`w-full transition-all duration-300 border-gray-200 ${scrolled
            ? "bg-white/80 backdrop-blur shadow-sm"
            : "bg-white/50 backdrop-blur"
            }`}
          style={{ height: `${headerHeight}px` }}
        >
          <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo + Title */}
            <div className="flex flex-col items-start">
              <Link
                href="/"
                onClick={handleMobileLinkClick}
                className="flex flex-col items-start"
              >
                <div className="flex items-center gap-3">
                  <div className={`transition-all ${scrolled ? "h-12 w-14" : "h-18 w-20"}`}>
                    <img
                      src={base64String}
                      alt="Sona Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p
                    className={`font-semibold text-maroon leading-tight transition-all ${scrolled
                      ? "text-[10px] sm:text-[12px] md:text-sm xl:text-base"
                      : "text-[12px] sm:text-sm md:text-base xl:text-lg"
                      } w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px]`}
                  >
                    Sona School of
                    <br />
                    Business and Management
                  </p>
                </div>
              </Link>

              {/* External link for Sona College */}
              <p className={`text-xs ${scrolled ? "mt-0" : "mt-2"}`}>

                <a
                  href="https://www.sonatech.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  A unit of Sona College of Technology
                </a>
              </p>
            </div>





            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <div className="flex items-center">
                    {/* Parent link */}
                    <Link
                      href={item.href as any}
                      className="px-2 md:px-2 py-3 rounded-lg text-gray-800 hover:text-maroon inline-flex items-center "
                    >
                      {item.label}
                    </Link>

                    {/* Dropdown arrow for submenu */}
                    {item.submenu && (
                      <button
                        type="button"
                        className="mt-0.5 text-gray-600 hover:text-maroon"
                        onClick={(e) => {
                          e.preventDefault();
                          // Toggle submenu visibility on click (for touch devices)
                          const submenu = (e.currentTarget.parentElement?.nextElementSibling as HTMLDivElement);
                          if (submenu) {
                            submenu.classList.toggle("hidden");
                          }
                        }}
                      >
                        <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                    )}
                  </div>

                  {/* Submenu */}
                  {item.submenu && (
                    <div className="absolute left-0 top-full z-50 w-56 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out">
                      <div className="border border-gray-200 bg-white rounded-b-lg p-2 shadow-md">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href as any}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-maroon"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Apply Now Button */}
              <Link
                href="https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589"
                target="_blank"
                className="relative overflow-hidden rounded-lg bg-yellow-500 px-2 text-maroon transition-all 
      before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-yellow-400 before:transition-all before:duration-500
      hover:text-maroon hover:before:w-full
      h-[30px] sm:h-[35px] md:h-[40px] lg:h-[45px] 
      w-[80px] sm:w-[90px] md:w-[100px] lg:w-[120px]
      flex items-center justify-center"
              >
                <span className="relative z-10 font-medium text-xs sm:text-sm md:text-sm lg:text-base">
                  Apply Now →
                </span>
              </Link>
            </nav>





            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>

          {/* Mobile Drawer */}
          <div
            className={`xl:hidden bg-white shadow-inner transition-all duration-500 overflow-hidden ${mobileOpen ? "max-h-screen" : "max-h-0"
              }`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, i) => (
                <div key={item.label} className="border-b border-gray-100">
                  {item.submenu ? (
                    <>
                      {/* Parent Button */}
                      <button
                        onClick={() => setOpenMenu(openMenu === i ? null : i)}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-800 hover:text-maroon text-left transition"
                      >
                        <span>{item.label}</span>
                        <FiChevronDown
                          className={`transition-transform duration-300 ${openMenu === i ? "rotate-180 text-maroon" : ""
                            }`}
                        />
                      </button>

                      {/* Submenu (expandable area) */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${openMenu === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="pl-6 pb-2 space-y-1">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href as any}
                              onClick={handleMobileLinkClick} // closes drawer
                              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-maroon rounded-md"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    // Single-level link
                    <Link
                      href={item.href as any}
                      onClick={handleMobileLinkClick}
                      className="block px-4 py-3 rounded-lg text-gray-800 hover:text-maroon transition"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Apply Now Button */}
              <Link
                href="https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589"
                target="_blank"
                className="relative mt-4 w-full h-[50px] overflow-hidden rounded-lg border-2 border-maroon bg-white text-maroon shadow-2xl transition-all before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-yellow-500 before:transition-all before:duration-500 hover:text-white hover:before:w-full flex items-center justify-center gap-2"
              >
                <span className="relative z-10 font-medium">
                  Apply Now <span className="text-lg">→</span>
                </span>
              </Link>
            </div>
          </div>

        </header>

      </div>

      {/* Spacer for subpages */}
      {pathname !== "/" && <div style={{ height: `${headerHeight}px` }} />}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-lg relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Application Form</h2>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
              />
              <textarea placeholder="Message" className="border p-2 rounded" />
              <button
                type="submit"
                className="bg-maroon/90 text-white px-4 py-2 rounded hover:bg-maroon"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
