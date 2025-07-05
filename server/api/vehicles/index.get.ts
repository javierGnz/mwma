import { db } from "~/server/utils/db";

export default eventHandler(async () => {
	const vehicles = await db.query.vehiclesTable.findMany({
		columns: {
			id: true,
			license_plate: true,
			vin: true,
		},
		with: {
			vehicleSpecification: true,
		},
	});

	return vehicles;
});
