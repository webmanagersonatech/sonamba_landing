"use client";

import { Suspense } from "react";
import SonalightsonPage from "./sonalightsoncontnet";

export default function sonalightsPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <SonalightsonPage />
        </Suspense>
    );
}
