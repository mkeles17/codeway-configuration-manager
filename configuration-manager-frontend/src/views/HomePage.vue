<template>
    <div>
        <NavigationBar />
        <div class="centered-container">
        <ParametersTable class="parameters-table"/>
    </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import ParametersTable from '@/components/ParametersTable.vue';

export default {
    name: 'HomePage',
    components: {
        ParametersTable,
        NavigationBar
    },
    setup() { }
};
</script>

<style lang="scss" scoped>
.centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.parameters-table {
    box-sizing: border-box;
    margin: 1rem 2rem;
    width: 100;
}

</style>
