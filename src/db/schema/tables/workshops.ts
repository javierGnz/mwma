import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { CREATED_AND_UPDATED } from "../constants";
import { companiesTable } from "./companies";
import {
  relations,
  type InferInsertModel,
  type InferSelectModel,
} from "drizzle-orm";
import { mechanicsTable } from "./mechanics";

export const workshopsTable = pgTable("workshops", {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({ length: 256 }).notNull(),
  company_id: uuid("company_id")
    .notNull()
    .references(() => companiesTable.id, { onDelete: "cascade" }),
  ...CREATED_AND_UPDATED,
});

export const workshopRelations = relations(workshopsTable, ({ one, many }) => ({
  company: one(companiesTable, {
    fields: [workshopsTable.company_id],
    references: [companiesTable.id],
  }),
  mechanics: many(mechanicsTable),
}));

export type WorkshopSelect = InferSelectModel<typeof workshopsTable>;
export type WorkshopInsert = InferInsertModel<typeof workshopsTable>;
