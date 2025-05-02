<script setup lang="ts">
import AppNavbar from "~/features/layout/AppNavbar.vue";
import AppSidebar from "~/features/layout/AppSidebar.vue";
</script>

<template>
  <UApp>
    <div class="grid min-h-dvh grid-cols-1 lg:grid-cols-[250px_1fr]">
      <AppSidebar />
      <div class="flex flex-col bg-neutral-50 lg:items-center">
        <div class="lg:container lg:px-8 lg:py-4">
          <AppNavbar />
        </div>
        <main class="p-4 lg:container lg:px-8">
          <slot />
        </main>
      </div>
    </div>
  </UApp>
</template>
