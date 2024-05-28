import React from "react";
import Link from "next/link";
// import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className="w-full h-24 flex justify-center items-center border border-solid border-0 border-[#eaeaea]">
            <Link
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit no-underline flex justify-center items-center"
            >
                Powered by{" "}
                <img
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className="dark:invert h-4 ml-2"
                    width={100}
                    height={24}
                />
            </Link>
        </footer>
    );
};

export default Footer;
