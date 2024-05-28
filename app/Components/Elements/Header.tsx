import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { IconLink } from "../Utils/SVGIcons/SVGIconLink";
import { HomeIcon } from "@heroicons/react/24/outline";
import { RequestButton } from "../Buttons/RequestButton";

const ThemeButton = dynamic(() => import("../Buttons/ThemeButton").then(module => module.default), { ssr: false });

const Header: React.FC = () => {
    return (
        <header className="flex z-10 w-full items-center justify-between font-mono text-sm lg:flex p-2">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30">
                <Link
                    className="pointer-events-none flex place-items-center gap-2 p-2 lg:pointer-events-auto lg:p-0"
                    href="/"
                    target="_self"
                    rel="noopener noreferrer"
                >
                    <HomeIcon
                        width={24}
                        height={24}
                        className="dark:invert"
                    />
                </Link>
            </p>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                <Link
                    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconLink className="mr-3" />
                </Link>
                <RequestButton />
                <ThemeButton />
            </div>
        </header>
    );
};

export default Header;
