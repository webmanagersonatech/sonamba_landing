"use client";

import { Suspense } from "react";
import SpecializationPageContent from "./specializationscontent";



export default function ProgramPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <SpecializationPageContent />
  
        </Suspense>
    );
}
