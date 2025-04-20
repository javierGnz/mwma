import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { CREATED_AND_UPDATED } from "../constants";
import { mechanicsTable } from "./mechanics";
import { worksTable } from "./works";
import {
  relations,
  type InferInsertModel,
  type InferSelectModel,
} from "drizzle-orm";

export const tasksTable = pgTable("tasks", {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({ length: 256 }).notNull(),
  description: text(),
  priority: text(),
  parts: text(),
  mechanic_id: uuid("mechanic_id")
    .notNull()
    .references(() => mechanicsTable.id, { onDelete: "cascade" }),
  work_id: uuid("work_id")
    .notNull()
    .references(() => worksTable.id, { onDelete: "cascade" }),
  ...CREATED_AND_UPDATED,
});

export const taskRelations = relations(tasksTable, ({ one }) => ({
  work: one(worksTable, {
    fields: [tasksTable.work_id],
    references: [worksTable.id],
  }),
  mechanic: one(mechanicsTable, {
    fields: [tasksTable.mechanic_id],
    references: [mechanicsTable.id],
  }),
}));

export type TaskSelect = InferSelectModel<typeof tasksTable>;
export type TaskInsert = InferInsertModel<typeof tasksTable>;
