import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: true,
    user: {
      name: "Sarthak",
      email: "sarthak@bitfumes.com",
    },
  }),
});
