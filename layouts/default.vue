<template>
  <UApp>
  <div class="grid min-h-dvh grid-cols-1 lg:grid-cols-[250px_1fr]">
    <AppSidebar />
    	<div class="flex flex-col lg:items-center">
			<div class="lg:container lg:p-4">
				lorem
			</div>
			<main class="p-4 lg:container">
				<slot />
			</main>
		</div>
  </div>
  </UApp>
</template>
