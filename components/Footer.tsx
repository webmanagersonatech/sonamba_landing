"use client";

import Link from "next/link";
import { footerLinks, quickLinks, alumniFacilities, rankings, socialIcons } from "../data/footerLinks";
import { FaChevronRight } from "react-icons/fa6";

export default function Footer() {
  const base64String = "/images/about/logo.webp"

  return (
    <footer className="bg-maroon text-grayText">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* Logo + Address + Map */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="h-14 w-16 rounded-full bg-white/20 overflow-hidden grid place-items-center">
                <img
                  src={base64String}
                  alt="Sona Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-semibold  leading-snug">
                Sona School of Business and Management
              </span>
            </div>

            <p className="text-sm text-gray-300/80 leading-relaxed">
              Sona College of Technology,
              <br />
              Junction Main Road, Salem – 636005,
              <br />
              Tamil Nadu, India.
            </p>

            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=11.6768,78.1257&hl=en&z=15&output=embed"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Links + Socials */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-8 lg:flex lg:flex-row lg:justify-between lg:items-start">
              {/* Useful Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Useful Links</h4>
                <ul className="flex flex-col gap-2">
                  {footerLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href as any}
                        className="flex items-center gap-2 text-sm text-gray-200/90 hover:text-white transition"
                      >
                        <FaChevronRight className="text-xs" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="flex flex-col gap-2">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("#") ? (
                        <a
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-gray-200/90 hover:text-white transition"
                        >
                          <FaChevronRight className="text-xs" />
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href as any}
                          className="flex items-center gap-2 text-sm text-gray-200/90 hover:text-white transition"
                        >
                          <FaChevronRight className="text-xs" />
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rankings */}
              <div>
                <h4 className="text-white font-semibold mb-4">Rankings</h4>
                <ul className="flex flex-col gap-2">
                  {rankings.map((ranking) => (
                    <li key={ranking.label}>
                      <Link
                        href={ranking.href as any}
                        className="flex items-center gap-2 text-sm text-gray-200/90 hover:text-white transition"
                      >
                        <FaChevronRight className="text-xs" />
                        {ranking.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Facilities */}
              <div>
                <h4 className="text-white font-semibold mb-4">Facilities</h4>
                <ul className="flex flex-col gap-2">
                  {alumniFacilities.map((facility) => (
                    <li key={facility.label}>
                      <Link
                        href={facility.href as any}
                        className="flex items-center gap-2 text-sm text-gray-200/90 hover:text-white transition"
                      >
                        <FaChevronRight className="text-xs" />
                        {facility.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Social Icons */}
                <h4 className="text-white font-semibold mt-6 mb-3">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  {socialIcons.map(({ icon: Icon, href, color }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="social"
                      className="group p-2 rounded-full bg-white/10 transition hover:bg-transparent hover:scale-110"
                    >
                      <Icon
                        className="text-white transition-colors duration-500 group-hover:text-[var(--hover-color)]"
                        style={{ "--hover-color": color } as React.CSSProperties}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-300/70">
          <span className="text-center">
            © {new Date().getFullYear()} Sona School of Business and Management. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href="#terms" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="#privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
