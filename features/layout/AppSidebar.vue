<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from "@nuxt/ui";
import { routes, profileRoutes } from "~/utils/routes";

const { t } = useI18n();

const sidebarItems: NavigationMenuItem[] = routes.map(
  ({ name, path, icon }) => ({
    icon,
    label: t(name),
    to: path,
  })
);

const profileItems: DropdownMenuItem[] = profileRoutes.map(
  ({ name, path, icon }) => ({
    icon: icon,
    label: t(name),
    to: path,
    ...(name === "logout" && { color: "error" }),
  })
);
</script>

<template>
  <div
    class="hidden h-full rounded-s-xs bg-white lg:block"
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
        <UDropdownMenu block :items="profileItems">
          <UButton color="neutral" variant="ghost" block>
            <div
              type="button"
              class="inline-flex w-full shrink-0 items-center gap-x-3 rounded-md"
            >
              <img
                class="size-8 shrink-0 rounded-full"
                src="https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?q=80&w=320&h=320&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
              />
              <div class="flex flex-col items-start font-semibold">
                Mia Hudson
                <small class="text-xs font-light text-neutral-400"
                  >Senior Developer</small
                >
              </div>
            </div>
          </UButton>
        </UDropdownMenu>
      </footer>
    </div>
  </div>
</template>
