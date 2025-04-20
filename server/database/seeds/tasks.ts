import { fakerES_MX as faker } from "@faker-js/faker";
import { tasksTable, type TaskInsert } from "../schema";
import type { db, SeedFunction } from "../types";

const data: TaskInsert[] = Array.from({ length: 4 }, () => ({
  name: faker.lorem.sentence({ min: 3, max: 5 }),
  description: faker.lorem.paragraph(),
  updated_by: "seed",
}));

export const seedTasks: SeedFunction = async (db: db) => {
  await db.insert(tasksTable).values(data);

  return `${data.length} Tasks seeded successfully`;
};
