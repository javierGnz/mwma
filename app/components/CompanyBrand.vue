<script setup lang="ts">
const props = defineProps<{
	name: string;
}>();
</script>

<template>
  <div class="text-primary-700 text-xl font-semibold">
    {{ props.name }}
  </div>
</template>
