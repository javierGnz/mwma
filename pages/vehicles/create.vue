<script setup lang="ts">
import type { BreadcrumbItem } from "@nuxt/ui";

async function submit() {
  const rest = await $fetch("/api/vehicles", {
    method: "post",
    body: { test: 123 },
  });

  console.log("s", rest);
}

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
    <UButton color="neutral" variant="outline" @click="submit">Button</UButton>
  </div>
</template>
