<script setup lang="ts">
const { data } = await useFetch("/api/vehicles");
console.log(data);
</script>
<template>
  <div class="flex flex-col gap-4">
    <ULink
      v-for="vehicle in data"
      :key="vehicle.id"
      :to="`/vehicles/${vehicle.id}`"
    >
      {{ vehicle.license_plate }}
      {{ vehicle.vehicleSpecification.brand }}
    </ULink>
  </div>
</template>
