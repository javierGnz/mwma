<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

definePageMeta({ layout: "sign" });

const schema = z.object({
	email: z.string().email("Invalid email"),
	password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
	email: undefined,
	password: undefined,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
	toast.add({
		title: "Success",
		description: "The form has been submitted.",
		color: "success",
	});
	console.log(event.data);
}
</script>

<template>
  <div class="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
    <div class="mb-8">
      <p class="mb-1">
        Welcome to <span class="text-primary-800 font-bold">Workshop</span>
      </p>
      <h1 class="text-4xl font-bold">{{ $t("login") }}</h1>
    </div>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormField :label="$t('email')" name="email" size="xl">
        <UInput v-model="state.email" class="w-full" />
      </UFormField>
      <UFormField :label="$t('password')" name="password" size="xl">
        <UInput v-model="state.password" type="password" class="w-full" />
      </UFormField>
      <UButton block size="xl" color="primary" type="submit">
        {{ $t("login") }}
      </UButton>
    </UForm>
    <div class="mt-4 flex items-center justify-center gap-2">
      <span class="text-gray-500">No Account?</span>
      <ULink to="/signin">Sign up</ULink>
    </div>
  </div>
</template>
