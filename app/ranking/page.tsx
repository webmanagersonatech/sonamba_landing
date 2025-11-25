"use client";

import { Suspense } from "react";
import RankingPage from "./ranking-content";

export default function RankPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <RankingPage />
        </Suspense>
    );
}
