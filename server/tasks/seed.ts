import { seedMechanics } from "../database/seeds/mechanics";
import { seedOwners } from "../database/seeds/owners";
import { seedVehicles } from "../database/seeds/vehicles";
import { vehicleSpecificationsSeed } from "../database/seeds/vehiclesSpecifications";
import { connection, db } from "../utils/db";

const promises = [
  vehicleSpecificationsSeed,
  seedVehicles,
  seedOwners,
  seedMechanics,
];

export default defineTask({
  meta: {
    name: "db:seed",
    description: "Run database seed task",
  },
  async run() {
    console.log("Running DB seed task...");

    for (const promise of promises) {
      await promise(db).then((result) => console.log(result));
    }

    await connection.end();

    return { result: "success" };
  },
});
