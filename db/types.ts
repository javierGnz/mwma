import type { db } from ".";

export type db = typeof db;

export type SeedFunction = (db: db) => Promise<string>;
