"use client";

import {
    MdWork,
    MdTrendingUp,
    MdFamilyRestroom
} from "react-icons/md";

export default function ProcessCircle3() {
    return (
        <div className="flex items-center justify-center relative">

            {/* Outer rotating dashed ring */}
            <div className="absolute w-[200px] h-[200px]">
                <div className="w-full h-full rounded-full border-2 border-dashed border-gray-300 animate-slow-spin"></div>
            </div>

            {/* Center Text */}
            <div className="absolute flex items-center justify-center">
                <p className="text-xl font-bold tracking-wider text-gray-800">
                    <span className="text-pink-600">J</span><span className="text-orange-600">E</span><span className="text-green-600">F</span>
                </p>
            </div>

            {/* Icons around circle */}
            <div className="relative w-[200px] h-[200px]">

                {/* Jobs */}
                <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="p-2 rounded-xl bg-pink-500/20 backdrop-blur-md shadow-[0_0_10px_2px_rgba(236,72,153,0.4)] border border-pink-800">
                        <MdWork className="text-pink-600" size={22} />
                    </div>
                    <p className="text-pink-600 font-semibold text-xs mt-1 tracking-wide whitespace-nowrap">
                        Jobs
                    </p>
                </div>

                {/* Entrepreneurship */}
                <div className="absolute bottom-[2px] right-[-18px] flex flex-col items-center w-[90px]">
                    <div className="p-2 rounded-xl bg-orange-500/20 backdrop-blur-md shadow-[0_0_10px_2px_rgba(249,115,22,0.4)] border border-orange-700">
                        <MdTrendingUp className="text-orange-600" size={22} />
                    </div>
                    <p className="text-orange-600 font-semibold text-[12px] mt-1 tracking-wide whitespace-nowrap text-center">
                        Entrepreneurship
                    </p>
                </div>

                {/* Family Business */}
                <div className="absolute bottom-[2px] left-[-18px] flex flex-col items-center w-[90px]">
                    <div className="p-2 rounded-xl bg-green-500/20 backdrop-blur-md shadow-[0_0_10px_2px_rgba(16,185,129,0.4)] border border-green-800">
                        <MdFamilyRestroom className="text-green-600" size={22} />
                    </div>
                    <p className="text-green-600 font-semibold text-[12px] mt-1 tracking-wide whitespace-nowrap text-center">
                        Family Business
                    </p>
                </div>

            </div>
        </div>
    );
}
