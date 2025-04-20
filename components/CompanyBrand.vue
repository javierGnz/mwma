<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="text-xl font-semibold text-black">
    {{ props.name }}
  </div>
</template>
