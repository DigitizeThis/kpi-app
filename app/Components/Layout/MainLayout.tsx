import React, { Suspense, useState, useEffect } from 'react';
// import clientPromise from "../../../lib/mongodb";
// import { GetStaticProps } from "next";
import { Card } from "../Elements/Card";
import { fetchKpis } from "../../Server/Actions/KpiActions";
import { KpisPropsAll, KpiPropsFeaturedAll,} from "../../Interfaces/InterfaceKPIs";
import { SectionProps } from "../../Interfaces/InterfaceSectionProps";
import { ILibrary } from "../../Interfaces/InterfaceKPIServiceLibrary";
import NavSelector from "../Layout/NavSelector";
import Pagination from '../Elements/Pagination';
import { SearchBarHeader } from "../Layout/SearchBarHeader";
import CardsFeatured from "@/app/Components/Layout/Sections/CardsFeatured";

type ISearchQuery = {
  page: string;
}
type LayoutProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const MainLayout: React.FC<KpiPropsFeaturedAll & SectionProps> = ({ kpis, title, abstract }: KpiPropsFeaturedAll & SectionProps) => {
    const [allData, setAllData] = useState<ILibrary[]>([]);
    const [totalCountItem, setTotalCountItem] = useState<number>(0);
    const [showAllData, setShowAllData] = useState(false);

    const [result, setResult] = useState(null);

    const fetchData = async (value: string) => {
        const data = await fetch(
          `http://localhost:3000/api/kpis/search?q=${value}&limit=10`
        );
    
        return data;
    };
   
    return (
        <>  
            <h3 className="text-base text-center">Browse for assets needed to report and present analysis</h3>
            <SearchBarHeader
                //fetchData={fetchData}
                // setResult={setResult}
                suggestionKey="title"
            />
            <NavSelector />
            <CardsFeatured kpis={kpis} title={title} abstract={abstract} />
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

// export const getStaticProps: GetStaticProps<KpiPropsFeaturedAll> = async () => {
//     try {
//         const client = await clientPromise;
//         const db = client.db("sample_kpi");
//         const kpis = await db
//             .collection("kpis")
//             .find({})
//             .sort({ isTrending: -1 })
//             .limit(1000)
//             .toArray();
//         return {
//             props: { kpis: JSON.parse(JSON.stringify(kpis)) },
//         };
//     } catch (e) {
//         console.error(e);
//         return {
//             props: { kpis: [] }
//         };
//     }
// };
