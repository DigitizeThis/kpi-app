import React from "react";
import Link from "next/link";
import { Card } from "../../Components/Elements/Card";
import { ClockIcon } from "@heroicons/react/24/outline";

interface CardContainerProps {
    title: string;
    description: string;
    date: Date;
    photo?: string;
    link?: string;
    onShowModal: (e: Event) => void;
}

function dateFormatter(timestamp: Date) {
    let dateObj = new Date(timestamp);    
    return dateObj.toDateString();
}

const CardContainer: React.FC<CardContainerProps> = (props: CardContainerProps) => {
    const { title, description, date, link, onShowModal } = props;
    return (        
        <Card>
            <Link
                className="pointer-events-none flex flex-row flex-wrap place-items-center lg:pointer-events-auto lg:p-0"
                href={link!}
                target="_self"
                rel="noopener noreferrer"
                onClick={() => onShowModal}
            >
                <div className="relative m-0 w-2/5 h-full shrink-0 flex justify-center overflow-hidden rounded-md bg-gray-200 bg-clip-border text-gray-700">
                    <ClockIcon
                        className="h-36 w-36 text-gray-400 object-cover self-center"
                    />
                </div>

                <div className="p-6 w-3/5">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-400 antialiased">
                        {dateFormatter(date)}
                    </p>
                </div>
            </Link>
        </Card>
        
    );
};

export default CardContainer;
