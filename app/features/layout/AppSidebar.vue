<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { routes } from "~~/app/utils/routes";
import AppUserMenu from "./AppUserMenu.vue";

const { t } = useI18n();

const sidebarItems: NavigationMenuItem[] = routes.map(
	({ name, path, icon }) => ({
		icon,
		label: t(name),
		to: path,
	})
);
</script>

<template>
  <div
    class="hidden h-full rounded-s-xs bg-neutral-50 lg:block"
    aria-label="Sidebar"
  >
    <div class="relative flex h-full max-h-full flex-col">
      <header class="flex items-center p-4">
        <CompanyBrand name="Workshop" />
      </header>
      <nav
        class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700"
      >
        <div class="flex h-full w-full flex-col px-2">
          <UNavigationMenu orientation="vertical" :items="sidebarItems" />
        </div>
      </nav>
      <footer class="mt-auto p-2">
        <AppUserMenu />
      </footer>
    </div>
  </div>
</template>
