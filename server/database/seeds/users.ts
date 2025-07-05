import { fakerES_MX as faker } from "@faker-js/faker";
import { UserInsert } from "../schema";

export const generateUsers = (): UserInsert[] =>
	Array.from({ length: 4 }, () => ({
		name: faker.person.firstName("male"),
		last_name: faker.person.lastName("male"),
		dni: faker.string.alphanumeric({ length: 9 }),
		gender: "MALE",
		email: faker.internet.email(),
		phone: faker.phone.number({ style: "international" }),
		date_of_birth: faker.date
			.birthdate({ min: 18, max: 80, mode: "age" })
			.toISOString(),
		updated_by: "seed",
	}));
