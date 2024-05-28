import { useState } from 'react';
import { MainLayout } from "../../app/Components/Layout/MainLayout";
import { KpisPropsAll, KpiPropsFeaturedAll} from "../../app/Interfaces/InterfaceKPIs";

export async function getServerSideProps() {
	try {
		let response = await fetch('http://localhost:3000/api/kpis');
		let kpis = await response.json();

		return {
			props: { posts: JSON.parse(JSON.stringify(kpis)) },
		};
	} catch (e) {
		console.error(e);
	}
}