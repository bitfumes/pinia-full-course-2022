<script setup>
import { storeToRefs } from "pinia";
import Counter from "@/components/Counter.vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
</script>

<template>
  <main>
    <div v-if="authStore.isAuthenticated">
      User name is : {{ authStore.fullname }}
    </div>
    <Counter />
  </main>
</template>
