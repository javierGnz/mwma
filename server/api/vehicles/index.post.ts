import { vehiclesTable } from "~~/server/database/schema";
import { db } from "~~/server/utils/db";

export default defineEventHandler(async event => {
	const body = await readBody(event);

	const vehicleSpecification =
		await db.query.vehicleSpecificationsTable.findFirst({
			columns: { id: true },
		});

	const vehicle = await db.insert(vehiclesTable).values({
		license_plate: body.licensePlate,
		vin: body.vin,
		vehicle_specification_id: vehicleSpecification?.id,
	});

	return vehicle;
});
