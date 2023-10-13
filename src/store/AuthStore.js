import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { post, get } from "@/config/ApiService";
import { setToken } from "@/config/JwtService";

export const useAuthStore = defineStore("auth", () => {
  // State declaration
  const userData = ref({});
  const authError = ref();
  const isAuthenticated = ref(false);

  // getters
  const isLoggedIn = computed(() => isAuthenticated);

  const getAuthError = computed(() => authError);

  // Actions

  async function setAuth({ token, ...user }) {
    userData.value = { ...user };
    isAuthenticated.value = true;
    await setToken(token);
    
  }
  
  // function setUserData(data){
  //   userData.value = data
  // }

  function setError(error) {
    authError.value = error;
  }

  function login(payload) {
    return post("/users/login", payload)
      .then(async ({ data }) => {
        await setAuth(data.data);
        localStorage.removeItem('userDetails')
        localStorage.setItem("userDetails", JSON.stringify(data.data));
        console.log(data.data)
      })
      .catch(({ response }) => {
        setError(response.data);
        console.log(response.data)
      });
  }

  async function checkUserApplication(payload) {
    try {
      const result = await get("/application/check", payload);

      // Check if the user has an application
      const hasResult = !!result;

      // If the user has an application, set the user's authentication
      if (hasResult) {
        await setAuth(payload);
      }

      return hasResult;
    } catch (error) {
      console.error("Error checking user application:", error);
      return false; // Return false if an error occurs during the request
    }
  }

  return { userData, isLoggedIn, login, checkUserApplication, getAuthError, isAuthenticated };
});
