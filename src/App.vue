<script setup>
    import { RouterView } from 'vue-router'
    import MainHeader from '@/components/MainHeader.vue';
    import MainFooter from '@/components/MainFooter.vue';
</script>

<template>
    <MainHeader />
    <section class="container p-4 mx-auto h-full">
        <RouterView />
    </section>
    <MainFooter />
</template>
