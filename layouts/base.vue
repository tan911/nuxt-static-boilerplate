<template>
    <div class="flex flex-col min-h-screen antialiased">
        <Header></Header>
        <main class="flex-grow px-3 py-2 md:px-0 md:max-w-5xl md:mx-auto">
            <slot></slot>
        </main>
        <Footer></Footer>
    </div>
</template>
