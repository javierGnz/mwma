<script setup lang="ts">
import { z } from "zod";

const schema = z.object({
	licensePlate: z.string().min(1),
	vin: z.string().min(1),
});
</script>

<template>
	<div>lol</div>
</template>
