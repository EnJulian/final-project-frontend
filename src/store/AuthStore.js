import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { post } from "../config/ApiService";
import { setToken } from "@/config/JwtService";

export const useAuthStore = defineStore("auth", () => {
  // State declaration
  const user = ref({});
  const authError = ref();
  const isAuthenticated = ref(false);

  // getters
  const isLoggedIn = computed(() => isAuthenticated);

  const getAuthError = computed(() => authError);

  // Actions

  async function setAuth({ token, ...user }) {
    isAuthenticated.value = true;
    await setToken(token);
    user.value = user;
  }

  function setError(error) {
    authError.value = error;
  }

  function login(payload) {
    post("/users/login", payload)
      .then(async ({ data }) => {
        await setAuth(data.data);
      })
      .catch(({ response }) => {
        setError(response.data);
      });
  }

  return { user, isLoggedIn, login, getAuthError };
});
