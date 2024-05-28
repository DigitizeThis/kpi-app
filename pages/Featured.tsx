import clientPromise from "../lib/mongodb";
import { GetStaticProps } from "next";
import React, { useState } from "react";
import Link from "next/link";
import { KpisPropsAll, KpiPropsFeaturedAll,} from "../app/Interfaces/InterfaceKPIs";
import Header from "../app/Components/Elements/Header";
import Footer from "../app/Components/Elements/Footer";
import Container from "../app/Components/Elements/Container";
import { MainLayout } from "../app/Components/Layout/MainLayout";
import { Card } from "../app/Components/Elements/Card";
import { ClockIcon } from "@heroicons/react/24/outline";
import Kpis from "../app/Components/Layout/kpis";
import Modal from "../app/Components/Elements/Modal/Modal";
import { Button } from "../app/Components/Buttons/Button";
import KpiDetail from "../app/Components/Layout/KpiDetail";

export default function Featured({ kpis }: Partial<KpisPropsAll> ) {
    const [showModal, setShowModal] = useState<boolean>(false);

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
                        <h2 className="text-4xl text-left">Featured</h2>
                        <h5 className="text-base font-normal text-gray-500 mb-5">
                            <small>Curated Top Picks from this week</small>
                        </h5>
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 my-6 w-full">
                            {kpis && kpis.map((kpi) => (
                                <React.Fragment key={kpi._id}>
                                    {/* <Kpis key={kpi._id?.toString()} kpis={kpis} /> */}
                                    <Card key={kpi._id?.toString()}>
                                        <Link
                                            className="pointer-events-none flex flex-row flex-wrap place-items-center lg:pointer-events-auto lg:p-0"
                                            href={""}
                                            target="_self"
                                            rel="noopener noreferrer"
                                            onClick={() => {
                                                setShowModal(true);
                                            }}
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
                <section className="flex flex-row flex-wrap my-10 mx-0 justify-left">
                    <div className="w-full">
                        <h2 className="text-4xl text-left">Trending</h2>
                        <h5 className="text-base font-normal text-gray-500 mb-5">
                            <small>Trending Top Picks from this week</small>
                        </h5>
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 my-6 w-full">
                            {kpis && kpis.map((kpi) => (
                                <React.Fragment key={kpi._id}>
                                    {/* <Kpis key={kpi._id?.toString()} kpis={kpis} /> */}
                                    {
                                        (kpi.isTrending === true && (kpi.isFeatured === false)) &&
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
                                    }
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>
            </Container>
            <Footer />
            <form>
                <Modal show={showModal} width="w-3/5">
                    <Modal.Header>
                        <h1 className="text-3xl text-center">Intes</h1>
                        <p className="text-sm font-light text-center">Those options are already baked in with this model shoot me an email clear blue water but we need distributors to evangelize the new line to local markets</p>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <div className="relative m-0 w-full h-full shrink-0 flex justify-center overflow-hidden rounded-md bg-gray-200 bg-clip-border text-gray-700">
                            <h3 className="textbase text-black my-8 h-96">Charts Here...</h3>
                        </div>
                        <section>
                            <h3 className="text-2xl text-left mt-10">Business Questions</h3>
                        </section>
                        <div className="bg-white-500 w-full h-24 flex justify-center">
                            <KpiDetail />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex flex-row flex-wrap justify-evenly">
                            <Button
                                colorType="secondary"
                                onClick={() => {
                                    setShowModal(false);
                                }}
                                label="Cancel"
                                className="h-max w-max rounded-lg px-2 py-1 self-center text-white text-base bg-[#64738b] hover:bg-gray-600"
                            ></Button>
                            <Button
                                disabled={true}
                                className="h-max w-max rounded-lg px-2 py-1 self-center text-white text-base bg-[#64738b] hover:bg-gray-600"
                                type="submit"
                                label="Send Data"
                            ></Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </form>
        </div>
    );
}

export const getStaticProps: GetStaticProps<KpiPropsFeaturedAll> = async () => {
    try {
        const client = await clientPromise;
        const db = client.db("sample_kpi");
        const kpis = await db
            .collection("kpis")
            .find({})
            .sort({ isTrending: -1 })
            .limit(1000)
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