"use client";

import { Suspense } from "react";
import FaualtyPage from "./facualty-content";

export default function FacualtyPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <FaualtyPage />
    </Suspense>
  );
}
