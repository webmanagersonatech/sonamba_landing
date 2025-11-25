"use client";

import { Suspense } from "react";

import SSBMPage from "./whychoosesonacontent";
export default function RankPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <SSBMPage />
        </Suspense>
    );
}
