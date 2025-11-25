"use client";

import { Suspense } from "react";
import PlacementPage from "./placementcontent";

export default function placementtePage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <PlacementPage />
    </Suspense>
  );
}
