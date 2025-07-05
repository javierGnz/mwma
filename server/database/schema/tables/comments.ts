import {
	relations,
	type InferInsertModel,
	type InferSelectModel,
} from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { worksTable } from "./works";
import { mechanicsTable } from "./mechanics";
import { tasksTable } from "./tasks";
import { CREATED_AND_UPDATED } from "../constants";

export const commentsTable = pgTable("comments", {
	id: uuid().defaultRandom().primaryKey(),
	description: text().notNull(),
	work_id: uuid("work_id").references(() => worksTable.id, {
		onDelete: "cascade",
	}),
	task_id: uuid("task_id").references(() => tasksTable.id, {
		onDelete: "cascade",
	}),
	mechanic_id: uuid("mechanic_id")
		.notNull()
		.references(() => mechanicsTable.id, { onDelete: "cascade" }),
	...CREATED_AND_UPDATED,
});

export const commentRelations = relations(commentsTable, ({ one }) => ({
	work: one(worksTable, {
		fields: [commentsTable.work_id],
		references: [worksTable.id],
	}),
	task: one(tasksTable, {
		fields: [commentsTable.task_id],
		references: [tasksTable.id],
	}),
	mechanic: one(mechanicsTable, {
		fields: [commentsTable.mechanic_id],
		references: [mechanicsTable.id],
	}),
}));

export type CommentInsert = InferInsertModel<typeof commentsTable>;
export type CommentSelect = InferSelectModel<typeof commentsTable>;
