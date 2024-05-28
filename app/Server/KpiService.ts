import clientPromise from "@/lib/mongodb";
import { MongoClient } from "mongodb";
import { InterfaceKpiService } from "../Interfaces/InterfaceKpiService";

export class KpiService<T> implements InterfaceKpiService<T> {
	private collection: string;

	constructor(collection: string) {
		this.collection = collection;
	}

	// find documents Asynchronously in the collection
	async find(
		filter: Partial<T>,
		page: number = 1,
		limit: number = 10,
		projection?: Partial<Record<keyof T, 1 | 0>>,
	): Promise<{ data: T[], totalCount: number }> {
		try {
			const client: MongoClient = await clientPromise;

			const skip = (page - 1) * limit;

			const collection = client.db().collection(this.collection);

			const totalCount = await collection.countDocuments(filter);

			const data = await collection
				.find(filter, { projection })
				.skip(skip)
				.limit(limit)
				.toArray();

			return { data: data as unknown as T[], totalCount };
		} catch (error: unknown) {
			if (error instanceof Error) {
				if (error.message.includes("ECONNREFUSED")) {
					console.error("Failed to connect to MongoDB. Connection refused.");
				} else {
					console.error("An error occurred:", error.message);
				}
			}
			return { data: [], totalCount: 0 };
		}
	}
}