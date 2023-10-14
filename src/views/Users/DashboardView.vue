<script setup>
import DashboardTitleComponent from "../../components/DashboardTitleComponent.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import { onMounted, ref } from "vue";

const applicationData = ref({});
function setApplicationData(data) {
  applicationData.value = data;
}

function formatDate(dateString) {
  // Create a Date object from the input string
  const date = new Date(dateString);

  // Get the day, month, and year components
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Note: Month is zero-based
  const year = date.getUTCFullYear().toString().slice(-2);

  return `${year}.${month}.${day}`;
}

async function someOtherFunction() {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get("http://localhost:7006/api/v1/application/check", {
      headers: {
        authorization: token,
      },
    });
    console.log(response.data.data);
    setApplicationData(response.data.data[0]);
  } catch (error) {
    console.log(error);
  }
}
onMounted(async () => {
  await someOtherFunction();
});
</script>

<template>
  <div class="container">
    <DashboardTitleComponent
      cardTitle="Dashboard"
      cardText="Your Application is currently being review, you wil be notified if successful"
    />

    <div class="applicant-info">
      <div class="date">
        <h5 class="date-title">Date of Application</h5>
        <h3 class="text">{{ formatDate(applicationData.created_at) }}</h3>
        <div class="line"></div>
        <h6>4 days since applied</h6>
      </div>
      <div class="date">
        <h5 class="date-title">Application Status</h5>
        <h3 class="text">{{ applicationData.status }}</h3>
        <div class="line yellow"></div>
        <h6>We will get back to you</h6>
      </div>
    </div>

    <div class="cards">
      <div class="card">
        <h6 class="card-title">Updates</h6>
        <div class="card-content">
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      </div>
      <div class="card">
        <h6 class="card-title">Take Assessment</h6>
        <div class="card-assessment">
          <p>We have 5 days left until the next assessment Watch this space</p>

          <div>
            <button disabled>
              <RouterLink class="links" to="/assessment">Take Assessment</RouterLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 65px;
  font-family: "Lato";
  width: inherit;
  height: 100vh;
  overflow-y: scroll;
  padding: 70px 47px;
}

.applicant-info {
  display: flex;
  gap: 87px;
}

.date-title {
  color: #4f4f4f;
  font-family: "Lato";
  font-size: 14px;

  line-height: normal;
  font-style: normal;
  font-weight: 400;
}

.date {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.text {
  color: #2b3c4e;
  font-family: "Lato";
  line-height: normal;
  font-weight: 300;
  font-size: 48px;
  font-style: normal;
}

h6 {
  color: #4f4f4f;
  font-family: "Lato";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.line {
  width: 148px;
  height: 4px;
  margin-top: 8px;
  border-radius: 4px;
  background: #006df0;
}

.yellow {
  background: #f09000;
  width: 148px;
  height: 4px;
  border-radius: 4px;
}

.cards {
  display: flex;
  justify-content: space-between;
  gap: 55px;
}

.card {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 87px;
  border-radius: 4px;
  border: 1px solid #ececf9;
  padding: 34px;
}

.card-title {
  color: #2b3c4e;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.32px;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 74px;
  justify-content: center;
}

hr {
  background: #cecece;
  border: 1px solid #cecece;
}

.card-assessment {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 24px;
}

.links {
  text-decoration: none;
  color: #fff;
}

button {
  background-color: #b1b1b1;
  padding: 10px 40px;
  border-radius: 4px;
  border: none;
}

p {
  color: #4f4f4f;
  text-align: center;
  font-family: "Lato";
  font-size: 16.727px;
  max-width: 343px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
