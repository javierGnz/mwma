import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../database/schema";

config({ path: ".env" });

const connection = postgres(process.env.DATABASE_URL ?? "", {
  prepare: false,
});

export const useDrizzle = () =>
  drizzle({ client: connection, casing: "snake_case", schema });
