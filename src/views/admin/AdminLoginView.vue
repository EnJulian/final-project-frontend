<script setup>

import { ref } from "vue";


import { RouterLink, useRouter } from "vue-router";

import axios from "axios";

const emailValue = ref("");
const passwordValue = ref("");

const router = useRouter();


async function logAdminin() {
  try {
    const response = await axios.post("http://localhost:7006/api/v1/users/login", {
      email: emailValue.value,
      password: passwordValue.value,
    });

    console.log("res", response);


    const { first_name, last_name, id, role, email } = response.data.data;
    const user = { first_name, last_name, id, role, email };
    localStorage.setItem("adminToken", response.data.data.token);
    localStorage.setItem("adminDetails", JSON.stringify(user));
    
    // const adminDetails = JSON.parse(localStorage.getItem("adminDetails"))   when you want to get admin details

    await router.push({ name: "AdminDashboard" });
  } catch (error) {
    console.log(error);

  }
}

// Define a reactive property to track the password visibility
const passwordVisible = ref(false);

// Function to toggle password visibility
function togglePassword() {
  passwordVisible.value = !passwordVisible.value;
}
</script>

<template>
  <div class="container">

    <div class="wrapper">
      <div class="header">
        <img src="../../assets/icons/whiteLogo.svg">
        <p>Admin Log In</p>
      </div>

      <div class="forms">
        <div class="input-options">
          <label for="input">Email Address</label>
          <input type="text" class="field-input" v-model="emailValue">
        </div>
        <div class="input-options">
          <label for="password">Password</label>
          <div class="password-field">
            <input :type="passwordVisible ? 'text' : 'password'" class="field-input" v-model="passwordValue">
            <span class="password-toggle" @click="togglePassword">
              <img src="../../assets/icons/eyew.svg" alt="show password" />
            </span>
          </div>
        </div>
        <div class="btn">
          <button @click="logAdminin">Sign In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  background-color: #7557D3;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding-bottom: 35px;
}


.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  background-image: url('../../assets/icons/bglogin.svg');
  height: 524px;
}

.header p {
  color: #FFF;
  font-family: Lato;
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
  color: #fff;
  font-family: "Lato";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.field-input {
  border-radius: 4px;
  border: 1.5px solid #bdbdbd;
  width: 379px;
  height: 48px;
  background-color: transparent;
  padding: 20px;
  color: #fff;
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
  color: #fff;
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
  color: #7557d3;
  font-family: "Lato";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
