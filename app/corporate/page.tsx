"use client";

import { Suspense } from "react";
import CoperatePage from "./Coperatecontent";

export default function coperatePage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <CoperatePage />
    </Suspense>
  );
}
