<template>
    <div>
        <RouterView />
    </div>
</template>

<script>
import { RouterView } from 'vue-router';
import { onBeforeMount } from 'vue';
import { useUserStore } from '@/stores/index.js';

export default {
    setup() {
        const store = useUserStore();

        onBeforeMount(async () => {
            await store.fetchUser();
        });

        return {
            RouterView
        };
    }
};
</script>

<style scoped></style>
