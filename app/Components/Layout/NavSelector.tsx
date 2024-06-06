import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { PillOptionsProps } from "../../Interfaces/InterfaceToggleSwitchProps";
import PillSelector from "../Utils/PillSelector/PillSelector";

const NavSelector: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedPill, selectPill] = useState<string>('FeaturedDetails');

    const pillOptions: PillOptionsProps[] = [
        {
            label: 'Featured',
            value: 'Featured',
        },
        {
            label: 'KPI',
            value: 'Kpis',
        },
        {
            label: 'Layouts',
            value: 'Layouts',
        },
        {
            label: 'Storyboards',
            value: 'Storyboards',
        },
    ];

    const navigate = useRouter();
    return (
        <section className="flex items-center justify-around px-4 py-2">            
            <div className="flex sm:hidden">
                <button onClick={() => { setIsMenuOpen(!isMenuOpen); }} className='text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500'>
                    <Bars3Icon className='h-5 w-5' />
                </button>
            </div>
            <nav
                className={`${isMenuOpen ? "" : "hidden"} sm:flex sm:justify-center sm:items-center mt-4 ml-10`}
            >
                <PillSelector
                    options={pillOptions}
                    selectedValue={selectedPill}
                    onChange={(key) => {
                        (navigate.push(`/${key}`));
                        selectPill(key);
                    }}
                />
            </nav>
        </section>
    );
};

export default NavSelector;
