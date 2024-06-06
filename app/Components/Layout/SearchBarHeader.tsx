import React, { useState, useRef, useEffect, FormEvent } from "react";
import { KpiProps} from "../../../app/Interfaces/InterfaceKPIs";
import {useRouter  } from "next/router";
import { useDebounce } from "../Utils/Hooks/useDebounce";
import { SearchProps } from "../../Interfaces/InterfaceSearchProps";
import Link from 'next/link';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const SearchBarHeader: React.FC<SearchProps> = ({ fetchData, setResult, suggestionKey }: SearchProps) => {   
    
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [autoComplete, setAutoComplete] = useState<KpiProps[]>([]);
    const [hideSuggestions, setHideSuggestions] = useState<boolean>(true);
    
    const ref = useRef<HTMLUListElement>(null);
    const router = useRouter();

    useDebounce(async () => {
        try {
            const autoComplete = fetchData!(searchTerm);
            setAutoComplete(autoComplete || []);
        } catch (error) {
            console.log("My Search Error", error);
        }
    }, 1000, [searchTerm]);

    const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setAutoComplete([]);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        router.push({
            pathname: `/Search/${searchTerm}`,
        });
        setSearchTerm('');
    };

    const handleFocus = () => {
        setHideSuggestions(false)
      };
    
      const handleBlur = () => {
        setTimeout(() => {
          setHideSuggestions(true);
        }, 200);
      };

    const handleSelect = (id: string | undefined) => {
        setSearchTerm('');
        router.push({
            pathname: `/kpis/${id}`,
        });
    };

    const findResult = (value: any) => {
        setResult!(
            autoComplete.find((suggestion: any) => suggestion[suggestionKey] === value)
        );
    };

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
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
                    onChange={handleSearchInputChange}
                    value={searchTerm || ""}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                />
            </form>
            {
                autoComplete.length > 0
                    && (
                        <ul ref={ref}
                        className={`${hideSuggestions} ml-5 mr-28 absolute inset-x-0 top-full bg-indigo-200 border border-indigo-500 rounded-md z-20`}
                        >
                            {autoComplete.map((kpi, i) => (
                                <li
                                    key={i.toString()&& kpi._id}
                                    className="px-4 py-2 text-indigo-700 hover:bg-indigo-500 hover:text-white cursor-pointer"
                                    // onClick={() => handleSelect(kpi!._id)}
                                    onClick={() => findResult(autoComplete[suggestionKey])}
                                >
                                    {autoComplete[suggestionKey]}
                                </li>
                            ))}
                        </ul>
                    )
            }
        </section>
    );
};