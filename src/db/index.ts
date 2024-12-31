import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { vehiclesTable } from './schema'

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(process.env.DATABASE_URL ?? '', {
  prepare: false,
})
export const db = drizzle(client)

async function main() {
  const vehicle: typeof vehiclesTable.$inferInsert = {
    id: '123e4567-e89b-12d3-a456-426614174000',
    brand: 'Toyota',
    model: 'Corolla',
    color: 'Red',
    year: '2021',
    version: 'LE',
    vin: '1234567890',
    license_plate: 'ABC1234',
  }

  await db.insert(vehiclesTable).values(vehicle)
  console.log('New user created!')
}

main()
