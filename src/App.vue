<template>
  <div id="app">
    <DataTable collection="key"></DataTable>
  </div>
</template>

<script>
import DataTable from './components/DataTable.vue';

export default {
  name: 'App',
  components: {
    DataTable,
  },
  mounted() {
    console.log('App mounted');
  },
};
</script>

<style></style>
