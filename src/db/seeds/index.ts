import { connection, db } from "..";
import { seedMechanics } from "./mechanics";
import { seedOwners } from "./owners";
import { seedVehicles } from "./vehicles";
import { vehicleSpecificationsSeed } from "./vehiclesSpecifications";

const seedDb = async () => {
  console.log("Seeding database...");
  console.log("Adding independent data...");

  const res = await Promise.allSettled([
    vehicleSpecificationsSeed(db),
    seedVehicles(db),
    seedOwners(db),
    seedMechanics(db),
  ]);

  res.forEach((result) => {
    if (result.status === "rejected") {
      console.log("Error seeding database:", result.reason);
    } else {
      console.log(result.value);
    }
  });

  await connection.end();

  console.log("Seeding complete!");
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
