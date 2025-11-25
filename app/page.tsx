import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import OutlookPage from "../components/Outlook";
import EventsPage from "../components/Events";
import TestimonialsPage from "../components/Testimonials";
import AlumniStoriesPage from "../components/AluminiSuccesstories";
import RecruitersPage from "../components/Recruiters";
import CampusLife from "../components/Campuslife";

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One of the premier MBA departments at Sona College of Technology, located in the heart of Salem, Tamil Nadu, offering excellence in management education and leadership development.",
  description: "MBA, premier MBA college, management studies, business administration, MBA department, top MBA college in Salem, leadership development, postgraduate management program, best MBA college in Tamil Nadu"
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />

      {/* Static background wrapper */}
      <div
        className="relative bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/images/banner/mba_slider_7.webp')",
        }}
      >
        {/* Darker overlay */}
        <div className="absolute inset-0 bg-black/85"></div>

        {/* Content */}
        <div className="relative z-10">
          <EventsPage />
        </div>
      </div>


      <OutlookPage />
      <CampusLife />
      <Programs />
      <TestimonialsPage />
      <AlumniStoriesPage />
      <RecruitersPage />
    </>

  );
}
