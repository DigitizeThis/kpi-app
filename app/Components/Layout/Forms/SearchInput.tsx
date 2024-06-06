import React, { useState } from "react";
import { useRouter } from "next/router";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface iDefault {
    defaultValue: string | null
};

const SearchInput: React.FC<iDefault> = ({ defaultValue }: iDefault) => {
    const router = useRouter();
    const [inputVal, setInputVal] = useState<string | null>(defaultValue);
    // const [hideSuggestions, setHideSuggestions] = useState<boolean>(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value);
    };

    const handleKeyPress = (e: { key: string; }) => {
        if (e.key === "Enter") {
            return handleSearch();
        }
    };

    const handleSearch = () => {
        if (inputVal) {
            router.push(`/?q=${inputVal}`);
        }
        if (!inputVal) {
            router.push("/");
        }
    };

    // const handleFocus = () => {
    //     setHideSuggestions(false)
    // };

    // const handleBlur = () => {
    //     setTimeout(() => {
    //         setHideSuggestions(true);
    //     }, 200);
    // };

    return (
        <section className="relative mt-6 max-w-xl mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <MagnifyingGlassIcon className="ml-5 h-5 w-5 text-gray-600" />
            </span>
            <form onSubmit={handleSearch} className="flex">
                <input
                    className="ml-5 w-full border rounded-md pl-10 pr-4 py-2 focus:border-indigo-600 focus:outline-none focus:shadow-outline"
                    type="submit"
                    placeholder="Search"
                    onChange={handleChange}
                    value={inputVal ?? ""}
                    onKeyDown={handleKeyPress}
                    // onFocus={handleFocus}
                    // onBlur={handleBlur}
                    required
                />
            </form>
            {/* {
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
            } */}
        </section>
    );
};
export default SearchInput;
