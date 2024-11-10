<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'

const route = useRoute()

function initSeoMeta() {
    useSeo({
        title: route.meta.title as string,
        ogTitle: route.meta.ogTitle as string,
        description: route.meta.description as string,
        ogDescription: route.meta.ogDescription as string,
        ogImage: route.meta.ogImage as string,
    })
}

initSeoMeta()
watch(route, initSeoMeta)
</script>
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
