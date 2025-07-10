<script setup lang="ts">
import SortableTable from "@rancher/shell/components/SortableTable/index.vue";

const headers = [
  {
    name: "name",
    label: "Name",
    isColVisible: true,
    isFilter: true,
    sort: ["name"],
  },
  {
    name: "description",
    label: "Description",
    isColVisible: true,
    isFilter: true,
  },
  {
    name: "type",
    label: "Type",
    isColVisible: true,
    isFilter: true,
  },
];

const rows = [
  {
    name: "First row",
    description: "This is the first row",
    type: "first type",
  },
  {
    name: "Second row",
    description: "This is another row",
    type: "first type",
  },
  {
    name: "No description",
    description: "",
    type: "second type",
  },
  {
    name: "First row",
    description: "This is the first row",
    type: "first type",
  },
  {
    name: "Second row",
    description: "This is another row",
    type: "first type",
  },
  {
    name: "No description",
    description: "",
    type: "second type",
  },
];
</script>

<template>
  <div>
    <h1>Hello</h1>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <RouterLink :to="`${$route.fullPath}/postgreSQL`"
      >Go to PG-Create</RouterLink
    >
    <br />
    <RouterLink :to="`${$route.fullPath}/overview`"
      >Go to Mongo-Create</RouterLink
    >

    <SortableTable
      :headers="headers"
      :rows="rows"
      paging
      :rowsPerPage="5"
      :loading="false"
      :subSearch="true"
      :tableAction="false"
      :rowActions="false"
    >
      <template #title><h1>Databases</h1></template>
    </SortableTable>
  </div>
</template>
<!-- 
[
  {
    "name": "name",
    "label": "Name"
  },
  {
    "name": "description",
    "label": "Description"
  },
  {
    "name": "type",
    "label": "Type"
  }
]
 -->

<!--
 [
  {
    "name": "First row",
    "description": "This is the first row",
    "type": "first type"
  },
  {
    "name": "Second row",
    "description": "This is another row",
    "type": "first type"
  },
  {
    "name": "No description",
    "description": "",
    "type": "second type"
  }
]
-->
