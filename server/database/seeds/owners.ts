import { type OwnerInsert, ownersTable, usersTable } from "../schema";
import type { DbType, SeedFunction } from "../types";
import { generateUsers } from "./users";

const owners: OwnerInsert[] = Array.from({ length: 4 }, () => ({
	user_id: "",
}));

export const seedOwners: SeedFunction = async (db: DbType) => {
	console.log("Seeding owners...");

	const addendedUsers = await db
		.insert(usersTable)
		.values(generateUsers())
		.returning();

	const data = owners.map((_, index) => ({ user_id: addendedUsers[index].id }));

	await db.insert(ownersTable).values(data);

	return `${data.length} Owners seeded successfully`;
};
