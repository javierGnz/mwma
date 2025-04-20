import { text, timestamp } from "drizzle-orm/pg-core";

export const CREATED_AND_UPDATED = {
  created_at: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updated_at: timestamp({ withTimezone: true }),
  updated_by: text(),
};
