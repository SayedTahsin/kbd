<script setup lang="ts">
import SortableTable from "@rancher/shell/components/SortableTable/index.vue";
import BadgeStateFormatter from "@rancher/shell/components/formatter/BadgeStateFormatter.vue";
import ClusterProvider from "@rancher/shell/components/formatter/ClusterProvider.vue";

const rows = [
  {
    dbName: "m1",
    namespace: "demo",
    type: "MongoDB",
    mode: "Standalone",
    version: "6.0.12",
    replicas: "1",
    cpu: "900m / 900m",
    memory: "1Gi / 1Gi",
    storage: "2Gi / 2Gi",
    status: "Ready",
    age: 20,
    link: "/",
  },
];

const headers = [
  {
    name: "dbName",
    label: "Database Name",
    value: "dbName",
  },
  {
    name: "type",
    label: "Type",
    value: "type",
  },
  {
    name: "mode",
    label: "Mode",
    value: "mode",
  },
  {
    name: "version",
    label: "Version",
    value: "version",
  },
  {
    name: "replicas",
    label: "Replicas",
    value: "replicas",
  },
  {
    name: "cpu",
    label: "CPU (request/limit)",
    value: "cpu",
  },
  {
    name: "memory",
    label: "Memory (request/limit)",
    value: "memory",
  },
  {
    name: "storage",
    label: "Storage (request/limit)",
    value: "storage",
  },
  {
    name: "status",
    label: "Status",
    value: "status",
  },
  {
    name: "age",
    label: "Age",
    value: "age",
    sort: ["age"],
  },
];
</script>

<template>
  <div>
    <h1>Hello</h1>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <RouterLink :to="`${$route.fullPath}/overview`">Go to Overview</RouterLink>
    <RouterLink :to="`${$route.fullPath}/postgreSQL`"
      >Go to PG-Create</RouterLink
    >

    <SortableTable
      default-sort-by="error"
      :table-actions="false"
      :row-actions="false"
      :rows="rows"
      :headers="headers"
      paging
      :rowsPerPage="5"
      :loading="false"
    >
      <template #col:dbName="{ row }">
        <td>
          <router-link :to="row.link">
            {{ row.dbName }}
          </router-link>
        </td>
      </template>
      <template #header-left>
        <h1>Databases</h1>
      </template>
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
