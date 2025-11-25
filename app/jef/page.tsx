"use client";

import { Suspense } from "react";

import JefPageContent from "./jefcontent";



export default function ProgramPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <JefPageContent />

        </Suspense>
    );
}
