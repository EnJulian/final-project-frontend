<script setup>
import { ref, computed } from "vue";
import axios from "axios";
const selectedMinute = ref("");
const selectedSeconds = ref("");

const getMinutes = computed(() => {
  let minutesArray = [];
  for (let i = 0; i <= 60; i++) {
    if (i < 10) {
      i = i.toString().padStart(2, "0");
    }
    minutesArray.push(i);
  }
  return minutesArray;
});
const getSeconds = computed(() => {
  let secondsArray = [];
  for (let i = 0; i <= 60; i++) {
    i = i.toString().padStart(3, "0");
    secondsArray.push(i);
  }
  return secondsArray;
});

async function updateTime() {
  const token = localStorage.getItem("adminToken");
  const timerInSeconds = Number(selectedMinute.value * 60) + Number(selectedSeconds.value);
  try {
    const response = await axios.patch(
      `http://localhost:7006/api/v1/users/update/${adminDetails.id}`,
      {
        time_allocated: timerInSeconds,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("res", response);
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="container">
    <h3>Timer Setting</h3>
    <hr />
    <h4>Set Time</h4>

    <form @submit.prevent="save()">
      <div class="time">
        <div class="select">
          <div class="minute">
            <select name="minute" id="" v-model="selectMinute">
              <option :value="min" v-for="(min, index) in getMinutes" :key="index">
                {{ min }}
              </option>
            </select>
          </div>
          <div class="min">
            <p>min</p>
          </div>
        </div>
        <div class="select">
          <div class="seconds">
            <select name="seconds" id="" v-model="selectSeconds">
              <option :value="sec" v-for="(sec, index) in getSeconds" :key="index">
                {{ sec }}
              </option>
            </select>
          </div>
          <div class="sec">
            <p>sec</p>
          </div>
        </div>
      </div>
      <button @click="updateTime" type="submit">Save</button>
    </form>
  </div>
</template>

<style scoped>
.datalist-table {
  /* border: 10px black solid; */
  padding: 10px;
}
#countries {
  display: none;
}
.time {
  display: flex;
  gap: 0 40px;
  margin-top: 10px;
  margin-bottom: 34px;
}
img {
  padding: 10px 40px 0px 10px;
}
button {
  background: #7557d3;
  border-radius: 3px;
  height: 38px;
  width: 127px;
  border-radius: 3px;
  color: white;
  border: none;
  cursor: pointer;
}

h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #4a4a4a;
}
h4 {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}
h5 {
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  color: #2b3c4e;
}
hr {
  width: 724px;
  height: 1px;
  left: 340px;
  top: 432px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  margin-top: 16px;
  margin-bottom: 100px;
}
.minute,
.seconds {
  width: 100px;
  font-family: "Lato";
  display: grid;
  grid-template-areas: "minute";
  align-items: center;
}
select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  font-family: inherit;
  font-weight: 300;
  font-size: 45px;
  cursor: inherit;
  line-height: inherit;
  outline: none;
}
option {
  color: #000;
  font-size: 16px;
}

.minute::after,
.seconds::after {
  content: url("../assets/icons/Polygon.svg");
  justify-self: end;
}

select,
.minute:after,
.seconds:after {
  grid-area: select;
}
p {
  font-size: 12px;
}
.select {
  position: relative;
  display: flex;
  align-items: center;
}
.min,
.sec {
  position: absolute;
  bottom: 0;
  left: 50px;
}
.sec {
  position: absolute;
  left: 75px;
}
</style>
