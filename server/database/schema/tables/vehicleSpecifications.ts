import { numeric, pgTable, smallint, text, uuid } from "drizzle-orm/pg-core";
import { vehicleTypeEnum } from "../enums";
import { CREATED_AND_UPDATED } from "../constants";
import {
	relations,
	type InferInsertModel,
	type InferSelectModel,
} from "drizzle-orm";
import { vehiclesTable } from "./vehicles";

export const vehicleSpecificationsTable = pgTable("vehicles_specifications", {
	id: uuid().defaultRandom().primaryKey(),
	type: vehicleTypeEnum().notNull().default("CAR"),
	brand: text().notNull(),
	model: text().notNull(),
	color: text(),
	year: smallint().notNull(),
	version: text().notNull(),
	kilometres: numeric().notNull(),
	...CREATED_AND_UPDATED,
});

export const vehicleSpecificationsRelations = relations(
	vehicleSpecificationsTable,
	({ one }) => ({
		vehicle: one(vehiclesTable, {
			fields: [vehicleSpecificationsTable.id],
			references: [vehiclesTable.vehicle_specification_id],
		}),
	})
);

export type VehicleSpecificationSelect = InferSelectModel<
	typeof vehicleSpecificationsTable
>;
export type VehicleSpecificationInsert = InferInsertModel<
	typeof vehicleSpecificationsTable
>;
