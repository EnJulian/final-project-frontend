<script setup>

</script>

<template>
<div class="User">
    <div class="maincontainer">
      <div class="Enyatalogo">
        <img src="/src/assets/icons/logo.svg" alt="Enyata Logo" srcset="" />
      </div>
      <div class="Applicants signup">
        <h1>Applicant Sign Up</h1>
      </div>
      <div class="ErrorServer" v-show="error">{{ error }} &#9888;</div>
      <div class="Applicantform">
        <form @submit.prevent="createUser">
          <div class="inputs">
            <div>
              <label>First Name</label>
              <input
                v-model.trim="user.firstName"
                @keydown="clearError('fname')"/>
              <p v-show="fnameError">{{ fnameError }}</p>
            </div>
            <div>
              <label>Last Name</label>
              <input
                v-model.trim="user.lastName"
                @keydown="clearError('lname')" />
              <p>{{ lastError }}</p>
            </div>
            <div>
              <label>Email Address</label>
              <input
                v-model.trim="user.emailAddress"
                @keydown="clearError('email')"/>
              <p>{{ emailError }}</p>
            </div>
            <div>   
              <label>Phone Number</label>
              <input
                v-model.trim="user.phoneNumber"
                type="tel"
                @keydown="clearError('phone')"/>
              <p>{{ numberError }}</p>
            </div>
            <div class="password-wrap">
              <label>Password</label>
              <input
                :type="inputTypeIcon"
                v-model.trim="user.password"
                @keydown="clearError('password')"
              />
              <p>{{ passwordError }}</p>
              <div class="icon" @click.prevent="toggleInputIcon">
                <span v-if="inputTypeIcon == 'password'"><div class="eyelogo">
                    <img
                      src="/src/assets/icons/Eye.png"
                      alt="eye icon" srcset=""/>
                  </div>
                </span>
                <span v-else ><div class="eyelogo">
                    <img
                      src="/src/assets/icons/Eye.png"
                      alt="eye icon" srcset=""/></div></span>
              </div>
              <p>{{ passwordError }}</p>
            </div>

            <div class="password-confirm">
              <label>Confirm Password</label>
              <input
                :type="inputTypeIcon"
                v-model="user.confirmPassword"
                @keydown="clearError('confirmPassword')" />
              <p>{{ confirmError }}</p>
              <div class="icon" @click.prevent="toggleInputIcon">
                <span v-if="inputTypeIcon == 'password'"
                  ><div class="eyelogo1">
                    <img
                      src="/src/assets/icons/Eye.png"
                      alt="eye icon"
                      srcset="" />
                  </div>
                </span>
                <span v-else><div class="eyelogo1">
                    <img
                      src="/src/assets/icons/Eye.png"
                      alt="eye icon"
                      srcset=""/></div></span>
              </div>
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <h2>
          Already have an account?<router-link to="/login" ><span> Sign In</span></router-link>
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  margin-top: 100px;
  margin-bottom: 26px;
}
button {
  font-family: "Lato";
  font-size: 16px;
  line-height: 19px;
  height: 50px;
  width: 520px;
  border: none;
  margin-top: 40px;
  background: #7557d3;
  border-radius: 4px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
}
p {
  color: red;
  font-size: 12px;
  text-align: start;
  margin-top: 5px;
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
.Enyatalogo {
  text-align: center;
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
.User {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.maincontainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Applicantform {
  gap: 62px;
  justify-content: center;
}

.eyelogo {
  position: absolute;
  bottom: -8px;
  right: 14px;
  cursor: pointer;
}
.password-wrap {
  position: relative;
}

.password-confirm {
  position: relative;
}
.eyelogo1 {
  top: -40px;
  left: 350px;
  position: absolute;
  cursor: pointer;
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
.inputs {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 22px 62px;
  justify-content: center;
}
span {
  color: #1a2c56;
}
.ErrorServer {
  width: max-content;
  border-radius: 5px;
  background: #d68f8a;
  color: #fff;
  padding: 10px;
}
</style>