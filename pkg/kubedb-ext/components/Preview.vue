<template>
  <div>
    <h2 class="text-lg font-bold mb-2">{{ title ?? "Preview" }}</h2>
    <pre class="bg-gray-100 p-4 rounded overflow-auto">{{ yamlOutput }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import yaml from "js-yaml";

interface Props {
  jsonData: Record<string, any>;
  title?: string;
}

const props = defineProps<Props>();

const yamlOutput = computed(() => {
  try {
    return yaml.dump(props.jsonData);
  } catch (e) {
    return `Error converting JSON to YAML: ${e}`;
  }
});
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
