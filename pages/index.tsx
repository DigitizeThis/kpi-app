import clientPromise from "../lib/mongodb";
import { WithId } from "mongodb";
import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import RootLayout from "@/app/Components/Layout/RootLayout";
import "@/styles/globals.css";

export type ConnectionStatus = {
	isConnected: boolean;
	appData?: WithId<Document>[] | undefined;
};

export const getServerSideProps: GetServerSideProps<
	ConnectionStatus
> = async () => {
	try {
		await clientPromise;
		const client = await clientPromise;
		const db = client.db("sample_kpi");

		const appData = await db
			.collection("kpis")
			.find({})
			.sort({ _id: 1 })
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
			props: { isConnected: true, appData: JSON.parse(JSON.stringify(appData)) }
		};
	} catch (e) {
		console.error(e);
		return {
			props: { isConnected: false, appData: [] },
		};
	}
};

export default function Home({
	isConnected,
	appData
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<RootLayout isConnected={isConnected} appData={appData} />
	);
}
