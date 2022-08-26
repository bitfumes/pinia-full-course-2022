<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

function logout() {
  authStore.$patch((state) => {
    (state.isAuthenticated = false), (state.user = {});
  });
}

function login() {
  authStore.$reset();
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click="logout" v-if="authStore.isAuthenticated">Logout</button>
        <button @click="login" v-else>Login</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
