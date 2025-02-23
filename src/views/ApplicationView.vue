<script setup>
import { ref } from "vue";
import axios from "axios";
import FormHeaderComponent from "../components/formHeaderComponent.vue";
import { RouterLink, useRouter } from "vue-router";
import {useAuthStore} from "@/store";

const store = useAuthStore();
// Define reactive data using ref
const user = ref({
  firstNameValue: store.userData.first_name,
  lastNameValue: store.userData.last_name,
  emailAddressValue: store.userData.email,
  dateOfBirthValue: "",
  addressValue: "",
  universityValue: "",
  courseValue: "",
  cgpaValue: "",
  cvValue: null,
  photoValue: "",
});


const router = useRouter();
// Define file input properties
const fileInputs = ref({
  cvValue: { accept: "image/*,.pdf", label: "Upload CV" },
  imgValue: { accept: "image/*,.pdf", label: "Upload Photo" },
});

// Define form input properties
const formInputs = ref({
  firstNameValue: { label: "First Name", placeholder: "", readonly: true },
  lastNameValue: { label: "Last Name", placeholder: "", readonly: true },
  emailAddressValue: { label: "Email", placeholder: "", readonly: true },
  dateOfBirthValue: { label: "Date of Birth", placeholder: "dd/mm/yyyy", readonly: false },
  addressValue: { label: "Address", placeholder: "", readonly: false },
  universityValue: { label: "University", placeholder: "", readonly: false },
  courseValue: { label: "Course of Study", placeholder: "", readonly: false },
  cgpaValue: { label: "CGPA", placeholder: "", readonly: false },
});

// Define error messages using ref
const errors = ref({
  firstNameValue: "",
  lastNameValue: "",
  emailAddressValue: "",
  dateOfBirthValue: "",
  addressValue: "",
  universityValue: "",
  courseValue: "",
  cgpaValue: "",
  cvValue: "",
  photoValue: "",
});

const loading = ref(false);
const error = ref("");

// Create a function to clear error messages
const clearError = (key) => {
  errors.value[key] = "";
};

// Create a function to handle file selection
const selectFileOrImage = (event, key) => {
  fileInputs.value[key] = event.target.files[0];
};

async function apply() {
  try {
    const token = localStorage.getItem("token");
    
    const formData = new FormData();
    console.log(user.value.emailAddressValue);
    formData.append("email", user.value.emailAddressValue);
    formData.append("imageUrl", fileInputs.value.imgValue);
    formData.append("firstName", user.value.firstNameValue);
    formData.append("lastName", user.value.lastNameValue);
    formData.append("cvUrl", fileInputs.value.cvValue);
    formData.append("dateOfBirth", user.value.dateOfBirthValue);
    formData.append("address", user.value.addressValue);
    formData.append("university", user.value.universityValue);
    formData.append("course", user.value.courseValue);
    formData.append("cgpa", user.value.cgpaValue);

    console.log(formData);
    const response = await axios.post("http://localhost:7006/api/v1/application/apply", formData, {
      headers: {
        authorization: token,
      },
    });

    console.log("res", response);
    const {
      email,
      image_url,
      first_name,
      last_name,
      cv_url,
      date_of_birth,
      address,
      university,
      course,
      cgpa,
      status,
      id,
      user_id,
    } = response.data.data;
    const userDetails = {
      email,
      image_url,
      first_name,
      last_name,
      cv_url,
      date_of_birth,
      address,
      university,
      course,
      cgpa,
      status,
      id,
      user_id,
    };
    localStorage.setItem("token", response.data.data.token);
    localStorage.setItem("userApplicationDetails", JSON.stringify(userDetails));
    // const adminDetails = JSON.parse(localStorage.getItem("adminDetails"))   when you want to get admin details
    router.push({ name: "login" });
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="container">
    <FormHeaderComponent titles="Application Form" />
    <div class="form-container">
      <div class="server-error" v-show="error">{{ error }}</div>
      <div class="loader" v-if="loading"></div>
      <form @submit.prevent="apply" class="label-form" enctype="multipart/form-data">
        <div class="uploads">
          <div v-for="(input, key) in fileInputs" :key="key">
            <input
              class="fileupload"
              type="file"
              :id="key"
              :name="key"
              :accept="input.accept"
              @change="selectFileOrImage($event, key)"
              @keypress="clearError(key)"
            />
            <label class="file-label" :for="key"> + {{ input.label }}</label>
            <p v-show="errors[key]">{{ errors[key] }}</p>
          </div>
        </div>
        <div class="input-container">
          <div class="form-group">
            <div v-for="(input, key) in formInputs" :key="key">
              <label>{{ input.label }}</label>
              <input
                @keypress="clearError(key)"
                :name="key"
                v-model="user[key]"
                :placeholder="input.placeholder"
                :disabled="input.readonly"
              />
              <p v-show="errors[key]">{{ errors[key] }}</p>
            </div>
          </div>
          <button type="submit" @click="apply">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.loader {
  position: absolute;
  top: 400px;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #7557d3;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: roll 2s linear infinite;
  z-index: 3;
}

@keyframes roll {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

img {
  margin-top: 100px;
  margin-bottom: 26px;
}

button {
  font-family: "Lato";
  font-weight: 700;
  height: 50px;
  width: 379px;
  border: none;
  margin-top: 40px;
  background: #7557d3;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
.press {
  color: white;
}

h1 {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 70px;
  text-align: center;
  color: #2b3c4e;
}

input {
  width: 379px;
  height: 48px;
  left: 767px;
  top: 394px;
  margin-top: 3px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  padding-left: 10px;
}

label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-top: 20px;
  color: #4f4f4f;
}

p {
  margin-top: 5px;
  color: red;
  font-size: 12px;
  text-align: start;
}

.input-container {
  gap: 62px;
  justify-content: center;
}

.file-label {
  width: 211px;
  height: 49.97px;
  left: 494px;
  top: 328px;
  border: 1.5px dashed #2b3c4e;
  border-radius: 2.87205px;
  text-align: center;
  padding-top: 14px;
  cursor: pointer;
}

.fileupload {
  display: none;
}

.label-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
  display: block;
  text-align: start;
}

h2 {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  margin-top: 12px;
  text-align: center;
}

form {
  text-align: center;
}

.form-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px 62px;
  justify-content: center;
}

.form-container {
  padding: 50px 60px 50px 60px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 963px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  margin-top: 45px;
}

.uploads {
  display: flex;
  gap: 0 32px;
}

.server-error {
  width: max-content;
  border-radius: 5px;
  background: #d68f8a;
  color: #fff;
  padding: 10px;
  align-self: center;
}
</style>
