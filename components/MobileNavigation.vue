<script setup lang="ts">
defineProps({
    isMenuOpen: Boolean,
})
</script>

<template>
    <div class="flex items-center md:hidden">
        <button
            @click="$emit('toggleMenuOnMobile')"
            type="button"
            class="p-2 border border-gray-100 bg-gray-50 rounded-md transition ease-in-out delay-150 hover:bg-gray-100"
        >
            <span class="sr-only">Open Menu</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-gray-500"
            >
                <path d="M3 12h18" />
                <path d="M3 18h18" />
                <path d="M3 6h18" />
            </svg>
        </button>

        <TransitionGroup name="bounce-navigation">
            <nav
                v-if="isMenuOpen"
                class="fixed top-0 left-0 right-0 z-100 flex flex-col gap-3 bg-white px-3 py-4"
            >
                <button
                    @click="$emit('toggleMenuOnMobile')"
                    type="button"
                    class="w-12 h-12 flex items-center p-2 border border-gray-100 bg-gray-50 rounded-md transition ease-in-out delay-150 self-end hover:bg-gray-100"
                >
                    <span class="sr-only">Close Menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-gray-500 w-full"
                    >
                        <polyline points="4 14 10 14 10 20" />
                        <polyline points="20 10 14 10 14 4" />
                        <line x1="14" x2="21" y1="10" y2="3" />
                        <line x1="3" x2="10" y1="21" y2="14" />
                    </svg>
                </button>

                <ul role="mobile-menubar" class="flex flex-col items-center mt-5 mb-10">
                    <li role="none" class="w-full text-center">
                        <NuxtLink
                            to="/"
                            @click="$emit('toggleMenuOnMobile')"
                            role="mobile-menuitem"
                            class="block w-full px-1 py-3 rounded-md text-2xl hover:bg-gray-100"
                            >Page One</NuxtLink
                        >
                    </li>
                    <li role="none" class="w-full text-center">
                        <NuxtLink
                            to="/about"
                            @click="$emit('toggleMenuOnMobile')"
                            role="mobile-menuitem"
                            class="block w-full px-1 py-3 rounded-md text-2xl transition ease-in-out delay-100 hover:bg-gray-100"
                            >Page Two</NuxtLink
                        >
                    </li>
                </ul>
            </nav>
        </TransitionGroup>
    </div>
</template>
<style scoped>
.bounce-navigation-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-navigation-leave-active {
    animation: bounce-in 0.4s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>
