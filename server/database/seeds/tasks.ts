import { fakerES_MX as faker } from "@faker-js/faker";
import { type TaskInsert, tasksTable } from "../schema";
import type { DbType, SeedFunction } from "../types";

const data: TaskInsert[] = Array.from({ length: 4 }, () => ({
	name: faker.lorem.sentence({ min: 3, max: 5 }),
	description: faker.lorem.paragraph(),
	updated_by: "seed",
}));

export const seedTasks: SeedFunction = async (db: DbType) => {
	await db.insert(tasksTable).values(data);

	return `${data.length} Tasks seeded successfully`;
};
