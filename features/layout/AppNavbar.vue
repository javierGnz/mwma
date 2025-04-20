<template>
  <header class="flex border-b border-gray-200 bg-white py-4">
    <nav class="flex w-full items-center justify-between px-4 lg:justify-end">
      <div class="flex-none lg:hidden">
        <CompanyBrand name="Workshop" />
      </div>
      <div class="flex items-center gap-x-5">
        <div class="flex flex-row items-center gap-x-2">
          <UButton
            icon="lucide:wand-sparkles"
            variant="ghost"
            color="secondary"
          />
          <UButton icon="lucide:search" variant="ghost" color="secondary" />
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
