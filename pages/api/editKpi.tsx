import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const client = await clientPromise;
		const db = client.db("sample_kpi");
        
        const { id } = req.query;
        const {
			title,
			metrics,
			date,
			questions,
			isVisual,
			isFavourite,
			isTrending,
			isFeatured
		} = req.body;

        const kpi = await db.collection("kpis").findOne(
            {
                _id: ObjectId,
            },
        );
		res.json(kpi);
	} catch (e) {
		console.error(e);
		throw new Error().message;
	}
};

/*

`
_id: ObjectId;
title: string;
metrics: Metrics[];
date: Date;
questions: Array<QuestionsProps>;
isVisual: boolean;
isFavourite: boolean;
isTrending: boolean;
isFeatured: boolean;
`
*/