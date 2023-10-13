<script setup>
import { ref } from 'vue';
import {RouterLink, useRouter} from "vue-router";
import axios from "axios";
import FormHeaderComponent from '../components/formHeaderComponent.vue';

// Define a reactive property to track the password visibility
const passwordVisible = ref(false);
const passwordConfirm = ref(false);

// Function to toggle password visibility
function togglePassword() {
  passwordVisible.value = !passwordVisible.value;
}
function toggleConfirm() {
  passwordConfirm.value = !passwordConfirm.value;
}

const firstNameValue = ref("");
const lastNameValue = ref("");
const emailValue = ref("");
const phoneNumberValue = ref("");
const passwordValue = ref("");
const confirmPasswordValue = ref("");
const router = useRouter()


async function registerUser(){
  try {
    const response = await axios.post(
        "http://localhost:7006/api/v1/users/signup",
        {
          firstName: firstNameValue.value,
          lastName: lastNameValue.value,
          email: emailValue.value,
          phoneNumber: phoneNumberValue.value,
          password: passwordValue.value,
          confirmPassword: confirmPasswordValue.value
        }, {headers: {
          }})
    console.log("res", response)
    // const { first_name, last_name, id, role, email } = response.data.data;
    // const user = { first_name, last_name, id, role, email };
    // localStorage.setItem("token", response.data.data.token)
    // localStorage.setItem("adminDetails", JSON.stringify(user))
    // const adminDetails = JSON.parse(localStorage.getItem("adminDetails"))   when you want to get admin details
    router.push({ name: "login" });
  }
  catch (error){
    console.log(error)
  }
}





</script>

<template>
    <div class="container">
      <FormHeaderComponent titles="Applicant Sign up"/>
      <div class="forms">
        <div class="form-groups">
          <div class="input-group">
            <label for="input">First Name</label>
            <input type="text" class="form-input" v-model="firstNameValue">
          </div>
          <div class="input-group">
            <label for="input">Last Name</label>
            <input type="text" class="form-input" v-model="lastNameValue">
          </div>
          <div class="input-group">
            <label for="input">Email Address</label>
            <input type="text" class="form-input" v-model="emailValue">
          </div>
          <div class="input-group">
            <label for="input">Phone Number</label>
            <input type="text" class="form-input" v-model="phoneNumberValue">
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <div class="password-field">
              <input :type="passwordVisible ? 'text' : 'password'" class="form-input" v-model="passwordValue">
              <span class="password-toggle" @click="togglePassword">
                <img src="../assets/icons/Eye.png" />
              </span>
            </div>
          </div>
          <div class="input-group">
            <label for="confirmPassword">Confirm Password</label>
            <div class="password-field">
              <input :type="passwordConfirm ? 'text' : 'password'" class="form-input" v-model="confirmPasswordValue">
              <span class="password-toggle" @click="toggleConfirm">
                <img src="../assets/icons/Eye.png" />
              </span>
            </div>
          </div>
        </div>
        <div class="btn">
          <RouterLink to="/signin"><button @click="registerUser">Sign Up</button></RouterLink>
          <p>Already have an account? <RouterLink to="/signin" class="link">Sign In</RouterLink>
          </p>
        </div>

      </div>
    </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
}



.forms {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 27px;
}
.form-groups{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}
.input-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input-group label {
  color: #4F4F4F;
  font-family: 'Lato';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.form-input {
  border-radius: 4px;
  border: 1.5px solid #BDBDBD;
  width: 379px;
  height: 48px;
  padding: 20px;
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13px;
  gap: 10px;
}

button {
  color: #FFF;
  font-family: 'Lato';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 16px 233px;
  background: #7557D3;
  border: none;
  border-radius: 4px;
}

.btn p {
  color: #4F4F4F;
  font-family: 'Lato';
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
}

.link a {
  color: #1A2C56;
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
</style>
