<script setup>
import formHeaderComponent from '../components/formHeaderComponent.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

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

// User form data
const user = ref({
  firstNameValue: '',
  lastNameValue: '',
  emailAddressValue: '',
  phoneNumberValue: '',
  passwordValue: '',
  confirmPasswordValue: '',
});
const fnameError = ref("");
const lastError = ref("");
const emailError = ref("");
const numberError = ref("");
const passwordError = ref("");
const confirmError = ref("");
// const error = ref("");
const router = useRouter(); // Vue Router instance


const showError = (errorRef, message) => {
  errorRef.value = message;
  setTimeout(() => {
    errorRef.value = '';
  }, 15000); // Clear the error after 5 seconds (5000 milliseconds)
};

async function addApplicant() {
  if (user.value.firstNameValue.length < 2) {
    showError(fnameError, 'First name not valid');
    console.log(fnameError)
  }

  if (user.value.lastNameValue.length < 2) {
    showError(lastError, 'Last name not valid!');
    console.log(lastError)
  }

  if (!user.value.emailAddressValue.includes('@')) {
    showError(emailError, 'Email address not valid!');
    console.log(emailError)
  }

  if (user.value.phoneNumberValue.length < 10) {
    showError(numberError, 'Phone number not valid!');
    console.log(numberError)
  }

  if (user.value.passwordValue.length < 8) {
    showError(passwordError, 'Password must be more than 8 characters!');
    console.log(passwordError)
  }

  if (user.value.passwordValue !== user.value.confirmPasswordValue) {
    showError(confirmError, 'Confirm password must be the same as Password');
    console.log(confirmError)
  }
  try {

    const token = localStorage.getItem('token');
    const response = await axios.post(
      'http://localhost:7006/api/v1/users/signup',
      {
        first_name: user.value.firstNameValue,
        last_name: user.value.lastNameValue,
        email: user.value.emailAddressValue,
        phone_number: user.value.phoneNumberValue,
        password: user.value.passwordValue,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);

    const { first_name, last_name, email, phone_number, token: authToken } = response.data.data;
    const userDetails = { first_name, last_name, email, phone_number };

    localStorage.setItem('token', authToken);
    localStorage.setItem('applicantDetails', JSON.stringify(userDetails));

    await router.push({ name: 'login' });
  } catch (error) {
    console.error(error);
    showError(error, 'Error occurred. Please try again later.'); // Show error for 5 seconds
  }
}
</script>



<template>
  <section>

    <div class="container">
        <formHeaderComponent titles="Applicant Sign up"/>
      <div class="forms">
        <div class="forms-layout">
          <div class="input-options">
            <label for="input">First Name</label>
            <input type="text" v-model="user.firstNameValue" class="form-input">
            <p>{{ fnameError }}</p>
          </div>
          <div class="input-options">
            <label for="input">Last Name</label>
            <input type="text" v-model="user.lastNameValue" class="form-input">
            <p>{{ lastError }}</p>
          </div>
        </div>
        <div class="forms-layout">
          <div class="input-options">
            <label for="input">Email Address</label>
            <input type="text" v-model="user.emailAddressValue" class="form-input">
            <p>{{ emailError }}</p>
          </div>
          <div class="input-options">
            <label for="input">Phone Number</label>
            <input type="text" v-model="user.phoneNumberValue" class="form-input">
            <p>{{ numberError }}</p>
          </div>
        </div>
        <div class="forms-layout">
          <div class="input-options">
            <label for="password">Password</label>
            <div class="password-field">
              <input :type="passwordVisible ? 'text' : 'password'" v-model="user.passwordValue" class="form-input">
              <span class="password-toggle" @click="togglePassword">
                <img src="../assets/icons/Eye.png" />
              </span>
            </div>
            <p>{{ passwordError }}</p>
          </div>
          <div class="input-options">
            <label for="confirmPassword">Confirm Password</label>
            <div class="password-field">
              <input :type="passwordConfirm ? 'text' : 'password'" v-model="user.confirmPasswordValue" class="form-input">
              <span class="password-toggle" @click="toggleConfirm">
                <img src="../assets/icons/Eye.png" />
              </span>
            </div>
            <p>{{ confirmError }}</p>
          </div>
        </div>
        <div class="btn">
          <button @click="addApplicant">Sign Up</button>
          <p>Already have an account? <RouterLink to="/signin" class="link">Sign In</RouterLink>
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
  margin-bottom: 240px;
}



.forms {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 27px;
}

.forms-layout {
  display: flex;
  gap: 62px;
}

.input-options {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input-options label {
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
