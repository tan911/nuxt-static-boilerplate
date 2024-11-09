<template>
	<div>
		<NuxtLayout name="base">
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
<style>
.page-enter-active {
	transition: all 1.5s;
}

.page-leave-active {
	transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
