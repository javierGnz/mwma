import { mechanicsTable, usersTable, type MechanicInsert } from "../schema";
import type { db, SeedFunction } from "../types";
import { users } from "./users";

const mechanics: MechanicInsert[] = Array.from({ length: 4 }, () => ({
  user_id: "",
  workshop_id: "",
}));

export const seedMechanics: SeedFunction = async (db: db) => {
  const addendedUsers = await db.insert(usersTable).values(users).returning();

  const data = mechanics.map((_, index) => ({
    user_id: addendedUsers[index].id,
  }));

  await db.insert(mechanicsTable).values(data);

  return `${users.length} Mechanics seeded successfully`;
};
