import React from "react";
import Head from "next/head";
import { WithId } from "mongodb";
import clientPromise from "../lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Header from "../app/Components/Elements/Header";
import Footer from "../app/Components/Elements/Footer";
import { ThemeProvider } from "next-themes";
import Container from "../app/Components/Elements/Container";
import { MainLayout } from "../app/Components/Layout/MainLayout";
import "../styles/globals.css";

type ConnectionStatus = {
	isConnected: boolean;
	kpis?: WithId<Document>[] | undefined;
};

export const ThemeClient = ({ children }: React.PropsWithChildren<{}>) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system">
			{children}
		</ThemeProvider>
	);
};

export const getServerSideProps: GetServerSideProps<
	ConnectionStatus
> = async () => {
	try {
		await clientPromise;
		const client = await clientPromise;
		const db = client.db("sample_kpi");

		const kpis = await db
			.collection("kpis")
			.find({})
			.sort({ isTrending: -1 })
			.limit(1000)
			.toArray();

		// `await clientPromise` will use the default database passed in the MONGODB_URI
		// However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
		//
		// `const client = await clientPromise`
		// `const db = client.db("myDatabase")`
		//
		// Then you can execute queries against your database like so:
		// db.find({}) or any of the MongoDB Node Driver commands

		return {
			props: { isConnected: true, kpis: JSON.parse(JSON.stringify(kpis)) }
		};
	} catch (e) {
		console.error(e);
		return {
			props: { isConnected: false, kpis: [] },
		};
	}
};

export default function Home({
	isConnected,
	kpis
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<ThemeClient>
			<div className="container mx-auto flex flex-row flex-wrap px-2 justify-center items-center">
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Header />
				<Container>
					{isConnected ? (
						<>
							<h1 className="container mx-auto justify-center m-0 leading-normal text-6xl text-center relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
								<span className="animate-word col-span-full row-span-full">Welcome to <a className="text-[#0070f3] hover:text-[#0070f9] no-underline" href="https://nextjs.org">KPI Search</a></span>
								<small className="pt-20 text-2xl leading-normal text-center animate-word col-span-full row-span-full transition-opacity duration-700 ease-out opacity-0.5">You are connected to MongoDB</small>
								<span className="animate-word-delay-1 col-span-full row-span-full">Library</span>
							</h1>
							<MainLayout kpis={kpis!} title="Featured" abstract="Curated Top Picks from this week" />
						</>
					) : (
						<h2 className="text-2xl leading-normal text-center">
							You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
							for instructions.
						</h2>
					)}			
				</Container>				
				<Footer />

				<style jsx>{`
					@keyframes word {
						0% {
						  transform: translateY(100%);
						}
						15% {
						  transform: translateY(-10%);
						  animation-timing-function: ease-out;
						}
					  
						20% {
						  transform: translateY(0);
						}
					  
						40%, 100% {
						  transform: translateY(-110%);
						}
					}
					  
					.animate-word {
						animation: word 7s 1;
						animation-fill-mode: forwards;
					}
					.animate-word-delay-1 {
						animation: word 4s 1;
						animation-delay: -1.4s;
					}
					
					code {
						background: #fafafa;
						border-radius: 5px;
						padding: 0.75rem;
						font-size: 1.1rem;
						font-family:
						Menlo,
						Monaco,
						Lucida Console,
						Liberation Mono,
						DejaVu Sans Mono,
						Bitstream Vera Sans Mono,
						Courier New,
						monospace;
					}

					.grid {
						display: flex;
						align-items: center;
						justify-content: center;
						flex-wrap: wrap;

						max-width: 800px;
						margin-top: 3rem;
					}

					.card {
						margin: 1rem;
						flex-basis: 45%;
						padding: 1.5rem;
						text-align: left;
						color: inherit;
						text-decoration: none;
						border: 1px solid #eaeaea;
						border-radius: 10px;
						transition:
						color 0.15s ease,
						border-color 0.15s ease;
					}

					.card:hover,
					.card:focus,
					.card:active {
						color: #0070f3;
						border-color: #0070f3;
					}

					.card h3 {
						margin: 0 0 1rem 0;
						font-size: 1.5rem;
					}

					.card p {
						margin: 0;
						font-size: 1.25rem;
						line-height: 1.5;
					}

					@media (max-width: 600px) {
						.grid {
						width: 100%;
						flex-direction: column;
						}
					}
				`}</style>

				<style jsx global>{`
					html,
					body {
						padding: 0;
						margin: 0;
						font-family:
						-apple-system,
						BlinkMacSystemFont,
						Segoe UI,
						Roboto,
						Oxygen,
						Ubuntu,
						Cantarell,
						Fira Sans,
						Droid Sans,
						Helvetica Neue,
						sans-serif;
					}

					* {
						box-sizing: border-box;
					}
				`}</style>
			</div>
		</ThemeClient>
	);
}
