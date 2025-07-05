import { fakerES_MX as faker } from "@faker-js/faker";
import {
	type VehicleSpecificationInsert,
	vehicleSpecificationsTable,
} from "../schema";
import type { DbType, SeedFunction } from "../types";

const data: VehicleSpecificationInsert[] = Array.from({ length: 4 }, () => ({
	brand: faker.vehicle.manufacturer(),
	model: faker.vehicle.model(),
	year: faker.date.recent().getFullYear(),
	version: faker.vehicle.type(),
	kilometres: faker.number.int({ min: 0, max: 325000 }).toString(),
	type: "CAR",
	color: faker.vehicle.color(),
	updated_by: "seed",
}));

export const vehicleSpecificationsSeed: SeedFunction = async (db: DbType) => {
	console.log("Seeding vehicle specifications...");

	await db.insert(vehicleSpecificationsTable).values(data);

	return `${data.length} Vehicle Specifications seeded successfully`;
};
