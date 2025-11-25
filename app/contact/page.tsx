"use client";

import { Suspense } from "react";
import ContactPage from "./contactcontent";

export default function contactPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ContactPage />
    </Suspense>
  );
}
