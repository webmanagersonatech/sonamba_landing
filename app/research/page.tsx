"use client";

import { Suspense } from "react";
import ResearchPage from "./Researchcontent";

export default function researchPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ResearchPage />
    </Suspense>
  );
}
