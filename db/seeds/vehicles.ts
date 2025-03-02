import { fakerES_MX as faker } from "@faker-js/faker";
import { vehiclesTable, type VehicleInsert } from "../schema";
import type { db, SeedFunction } from "../types";

const vehicles: VehicleInsert[] = Array.from({ length: 4 }, () => ({
  vin: faker.vehicle.vin(),
  license_plate: faker.vehicle.vrm(),
  updated_by: "seed",
  vehicle_specification_id: "",
}));

export const seedVehicles: SeedFunction = async (db: db) => {
  console.log("Seeding vehicles...");

  const data = await Promise.all(
    vehicles.map(async ({ vin, license_plate, ...rest }, index) => {
      const vehicleSpecificationIds =
        await db.query.vehicleSpecificationsTable.findMany({
          columns: { id: true },
        });

      return {
        vin,
        license_plate,
        ...rest,
        vehicle_specification_id: vehicleSpecificationIds[index].id,
      };
    })
  );

  await db.insert(vehiclesTable).values(data);

  return `${data.length} Vehicles seeded successfully`;
};
