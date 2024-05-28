import clientPromise from "../lib/mongodb";
import React from "react";
import { GetServerSideProps } from 'next';
import Link from "next/link";
import { KpisPropsAll } from "../app/Interfaces/InterfaceKPIs";
import Header from "../app/Components/Elements/Header";
import Footer from "../app/Components/Elements/Footer";
import Container from "../app/Components/Elements/Container";
import { MainLayout } from "../app/Components/Layout/MainLayout";
import { Card } from "../app/Components/Elements/Card";
import { ClockIcon } from "@heroicons/react/24/outline";

const Kpis: React.FC<KpisPropsAll> = ({ kpis }) => {
    return (
        <div className="container mx-auto flex flex-row flex-wrap px-2 justify-center items-center">
            <Header />
            <Container>
                <h1 className="container mx-auto justify-center m-0 leading-normal text-6xl text-center relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                    <span className="animate-word-delay-1 col-span-full row-span-full">Library</span>
                </h1>
                <MainLayout />
                <section className="flex flex-row flex-wrap my-10 mx-0 justify-left">
                    <div className="w-full">
                        <h2 className="text-4xl text-left">KPI</h2>
                        <h5 className="text-base font-normal text-gray-500 mb-5">
                            <small>Analyse and view insights for the week</small>
                        </h5>
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 my-6 w-full">
                            {kpis && kpis.map((kpi) => (
                                <React.Fragment key={kpi._id}>
                                    <Card key={kpi._id?.toString()}>
                                        <Link
                                            className="pointer-events-none flex flex-row flex-wrap place-items-center lg:pointer-events-auto lg:p-0"
                                            href="/"
                                            target="_self"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="relative m-0 w-2/5 h-full shrink-0 flex justify-center overflow-hidden rounded-md bg-gray-200 bg-clip-border text-gray-700">
                                                <ClockIcon
                                                    className="h-36 w-36 text-gray-400 object-cover self-center"
                                                />
                                            </div>

                                            <div className="p-6 w-3/5">
                                                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                    {kpi.title}
                                                </h4>
                                                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                                    {kpi.description}
                                                </p>
                                                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-400 antialiased">
                                                    {kpi.date}
                                                </p>
                                            </div>
                                        </Link>
                                    </Card>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>
                
            </Container>
            <Footer />
        </div>
    );
};
export default Kpis;

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const client = await clientPromise;
        const db = client.db("sample_kpi");
        const kpis = await db
            .collection("kpis")
            .find({})
            .sort({ isTrending: -1 })
            .limit(20)
            .toArray();
        return {
            props: { kpis: JSON.parse(JSON.stringify(kpis)) },
        };
    } catch (e) {
        console.error(e);
        return {
            props: { kpis: [] } 
        };
    }
};
