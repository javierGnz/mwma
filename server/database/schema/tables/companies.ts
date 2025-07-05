import {
	relations,
	type InferInsertModel,
	type InferSelectModel,
} from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { workshopsTable } from "./workshops";
import { CREATED_AND_UPDATED } from "../constants";

export const companiesTable = pgTable("companies", {
	id: uuid().defaultRandom().primaryKey(),
	name: varchar({ length: 256 }).notNull(),
	...CREATED_AND_UPDATED,
});

export const companyRelations = relations(companiesTable, ({ many }) => ({
	workshops: many(workshopsTable),
}));

export type CompanySelect = InferSelectModel<typeof companiesTable>;
export type CompanyInsert = InferInsertModel<typeof companiesTable>;
