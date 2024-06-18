import clientPromise from "../lib/mongodb";
import React, { useState, useMemo } from "react";
import { GetStaticProps } from "next";
import { AppState } from "@/app/Interfaces/InterfaceKPIs";
import Header from "@/app/Components/Elements/Header";
import Footer from "@/app/Components/Elements/Footer";
import Container from "@/app/Components/Elements/Container";
import { MainLayout } from "@/app/Components/Layout/MainLayout";
import CardsFeatured from "@/app/Components/Layout/Sections/CardsFeatured";

const Featured: React.FC< Partial<AppState>> = ({ appData }: Partial<AppState> ) => {
    const [isTrending, setIsTrending] = useState<boolean>(false);

    const filteredKPIsTrending = useMemo(() => {
        let filteredVal: string | boolean = "true";
        const arr = appData?.filter((item) => item.isTrending === "false");
        if (arr) {
            setIsTrending(Boolean(filteredVal));
        }
        return arr;
    }, [appData]);

    return (
        <div className="container mx-auto flex flex-row flex-wrap px-2 justify-center items-center">
            <Header />
            <Container>
                <h1 className="container mx-auto justify-center m-0 leading-normal text-6xl text-center relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                    <span className="animate-word-delay-1 col-span-full row-span-full">Library</span>
                </h1>
                <MainLayout appData={appData!} title="Featured" abstract="Curated Top Picks from this week" />
                {/*---TRENDING----*/}
                {
                    isTrending &&
                        <CardsFeatured appData={filteredKPIsTrending!} title="Trending" abstract="Trending Top Picks from this week" />
                }
            </Container>
            <Footer />
        </div>
    );
};

export default Featured;

export const getStaticProps: GetStaticProps<AppState> = async () => {
    try {
        const client = await clientPromise;
        const db = client.db("sample_kpi");
        const appData = await db
            .collection("kpis")
            .find({})
            .sort({ _id: 1})
            .limit(1000)
            .toArray();
        return {
            props: { appData: JSON.parse(JSON.stringify(appData)) },
        };
    } catch (e) {
        console.error(e);
        return {
            props: { appData: [] }
        };
    }
};