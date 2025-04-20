import type { db } from "../utils/db";

export type db = typeof db;

export type SeedFunction = (db: db) => Promise<string>;
