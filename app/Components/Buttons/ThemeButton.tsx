'use client';
import React from "react";
import { SunIcon, StarIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
 export const ThemeButton: React.FC = () => {
    const { theme, setTheme } = useTheme();
    
    return (       
        <div className="h-7 w-7 flex justify-center rounded-full md:p-0 ml-2 bg-gray-800">
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? (
                    <SunIcon className="h-6 w-6 text-orange-400" />
                    ) : (
                        <StarIcon className="h-4 w-4 rounded-full text-gray-100" />
                    )}
            </button>
        </div>
    );
 }
 export default ThemeButton;
 