import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);
  const user = reactive({});

  const fullname = computed(
    () => `${user.value.first_name} ${user.value.last_name}`
  );

  function logout() {
    this.$patch((state) => {
      (state.isAuthenticated = false), (state.user = {});
    });
  }

  async function login() {
    const res = await fetch("https://reqres.in/api/users/2?delay=2");
    const { data } = await res.json();
    this.user.value = data;
    this.isAuthenticated = true;
  }

  return { login, logout, user, isAuthenticated, fullname };
});
