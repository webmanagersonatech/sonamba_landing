"use client";

import { Suspense } from "react";

import NewscontentPage from "./newscontent";

export default function NewsPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <NewscontentPage />
        </Suspense>
    );
}
