"use client";

import { Suspense } from "react";
import EventcontentPage from "./event-content";

export default function eventPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <EventcontentPage />
        </Suspense>
    );
}
