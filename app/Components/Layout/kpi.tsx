import React from "react";
import { KpiProps, KpisPropsAll } from "../../../app/Interfaces/InterfaceKPIs";
import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Kpi = (props: KpiProps) => {
    return (
        <Link
            className="pointer-events-none flex flex-row flex-wrap place-items-center lg:pointer-events-auto lg:p-0"
            href={`/kpis/${props._id}`}
            target="_self"
            rel="noopener noreferrer"
        >
            <div className="relative m-0 w-2/5 h-full shrink-0 flex justify-center overflow-hidden rounded-md bg-gray-200 bg-clip-border text-gray-700 transition">
                <ClockIcon
                    className="h-36 w-36 text-gray-400 object-cover self-center"
                />
            </div>

            <div className="p-6 w-3/5">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {props.title}
                </h4>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    {props.description}
                </p>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-400 antialiased">
                    {props.date}
                </p>
            </div>
        </Link>
    );
};

export default Kpi;