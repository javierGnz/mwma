import type { db } from "../utils/db";

export type DbType = typeof db;

export type SeedFunction = (db: DbType) => Promise<string>;
