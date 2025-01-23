import {
  date,
  numeric,
  pgTable,
  smallint,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'
import { genderEnum, vehicleTypeEnum } from './enums'
import { CREATED_AND_UPDATED } from './constants'
import { relations } from 'drizzle-orm'

export const vehiclesTable = pgTable('vehicles', {
  id: uuid().defaultRandom().primaryKey(),
  vin: text().notNull().unique(),
  license_plate: text().notNull().unique(),
  owner_id: uuid('owner_id')
    .notNull()
    .references(() => ownersTable.id),
  ...CREATED_AND_UPDATED,
})

export const vehicleRelations = relations(vehiclesTable, ({ one, many }) => ({
  vehicleSpecification: one(vehiclesSpecificationsTable, {
    fields: [vehiclesTable.id],
    references: [vehiclesSpecificationsTable.vehicle_id],
  }),
  owner: one(ownersTable, {
    fields: [vehiclesTable.owner_id],
    references: [ownersTable.id],
  }),
  works: many(worksTable),
}))

export const vehiclesSpecificationsTable = pgTable('vehicles_specifications', {
  id: uuid().defaultRandom().primaryKey(),
  type: vehicleTypeEnum().notNull().default('CAR'),
  brand: text().notNull(),
  model: text().notNull(),
  color: text(),
  year: smallint().notNull(),
  version: text().notNull(),
  kilometres: numeric().notNull(),
  vehicle_id: uuid('vehicle_id')
    .notNull()
    .references(() => vehiclesTable.id, {
      onDelete: 'cascade',
    }),
  ...CREATED_AND_UPDATED,
})

export const usersTable = pgTable('users', {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  last_name: text().notNull(),
  dni: text().notNull().unique(),
  email: text().notNull(),
  phone: text().notNull(),
  gender: genderEnum(),
  date_of_birth: date(),
  ...CREATED_AND_UPDATED,
})

export const ownersTable = pgTable('owners', {
  id: uuid('user_id')
    .primaryKey()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
})

export const ownersRelations = relations(ownersTable, ({ many }) => ({
  vehicles: many(vehiclesTable),
}))

export const mechanicsTable = pgTable('mechanics', {
  id: uuid('user_id')
    .primaryKey()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  workshop_id: uuid('workshop_id')
    .notNull()
    .references(() => workshopsTable.id, { onDelete: 'cascade' }),
})

export const mechanicRelations = relations(mechanicsTable, ({ one, many }) => ({
  works: many(worksTable),
  comments: many(commentsTable),
  workshop: one(workshopsTable, {
    fields: [mechanicsTable.workshop_id],
    references: [workshopsTable.id],
  }),
}))

export const worksTable = pgTable('works', {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  description: text(),
  status: text().notNull(),
  tags: text(),
  price: numeric(),
  completed_at: timestamp(),
  expires_at: timestamp(),
  mechanic_id: uuid('mechanic_id')
    .notNull()
    .references(() => mechanicsTable.id, { onDelete: 'cascade' }),
  vehicle_id: uuid('vehicle_id')
    .notNull()
    .references(() => vehiclesTable.id, { onDelete: 'cascade' }),
  ...CREATED_AND_UPDATED,
})

export const workRelations = relations(worksTable, ({ one, many }) => ({
  tasks: many(tasksTable),
  comments: many(commentsTable),
  mechanic: one(mechanicsTable, {
    fields: [worksTable.mechanic_id],
    references: [mechanicsTable.id],
  }),
  vehicle: one(vehiclesTable, {
    fields: [worksTable.vehicle_id],
    references: [vehiclesTable.id],
  }),
}))

export const tasksTable = pgTable('tasks', {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  description: text(),
  priority: text(),
  parts: text(),
  mechanic_id: uuid('mechanic_id')
    .notNull()
    .references(() => mechanicsTable.id, { onDelete: 'cascade' }),
  work_id: uuid('work_id')
    .notNull()
    .references(() => worksTable.id, { onDelete: 'cascade' }),
  ...CREATED_AND_UPDATED,
})

export const commentsTable = pgTable('comments', {
  id: uuid().defaultRandom().primaryKey(),
  description: text().notNull(),
  work_id: uuid('work_id')
    .notNull()
    .references(() => worksTable.id, { onDelete: 'cascade' }),
  mechanic_id: uuid('mechanic_id')
    .notNull()
    .references(() => mechanicsTable.id, { onDelete: 'cascade' }),
  ...CREATED_AND_UPDATED,
})

export const companiesTable = pgTable('companies', {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  ...CREATED_AND_UPDATED,
})

export const companyRelations = relations(companiesTable, ({ many }) => ({
  workshops: many(workshopsTable),
}))

export const workshopsTable = pgTable('workshops', {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  company_id: uuid('company_id')
    .notNull()
    .references(() => companiesTable.id, { onDelete: 'cascade' }),
  ...CREATED_AND_UPDATED,
})

export const workshopRelations = relations(workshopsTable, ({ one, many }) => ({
  mechanics: many(mechanicsTable),
  company: one(companiesTable, {
    fields: [workshopsTable.company_id],
    references: [companiesTable.id],
  }),
}))
