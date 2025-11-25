import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingSidebar from "../components/Sidebar";
import Chatbot from "../components/Chatbot";
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: "Sona School of Business and Management",
  description: "The best business school to transform your career – Sona School of Business and Management, offering modern MBA programs with expert faculty and global exposure.",
  icons: {
    icon: "/images/about/logo.webp",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-700 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <Chatbot /> */}
        <FloatingSidebar />
      </body>
    </html>
  );
}
