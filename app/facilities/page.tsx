"use client";

import { Suspense } from "react";
import FacilitiePage from "./Facilitiecontent";

export default function FacilityPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <FacilitiePage />
        </Suspense>
    );
}
