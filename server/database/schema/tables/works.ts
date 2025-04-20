import {
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { CREATED_AND_UPDATED } from "../constants";
import {
  relations,
  type InferInsertModel,
  type InferSelectModel,
} from "drizzle-orm";
import { vehiclesTable } from "./vehicles";
import { mechanicsTable } from "./mechanics";
import { commentsTable } from "./comments";
import { tasksTable } from "./tasks";

export const worksTable = pgTable("works", {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({ length: 256 }).notNull(),
  description: text(),
  status: text().notNull(),
  tags: text(),
  price: numeric(),
  completed_at: timestamp(),
  expires_at: timestamp(),
  mechanic_id: uuid("mechanic_id")
    .notNull()
    .references(() => mechanicsTable.id, { onDelete: "cascade" }),
  vehicle_id: uuid("vehicle_id")
    .notNull()
    .references(() => vehiclesTable.id, { onDelete: "cascade" }),
  ...CREATED_AND_UPDATED,
});

export const workRelations = relations(worksTable, ({ one, many }) => ({
  tasks: many(tasksTable),
  comments: many(commentsTable),
  mechanic: one(mechanicsTable, {
    fields: [worksTable.mechanic_id],
    references: [mechanicsTable.id],
  }),
  vehicle: one(vehiclesTable, {
    fields: [worksTable.vehicle_id],
    references: [vehiclesTable.id],
  }),
}));

export type WorkSelect = InferSelectModel<typeof worksTable>;
export type WorkInsert = InferInsertModel<typeof worksTable>;
