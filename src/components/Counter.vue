<template>
  <div>
    <!-- have count value -->
    <p>Count Value : {{ store.count }}</p>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
</script>
