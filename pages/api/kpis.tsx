import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("sample_kpi");
        const kpis = await db
            .collection("kpis")
            .find({})
            .sort({ isTrending: -1 })
            .limit(10)
            .toArray();
        res.json(kpis);
    } catch (e) {
        console.error('My Error!!!', e);
    }
}
