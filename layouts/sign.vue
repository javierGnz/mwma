<script setup lang="ts"></script>
<template>
  <UApp>
    <div class="flex min-h-screen flex-col md:flex-row">
      <div
        class="bg-primary-800 relative overflow-hidden p-8 text-white md:w-1/2 md:p-12"
      >
        <!-- <div class="relative z-10">
        </div> -->
        <div class="absolute top-1/3 right-0 translate-x-1/4 transform">
          <div class="relative h-64 w-64">
            <svg
              class="text-primary-500 absolute top-10 left-10 h-16 w-16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>

            <svg
              class="text-primary-400 absolute right-10 bottom-10 h-20 w-20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>

            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            >
              <div class="relative h-40 w-40">
                <svg
                  class="text-secondary-400 h-40 w-40 rotate-45 transform"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                  />
                  <path
                    d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                  />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <svg
          class="text-primary-600 absolute bottom-10 left-10 h-24 w-24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      </div>
      <div class="flex items-center justify-center p-8 md:w-1/2 md:p-12">
        <slot />
      </div>
    </div>
  </UApp>
</template>
