import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { PillOptionsProps } from "@/app/Interfaces/InterfaceToggleSwitchProps";
import PillSelector from "../Utils/PillSelector/PillSelector";

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

const NavSelector: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedPill, setSelectedPill] = useState<string>(pillOptions[0].label);

    const navigate = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();    

    const onHandleSelected = () => {
        const url = `${pathname}?${searchParams}`;
        let urlPathRegx = url.replace(/[?=]/, "");
        let selectedPath = urlPathRegx.slice(1).trim();
        setSelectedPill(selectedPath);
        if (selectedPath === selectedPill) {
            setSelectedPill(selectedPath);
        }
        return selectedPath;
    }

    useEffect(() => {
        onHandleSelected();
    }, [pathname, searchParams, selectedPill]);
    
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
                    onChange={(key) => {(navigate.push(`/${key}`));
                    }}
                />
            </nav>
        </section>
    );
};

export default NavSelector;
