<script setup>
import {ref} from 'vue';
import axios from "axios";
import {useRouter} from "vue-router";

const emailValue = ref("");
const passwordValue = ref("");
const router = useRouter()
    


// const adminCred = ref();

async function logAdminin(){
  try {
    const token = localStorage.getItem("token")
    const response = await axios.post("http://localhost:7006/api/v1/users/login", {
      email: emailValue.value,
      password: passwordValue.value
    }, {headers: {
      authorization: token
      }})
    console.log("res", response)
    const { first_name, last_name, id, role, email } = response.data.data;
    const user = { first_name, last_name, id, role, email };
    localStorage.setItem("token", response.data.data.token)
    localStorage.setItem("adminDetails", JSON.stringify(user))
    // const adminDetails = JSON.parse(localStorage.getItem("adminDetails"))   when you want to get admin details
    router.push({ name: "AdminDashboard" });
  }
  catch (error){
    console.log(error)
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
  <div class="content">
    <div class="container">
      <div class="main">
        <img src="../../assets/icons/logo.png">
        <p>Admin Log In</p>
      </div>

      <div class="forms">
        <div class="input-options">
          <label for="input">Email Address</label>
          <input type="text" class="field-input" v-model="emailValue" >
        </div>
        <div class="input-options">
          <label for="password">Password</label>
          <div class="password-field">
            <input :type="passwordVisible ? 'text' : 'password'" class="field-input" v-model="passwordValue">
            <span class="password-toggle" @click="togglePassword">
                            <img src="../../assets/icons/Eye.png" alt="show password"/>
                        </span>
          </div>
        </div>
        <div class="btn">
<!--          <RouterLink to="/adminDashboard">-->
            <button @click="logAdminin">Sign In</button>
<!--          </RouterLink>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  height: 100vh;
  background-color: #7557D3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  height: 624px;
  background-image: url('../../assets/icons/bglogin.svg');
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-top: 225px; */
  gap: 24px;
  padding-bottom: 69px;
}

.main p {
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
  font-family: 'Lato';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.field-input {
  border-radius: 4px;
  border: 1.5px solid #BDBDBD;
  width: 379px;
  height: 48px;
  background-color: transparent;
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
  color: #7557D3;
  font-family: 'Lato';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #fff;
  border: none;
  cursor: pointer;
}


</style>
