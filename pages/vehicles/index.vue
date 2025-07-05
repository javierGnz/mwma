<script setup lang="ts">
const {
	status,
	data: { value: vehicles },
} = await useFetch("/api/vehicles");

const items = ref(["Backlog", "Todo", "In Progress", "Done"]);
const value = ref("Backlog");
</script>

<template>
  <div>
    <div class="mb-6">
      <div class="grid grid-cols-[1fr_auto] items-start gap-4">
        <div class="shrink">
          <h2 class="mb-1 text-3xl font-bold">{{ $t("vehicles") }}</h2>
          <p class="text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eius dolore ullam vel voluptas eum totam nam accusantium? Impedit
            architecto incidunt ea commodi, est vero ratione error minus
            asperiores aspernatur!
          </p>
        </div>
        <UButton color="primary" to="/vehicles/create">{{
          $t("add_vehicle")
        }}</UButton>
      </div>
    </div>
    <UCard variant="outline">
      <div class="flex pb-2">
        <USelect v-model="value" :items="items" class="w-48" />
      </div>
      <USeparator />
      <template v-if="status === 'pending'">
        <USkeleton class="h-4 w-full" />
      </template>
      <UTable v-else :data="vehicles" class="flex-1" />
    </UCard>
  </div>
</template>
