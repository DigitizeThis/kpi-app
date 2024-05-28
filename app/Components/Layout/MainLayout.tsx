import React, { Suspense, useState, useEffect } from 'react';
import { Card } from "../Elements/Card";
import { fetchKpis } from "../../Server/Actions/KpiActions";
import { ILibrary } from "../../Interfaces/InterfaceKPIServiceLibrary";
import NavSelector from "../Layout/NavSelector";
import Pagination from '../Elements/Pagination';
import { SearchBarHeader } from "../Layout/SearchBarHeader";

type ISearchQuery = {
  page: string;
}
type LayoutProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const MainLayout: React.FC<LayoutProps> = ({searchParams}: LayoutProps) => {
    const [allData, setAllData] = useState<ILibrary[]>([]);
    const [totalCountItem, setTotalCountItem] = useState<number>(0);
    const [showAllData, setShowAllData] = useState(false);
   
    return (
        <>  
            <h3 className="text-base text-center">Browse for assets needed to report and present analysis</h3>
            <SearchBarHeader />
            <NavSelector />
            {/* <Suspense fallback={<h6 className='text-center ltr'>📡 Loading data please wait ... </h6>}>
                {allData?.length ?
                    <>
                        {
                            allData.map((kpis, i) => (<Card key={i} {...kpis} />))
                        }
                            <Pagination
                                currentPage={pageNumber}
                                itemsLength={totalCountItem}
                                rowsPerPage={10}
                            />
                    </>
                    :
                    <h4 className='text-center'>No kpis found</h4>}
            </Suspense> */}
        </>
    )
};
