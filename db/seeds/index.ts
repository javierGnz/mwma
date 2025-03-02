import { connection, db } from "..";
import { seedMechanics } from "./mechanics";
import { seedOwners } from "./owners";
import { seedVehicles } from "./vehicles";
import { vehicleSpecificationsSeed } from "./vehiclesSpecifications";

const promises = [
  vehicleSpecificationsSeed,
  seedVehicles,
  seedOwners,
  seedMechanics,
];

const seedDb = async () => {
  console.log("Seeding database...");

  for (const promise of promises) {
    await promise(db).then((result) => console.log(result));
  }

  await connection.end();
};

seedDb()
  .then(() => {
    console.log("Seeding complete!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error seeding database:", err);
    process.exit(1);
  });
