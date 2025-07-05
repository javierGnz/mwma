<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
import { profileRoutes } from "~/utils/routes";

const { t } = useI18n();

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
  <UDropdownMenu block :items="profileItems">
    <UButton color="neutral" variant="ghost" block>
      <div
        type="button"
        class="inline-flex w-full shrink-0 items-center gap-x-3 rounded-md"
      >
        <UAvatar
          src="https://github.com/benjamincanac.png"
          alt="Benjamin Canac"
        />
        <div class="flex flex-col items-start font-semibold">
          Benjamin Canac
          <small class="text-xs font-light text-neutral-400"
            >Senior Developer</small
          >
        </div>
      </div>
    </UButton>
  </UDropdownMenu>
</template>
