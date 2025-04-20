<script setup lang="ts">
import { routes, profileRoutes } from "~/utils/routes";

const sidebarItems = routes.map(({ name, path }) => ({
  label: name,
  to: path,
}));

const profileItems = profileRoutes.map(({ name, path }) => ({
  label: name,
  to: path,
}));
</script>

<template>
  <div
    class="hidden h-full border-e border-gray-200 bg-white lg:block"
    aria-label="Sidebar"
  >
    <div class="relative flex h-full max-h-full flex-col">
      <header class="flex items-center p-4">
        <CompanyBrand name="Workshop" />
      </header>
      <nav
        class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700"
      >
        <div class="flex w-full flex-col px-2">
          <UNavigationMenu orientation="vertical" :items="sidebarItems" />
        </div>
      </nav>
      <footer
        class="mt-auto border-t border-gray-200 p-2 dark:border-neutral-700"
      >
        <UDropdownMenu
          block
          :items="profileItems"
          :ui="{
            content: 'w-48',
          }"
        >
          <UButton color="neutral" variant="outline" block>
            <div
              id="hs-sidebar-footer-example-with-dropdown"
              type="button"
              class="inline-flex w-full shrink-0 items-center gap-x-2 rounded-md p-2 text-start text-sm text-gray-800"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <img
                class="size-5 shrink-0 rounded-full"
                src="https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?q=80&w=320&h=320&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
              />
              Mia Hudson
            </div>
          </UButton>
        </UDropdownMenu>
      </footer>
    </div>
  </div>
</template>
