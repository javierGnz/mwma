import { pgEnum } from "drizzle-orm/pg-core";

export const genderEnum = pgEnum("gender", [
	"MALE",
	"FEMALE",
	"NONBINARY",
	"UNSPECIFIED",
]);

export const vehicleTypeEnum = pgEnum("vehicle_type", [
	"CAR",
	"PICKUP",
	"VAN",
	"TRACTOR",
	"TRUCK",
	"BUS",
	"MOTORCYCLE",
	"BICYCLE",
	"SCOOTER",
	"OTHER",
]);
