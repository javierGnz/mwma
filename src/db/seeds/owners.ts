import { ownersTable, usersTable, type OwnerInsert } from "../schema";
import type { db, SeedFunction } from "../types";
import { users } from "./users";

const owners: OwnerInsert[] = Array.from({ length: 4 }, () => ({
  user_id: "",
}));

export const seedOwners: SeedFunction = async (db: db) => {
  const addendedUsers = await db.insert(usersTable).values(users).returning();

  const data = owners.map((_, index) => ({
    user_id: addendedUsers[index].id,
  }));

  await db.insert(ownersTable).values(data);

  return `${users.length} Owners seeded successfully`;
};
