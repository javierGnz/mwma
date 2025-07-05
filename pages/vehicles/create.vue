<script setup lang="ts">
import type { BreadcrumbItem, FormSubmitEvent } from "@nuxt/ui";
import * as z from "zod";

const schema = z.object({
	licensePlate: z.string(),
	vin: z.string(),
});

const items = ref<BreadcrumbItem[]>([
	{
		label: "Home",
		icon: "i-lucide-house",
	},
	{
		label: "Components",
		icon: "i-lucide-box",
		to: "/components",
	},
	{
		label: "Breadcrumb",
		icon: "i-lucide-link",
		to: "/components/breadcrumb",
	},
]);

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
	licensePlate: undefined,
	vin: undefined,
});

const handleSubmit = async (event: FormSubmitEvent<Schema>) => {
	const rest = await $fetch("/api/vehicles", {
		method: "post",
		body: event.data,
	});
};
</script>

<template>
	<div>
		<div class="mb-6">
			<div class="grid grid-cols-1 items-start gap-4">
				<div class="shrink">
					<UBreadcrumb :items="items" />
					<h2 class="mb-1 text-3xl font-bold">{{ $t("add_vehicle") }}</h2>
					<p class="text-neutral-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit
					</p>
				</div>
			</div>
		</div>
		<UForm :schema="schema" :state="state" class="space-y-4" @submit="handleSubmit">
    	<UFormField label="License Plate" name="licensePlate">
      	<UInput v-model="state.licensePlate" />
    	</UFormField>
			<UFormField label="VIN" name="vin">
				<UInput v-model="state.vin" />
			</UFormField>
			<UButton type="submit">
				Submit
			</UButton>
		</UForm>
	</div>
</template>
