import {
  integer,
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

export const vehiclesTable = pgTable('vehicles', {
  id: uuid().primaryKey(),
  brand: text().notNull(),
  model: text().notNull(),
  color: text(),
  year: numeric().notNull(),
  version: text().notNull(),
  vin: text().notNull().unique(),
  license_plate: text().notNull().unique(),
  created_at: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updated_at: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updated_by: text(),
})
