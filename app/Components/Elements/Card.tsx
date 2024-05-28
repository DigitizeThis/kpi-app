import React from "react";

interface CardProps {
    children?: React.ReactNode;
}

export const Card = (props: CardProps) => {
    return (
        <article className="relative flex flex-row flex-wrap w-full max-w-[48rem] p-4 rounded-lg bg-white bg-clip-border text-gray-700 shadow-md my-3">
            {props.children}
        </article>
    );
};
// `<article className="bg-white mb-4 border border-gray-200 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">`