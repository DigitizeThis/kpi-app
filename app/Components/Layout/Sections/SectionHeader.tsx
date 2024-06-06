import React from "react";
import { SectionProps } from "../../../Interfaces/InterfaceSectionProps";

const SectionHeader: React.FC<SectionProps> = ({title, abstract}: SectionProps) => {
    return (
        <>
            <h2 className="text-4xl text-left">{title}</h2>
            <h5 className="text-base font-normal text-gray-500 mb-5">
                <small>{abstract}</small>
            </h5>
        </>
    );
};

export default SectionHeader;
