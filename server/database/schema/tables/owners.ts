import { pgTable, uuid } from "drizzle-orm/pg-core";
import { usersTable } from "./users";
import { vehiclesTable } from "./vehicles";
import {
	relations,
	type InferInsertModel,
	type InferSelectModel,
} from "drizzle-orm";

export const ownersTable = pgTable("owners", {
	id: uuid().primaryKey().defaultRandom(),
	user_id: uuid("user_id")
		.notNull()
		.references(() => usersTable.id, { onDelete: "cascade" }),
});

export const ownerRelations = relations(ownersTable, ({ one, many }) => ({
	user: one(usersTable, {
		fields: [ownersTable.user_id],
		references: [usersTable.id],
	}),
	vehicles: many(vehiclesTable),
}));

export type OwnerSelect = InferSelectModel<typeof ownersTable>;
export type OwnerInsert = InferInsertModel<typeof ownersTable>;
