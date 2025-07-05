import {
	relations,
	type InferInsertModel,
	type InferSelectModel,
} from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { usersTable } from "./users";
import { workshopsTable } from "./workshops";
import { worksTable } from "./works";
import { commentsTable } from "./comments";

export const mechanicsTable = pgTable("mechanics", {
	id: uuid().primaryKey().defaultRandom(),
	workshop_id: uuid("workshop_id").references(() => workshopsTable.id, {
		onDelete: "cascade",
	}),
	user_id: uuid("user_id")
		.notNull()
		.references(() => usersTable.id, { onDelete: "cascade" }),
});

export const mechanicRelations = relations(mechanicsTable, ({ one, many }) => ({
	user: one(usersTable, {
		fields: [mechanicsTable.user_id],
		references: [usersTable.id],
	}),
	works: many(worksTable),
	comments: many(commentsTable),
	workshop: one(workshopsTable, {
		fields: [mechanicsTable.workshop_id],
		references: [workshopsTable.id],
	}),
}));

export type MechanicSelect = InferSelectModel<typeof mechanicsTable>;
export type MechanicInsert = InferInsertModel<typeof mechanicsTable>;
