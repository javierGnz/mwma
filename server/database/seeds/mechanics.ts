import { type MechanicInsert, mechanicsTable, usersTable } from "../schema";
import type { DbType, SeedFunction } from "../types";
import { generateUsers } from "./users";

const mechanics: MechanicInsert[] = Array.from({ length: 4 }, () => ({
	user_id: "",
	workshop_id: "",
}));

export const seedMechanics: SeedFunction = async (db: DbType) => {
	console.log("Seeding mechanics...");

	const addendedUsers = await db
		.insert(usersTable)
		.values(generateUsers())
		.returning();

	const data = mechanics.map((_, index) => ({
		user_id: addendedUsers[index].id,
	}));

	await db.insert(mechanicsTable).values(data);

	return `${data.length} Mechanics seeded successfully`;
};
