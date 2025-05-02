<template>
  <header class="flex border-b border-neutral-100 py-4">
    <nav class="flex w-full items-center justify-between px-4 lg:justify-end">
      <div class="flex-none lg:hidden">
        <CompanyBrand name="Workshop" />
      </div>
      <div class="flex items-center gap-x-5">
        <div class="flex flex-row items-center gap-x-2">
          <UTooltip arrow :delay-duration="0" text="Open on GitHub">
            <UButton icon="lucide:search" variant="soft" color="neutral" />
          </UTooltip>
          <UTooltip arrow :delay-duration="0" text="Open on GitHub">
            <UButton icon="lucide:bell" variant="soft" color="neutral" />
          </UTooltip>
        </div>
        <div class="lg:hidden">
          <UButton
            icon="lucide:align-justify"
            variant="ghost"
            color="neutral"
          />
        </div>
      </div>
    </nav>
  </header>
</template>
