import React, { useEffect, useState } from "react";
// import parse from "@leafwell/html-react-parser";
import { HeartIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { KpiPropsFeatured } from "../../Interfaces/InterfaceKPIs";

const KpiDetail = (props: KpiPropsFeatured) => {
    
    const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favourites') || '{}') || []);
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        setFavourites(JSON.parse(localStorage.getItem('favourites') || '{}') || []);
    }, [isFavourite]);

    const addToFavourites = (e: MouseEvent | any) => {
        const previousFavourites = localStorage.getItem('favourites');
        const newFavourites = previousFavourites ? [...JSON.parse(previousFavourites), (e.target as HTMLButtonElement).value] : [(e.target as HTMLButtonElement).value];
        localStorage.setItem('favourites', JSON.stringify(newFavourites));
        setIsFavourite(!isFavourite);
    };

    const removeFromFavourites = (e: MouseEvent | any) => {
        const previousFavourites = localStorage.getItem('favourites');
        const newFavourites = previousFavourites ? [...JSON.parse(previousFavourites)].filter(favourite => favourite !== e.target.value) : [];
        localStorage.setItem('favourites', JSON.stringify(newFavourites));
        setIsFavourite(!isFavourite);
    };

    return (
        <div className="max-w-2xl mx-auto mt-5 md:mt-0 ">
            <h3 className="text-indigo-700 font-extrabold uppercase text-lg">{''}</h3>
            <hr className="my-3" />
            <p className="text-gray-500 mt-2">{Array.isArray(props) ? props : props.title}</p>
            <div className="flex items-center mt-6">
                {
                    ((typeof(!favourites) == "string" &&  !favourites.includes(props.title)))
                        ?
                        <button onClick={addToFavourites} value={props.title} className="px-8 py-2 bg-black-600 text-white text-sm font-medium rounded hover:bg-marine-500 focus:outline-none focus:bg-marine-500">
                            <HeartIcon className="w-4 h-4 inline-block mr-2" />
                            Favourite Item
                        </button>
                        :
                        <button onClick={removeFromFavourites} value={props.title} className="px-8 py-2 bg-black-600 text-white text-sm font-medium rounded hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                            <XCircleIcon className="w-4 h-4 inline-block mr-2" />
                            Remove Favourite Item
                        </button>
                }
            </div>
        </div>
    );
};

export default KpiDetail;
