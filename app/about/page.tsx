"use client";

import { Suspense } from "react";
import AboutContent from "./about-content";

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <AboutContent />
    </Suspense>
  );
}
