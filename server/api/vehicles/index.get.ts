import { vehiclesTable } from "~/server/database/schema";
import { db } from "~/server/utils/db";

export default eventHandler(async () => {
  const vehicles = await db.select().from(vehiclesTable);

  return vehicles;
});
