import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
	dialect: "postgresql",
	schema: "./server/database/schema",
	out: "./server/database/migrations",
	dbCredentials: { url: process.env.DATABASE_URL! },
});
