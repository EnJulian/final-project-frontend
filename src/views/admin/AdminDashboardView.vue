<script setup>
import DashboardTitleComponent from "../../components/DashboardTitleComponent.vue";
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";

const applications = ref([]);
function setApplications(data) {
  applications.value = data;
}
async function getApplicationData() {
  const token = localStorage.getItem("adminToken");
  try {
    const response = await axios.get("http://localhost:7006/api/v1/application/", {
      headers: {
        authorization: token,
      },
    });
    console.log(response.data.data);
    setApplications(response.data.data);
  } catch (error) {
    console.log(error);
  }
}
onMounted(async () => {
  await getApplicationData();
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
        <h5 class="date-title">Current Applications</h5>
        <h3 class="text">{{ applications.length }}</h3>
        <div class="line"></div>
        <h6>Academy 2.0</h6>
      </div>
      <div class="date">
        <h5 class="date-title">Total Applications</h5>
        <h3 class="text">{{ applications.length }}</h3>
        <div class="line green"></div>
        <h6>All entries so far</h6>
      </div>
      <div class="date">
        <h5 class="date-title">Academy’s</h5>
        <h3 class="text">1</h3>
        <div class="line yellow"></div>
        <h6>So far</h6>
      </div>
    </div>

    <div class="cards">
      <div class="card1">
        <div class="card-titles">
          <h6 class="card-title">History</h6>
          <p class="subtext">Last Update 18:24, 22/08/22</p>
        </div>

        <div class="card-content">
          <div class="batches">
            <p class="batch-text">Academy Batch 1</p>
            <p class="batch-text">{{ applications.length }} <span> students</span></p>
            <p class="batch-text">started <span>11/09/15</span></p>
          </div>
        </div>
      </div>
      <div class="card">
        <h6 class="card-title">Create Assessment</h6>
        <div class="card-assessment">
          <p>Create test question for an incoming academy students</p>

          <div>
            <button disabled>Create Assessment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 70px 47px;
  display: flex;
  flex-direction: column;
  gap: 65px;
  font-family: "Lato";
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
.green {
  background: #00f026;
}

.cards {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.card {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  border-radius: 4px;
  border: 1px solid #ececf9;
  padding: 30px;
}
.card1 {
  width: 50%;
}
.card-titles {
  display: flex;
  flex-direction: column;
}
.card-title {
  color: #2b3c4e;
  font-family: "Lato";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.32px;
}
p {
  color: #4f4f4f;
  text-align: center;
  font-family: "Lato";
  font-size: 16px;
  max-width: 343px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.subtext {
  color: #4f4f4f;
  font-family: "Nunito Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  padding-top: 4px;
  text-align: start;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  width: 100%;
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
  gap: 24px;
  width: 100%;
}

.links {
  text-decoration: none;
  color: #fff;
}

button {
  background-color: #b1b1b1;
  padding: 10px 40px;
  border: none;
  color: #fff;
  border-radius: 4px;
}

.batch-text {
  color: #4f4f4f;
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.batches {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 8px;
  padding: 15px 0px;
  margin-top: 20px;
  background-color: #fff;
}

.batches:hover {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 7px solid #7557d3;
  border-radius: 8px 0px 0px 8px;
  cursor: pointer;
}
</style>
