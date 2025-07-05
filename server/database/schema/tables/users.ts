import { date, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { genderEnum } from "../enums";
import { CREATED_AND_UPDATED } from "../constants";
import { ownersTable } from "./owners";
import { mechanicsTable } from "./mechanics";
import {
	relations,
	type InferInsertModel,
	type InferSelectModel,
} from "drizzle-orm";

export const usersTable = pgTable("users", {
	id: uuid().primaryKey().defaultRandom(),
	name: varchar({ length: 256 }).notNull(),
	last_name: varchar({ length: 256 }).notNull(),
	dni: varchar({ length: 256 }).notNull().unique(),
	email: varchar({ length: 256 }).notNull(),
	phone: varchar({ length: 256 }).notNull(),
	gender: genderEnum(),
	date_of_birth: date(),
	...CREATED_AND_UPDATED,
});

export const userRelations = relations(usersTable, ({ one }) => ({
	owner: one(ownersTable, {
		fields: [usersTable.id],
		references: [ownersTable.user_id],
	}),
	mechanic: one(mechanicsTable, {
		fields: [usersTable.id],
		references: [mechanicsTable.user_id],
	}),
}));

export type UserSelect = InferSelectModel<typeof usersTable>;
export type UserInsert = InferInsertModel<typeof usersTable>;
