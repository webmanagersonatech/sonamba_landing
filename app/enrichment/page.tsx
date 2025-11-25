"use client";

import { Suspense } from "react";
import EnrichmentPage from "./Enrichmentcontent";

export default function EnrichPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <EnrichmentPage />
        </Suspense>
    );
}
