import React, { useState, useRef, useEffect, FormEvent } from "react";
import {useRouter  } from "next/router";
import Link from 'next/link';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const SearchBarHeader: React.FC = () => {
    const router = useRouter();
    
    const [searchTerm, setSearchTerm] = useState('');
    const [autoComplete, setAutoComplete] = useState([]);

    const ref = useRef<HTMLUListElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setAutoComplete([]);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        router.push({
            pathname: `/search/${searchTerm}`,
        });
        setSearchTerm('');
    };

    const handleSelect = (id: string) => {
        setSearchTerm('');
        router.push({
            pathname: `/kpis/${id}`,
        });
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [ref]);

    return (
        <section className="relative mt-6 max-w-xl mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <MagnifyingGlassIcon className="ml-5 h-5 w-5 text-gray-600" />
            </span>
            <form onSubmit={handleSubmit} className="flex">
                <input
                    className="ml-5 w-full border rounded-md pl-10 pr-4 py-2 focus:border-indigo-600 focus:outline-none focus:shadow-outline"
                    type="submit"
                    placeholder="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm || ""}
                    required
                />
            </form>
            {/* {
                autoComplete.length > 0
                    && (
                        <ul ref={ref} className='ml-5 mr-28 absolute inset-x-0 top-full bg-indigo-200 border border-indigo-500 rounded-md z-20'>
                            {autoComplete.map((kpi) => (
                                <li
                                    key={kpi._id}
                                    className="px-4 py-2 text-indigo-700 hover:bg-indigo-500 hover:text-white cursor-pointer"
                                    onClick={() => handleSelect(kpi._id)}
                                >
                                    {kpi.title}
                                </li>
                            ))}
                        </ul>
                    )
            } */}
        </section>
    );
};