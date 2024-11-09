<script setup lang="ts">
const isMenuOpenOnMobile = ref(false);

function toggleMenuVisibility() {
	isMenuOpenOnMobile.value = !isMenuOpenOnMobile.value;
}
</script>

<template>
	<div>
		<header class="relative z-100">
			<div
				class="px-3 py-4 flex items-center justify-between md:py-5 md:px-0 md:max-w-5xl md:mx-auto"
			>
				<div class="text-center"><h1 class="text-2xl">Logo</h1></div>
				<MobileNavigation
					@toggle-menu-on-mobile="toggleMenuVisibility"
					:is-menu-open="isMenuOpenOnMobile"
				/>
				<nav class="hidden md:flex">
					<ul role="menubar" class="flex items-center gap-2">
						<li role="none">
							<NuxtLink
								to="/"
								role="menuitem"
								class="block p-1.5 rounded-md hover:bg-gray-200"
								>Page One</NuxtLink
							>
						</li>
						<li role="none">
							<NuxtLink
								to="/about"
								role="menuitem"
								class="block p-1.5 rounded-md hover:bg-gray-200"
								>Page Two</NuxtLink
							>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		<TransitionGroup name="fade-page">
			<div
				v-if="isMenuOpenOnMobile"
				class="fixed inset-0 bg-black opacity-30 z-[-1] pointer-events-auto"
				@click="toggleMenuVisibility"
			></div>
		</TransitionGroup>
	</div>
</template>
<style scoped>
.fade-page-enter-active,
.fade-page-leave-active {
	transition: opacity 0.4s ease;
}

.fade-page-enter-from,
.fade-page-leave-to {
	opacity: 0;
}
</style>
