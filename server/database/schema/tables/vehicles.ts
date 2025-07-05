import {
	type InferInsertModel,
	type InferSelectModel,
	relations,
} from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { CREATED_AND_UPDATED } from "../constants";
import { ownersTable } from "./owners";
import { vehicleSpecificationsTable } from "./vehicleSpecifications";
import { worksTable } from "./works";

export const vehiclesTable = pgTable("vehicles", {
	id: uuid().notNull().defaultRandom().primaryKey(),
	license_plate: varchar({ length: 256 }).notNull().unique(),
	owner_id: uuid("owner_id").references(() => ownersTable.id),
	vehicle_specification_id: uuid("vehicle_specification_id")
		.notNull()
		.references(() => vehicleSpecificationsTable.id, { onDelete: "cascade" }),
	vin: varchar({ length: 256 }).notNull().unique(),
	...CREATED_AND_UPDATED,
});

export const vehicleRelations = relations(vehiclesTable, ({ one, many }) => ({
	owner: one(ownersTable, {
		fields: [vehiclesTable.owner_id],
		references: [ownersTable.id],
	}),
	vehicleSpecification: one(vehicleSpecificationsTable, {
		fields: [vehiclesTable.vehicle_specification_id],
		references: [vehicleSpecificationsTable.id],
	}),
	works: many(worksTable),
}));

export type VehicleSelect = InferSelectModel<typeof vehiclesTable>;
export type VehicleInsert = InferInsertModel<typeof vehiclesTable>;
