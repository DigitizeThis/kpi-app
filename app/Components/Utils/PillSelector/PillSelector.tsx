import React from 'react';
import { PillSelectorProps } from '@/app/Interfaces/InterfaceToggleSwitchProps';

const selectedClassName =
    'inline-flex bg-white rounded-lg py-2 px-3 md:px-3 border border-gray-200 w-35 md:w-40 text-center justify-center text-sm ';
const defaultClassName =
    'inline-flex transition-transform duration-300 ease-in-out rounded-lg py-2 px-3 md:px-3 w-35 md:w-40 text-center justify-center text-sm hover:opacity-75';

const PillSelector: React.FC<PillSelectorProps> = (props) => {
    return (
        <div className="inline-flex flex-row rounded-lg bg-gray-100">
            {props.options.map((opt, index) => (
                <button
                    key={`${opt.value}-${index}`}
                    className={
                        opt.value === props.selectedValue
                            ? selectedClassName
                            : defaultClassName
                    }
                    onClick={() => props.onChange(opt.value)}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    );
};

export default PillSelector;