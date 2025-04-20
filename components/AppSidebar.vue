<script setup lang="ts">
import { routes } from '@/utils/routes'

const sidebarItems = routes.map(({ name, path }) => ({
  label: name,
  to: path,
}))
</script>

<template>
  <div class="hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 w-64
hs-overlay-open:translate-x-0
-translate-x-full transition-all duration-300 transform
h-full
hidden
 top-0 start-0 bottom-0 z-60
bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700" aria-label="Sidebar">
    <div class="relative flex flex-col h-full max-h-full">
      <header class="p-4 flex items-center">
        <div class="flex-none font-semibold text-xl dark:text-white" aria-label="Brand">Brand</div>
      </header>
      <nav
        class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div class="pb-0 px-2 w-full flex flex-col">
          <UNavigationMenu orientation="vertical" :items="sidebarItems" />
        </div>
      </nav>
      <footer class="mt-auto p-2 border-t border-gray-200 dark:border-neutral-700">
        <div class="hs-dropdown [--strategy:absolute] [--auto-close:inside] relative w-full inline-flex">
          <button id="hs-sidebar-footer-example-with-dropdown" type="button"
            class="w-full inline-flex shrink-0 items-center gap-x-2 p-2 text-start text-sm text-gray-800 rounded-md hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
            <img class="shrink-0 size-5 rounded-full"
              src="https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?q=80&w=320&h=320&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Avatar">
            Mia Hudson
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>