<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store";
import { RouterLink, useRouter } from "vue-router";
import FormHeaderComponent from "../components/formHeaderComponent.vue";

// Define a reactive property to track the password visibility
const passwordVisible = ref(false);
const store = useAuthStore();

// Function to toggle password visibility
function togglePassword() {
  passwordVisible.value = !passwordVisible.value;
}

const emailValue = ref("");
const passwordValue = ref("");
const router = useRouter();

async function logUserin() {
  try {
    await store.login({
      email: emailValue.value,
      password: passwordValue.value,
    });

    if (store.isAuthenticated) {
      // const hasApplication = await store.checkUserApplication(emailValue.value);
      console.log(store.userData);
      if (store.userData.isapplied) {
        alert("Login success. You have an application!");
        await router.push({ name: "dashboard" });
      } else {
        alert("Login success, but you don't have an application.");
        await router.push({ name: "application" });
      }
    } else {
      alert("Login failed");
    }
    // const { first_name, last_name, id, role, email } = store.userData;
    // const user = { first_name, last_name, id, role, email };
    // localStorage.setItem("userToken", store.userData.token);
    // localStorage.setItem("userDetails", JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <section class="container">
    <div class="header">
      <FormHeaderComponent titles="Applicant Log in" />
      <div class="forms">
        <div class="input-options">
          <label for="input">Email Address</label>
          <input type="text" class="form-input" v-model="emailValue" />
        </div>
        <div class="input-options">
          <label for="password">Password</label>
          <div class="password-field">
            <input
              :type="passwordVisible ? 'text' : 'password'"
              class="form-input"
              v-model="passwordValue"
            />
            <span class="password-toggle" @click="togglePassword">
              <img src="../assets/icons/Eye.png" />
            </span>
          </div>
        </div>
        <div class="btn">
          <button @click="logUserin">Sign In</button>
          <div class="btn-text">
            <p>
              Don’t have an account yet?
              <RouterLink to="/register" class="link">Sign Up</RouterLink>
            </p>
            <h4>Forgot Password?</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: 100vh;
}

.container p {
  color: #2b3c4e;
  font-family: "Lato";
  font-size: 24px;
  font-style: italic;
  font-weight: 500;
  line-height: normal;
}

.forms {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
}

.input-options {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input-options label {
  color: #4f4f4f;
  font-family: "Lato";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.form-input {
  border-radius: 4px;
  border: 1.5px solid #bdbdbd;
  width: 379px;
  height: 48px;
  padding: 20px;
}

/* / Additional CSS for the password toggle icon /  */
.password-field {
  position: relative;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #000;
}

/* / Style the eye icon /  */
.password-toggle img {
  width: 18px;
}

.btn {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

button {
  padding: 16px 165px 14px 165px;
  color: #fff;
  font-family: "Lato";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #7557d3;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.btn-text {
  display: flex;
  justify-content: space-between;
}

.btn-text p,
.btn-text h4 {
  color: #4f4f4f;
  font-family: "Lato";
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
}

.btn-text a {
  color: #1a2c56;
}
</style>
