<script setup>
import DashboardTitleComponent from '../../components/DashboardTitleComponent.vue';
import { RouterLink } from 'vue-router';
import { ref, computed } from "vue";

const currentQuestionIndex = ref(0);

const questions = [
  {
    question: "What is the capital of France?",
    options: ["A. Paris", "B. London", "C. Berlin", "D. Madrid"],
    correctAnswer: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["A. Earth", "B. Mars", "C. Venus", "D. Jupiter"],
    correctAnswer: 1,
  },
  // Add more questions here
];

const currentQuestion = computed(() => {
  return questions[currentQuestionIndex.value];
});

const currentQuestionNumber = computed(() => {
  return currentQuestionIndex.value + 1;
});

const isLastQuestion = computed(() => {
  return currentQuestionIndex.value === questions.length - 1;
});

function nextQuestion() {
  if (currentQuestionIndex.value < questions.length - 1) {
    currentQuestionIndex.value++;
  }
}

function previousQuestion() {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
  }
}
</script>

<template>
  <div class="container">
    <div class="header">
      <DashboardTitleComponent cardTitle="Take Assessment"
        cardText="Click the finish button below to submit assessment, you can go back at any time to edit your answers." />

      <div class="timer">
        <h3 class="heading">Timer</h3>
        <h4 class="time">
          <span class="hour">00</span><span class="minutes">mins</span>
          <span class="hour">000</span><span class="minutes">sec</span>
        </h4>
      </div>
    </div>

    <div class="questions">
      <h1>Question {{ currentQuestionNumber }}</h1>

      <h2>{{ currentQuestion.question }}</h2>

    </div>
    <div class="answers">
      <div class="form-group checkboxes"  v-for="(option, index) in currentQuestion.options" :key="index">
        <input type="radio" name="answers" id=""><label> {{ option }} </label>
      </div>
    </div>
    <div class="next-btn-container">
      <button class="previous" @click="previousQuestion" :disabled="currentQuestionIndex === 0">
        Previous
      </button>
      <button class="next" @click="nextQuestion" :disabled="currentQuestionIndex === questions.length - 1">
        Next
      </button>
    </div>
    <div class="btn-container">
      <button class="finish" @click="finishAssessment"
          :disabled="!isLastQuestion">Finish</button>
    </div>

  </div>
</template>

<style scoped>
.container{
  padding: 70px 47px;
  height: 100vh;
}
.header {
  display: flex;
  justify-content: space-between;
}

.heading {
  color: #4F4F4F;
  font-family: 'Lato';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.time {

  font-size: 48px;
  font-style: normal;
  font-weight: 300;
}

.minutes {
  color: #4F4F4F;
  font-family: 'Lato';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
}

.time .hour{
        color: #2B3C4E;
        text-align: center;
        font-family: 'Lato';
        font-size: 48px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

.questions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 48px;
  gap: 14px;
  text-align: left;
}

.questions h1 {
  color: #2B3C4E;
  font-family: 'Lato';
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  line-height: normal;
}

.questions h2 {
  color: #2B3C4E;
  font-family: 'Lato';
  font-size: 24px;
  font-style: italic;
  font-weight: 500;
  line-height: normal;
}

.answers {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 10px;
}
.checkboxes input[type="radio"] {
  cursor: pointer;
  appearance: none;
  height: 10px;
  width: 10px;
  background-color: #fff;
  border: 1px solid #2b3c4e;
  -webkit-appearance: none;
}
input[type="radio"]:checked {
  background-color: black;
}
.form-group{
  display: flex;
  gap: 10px;
  float: left;
  align-items: center;
}

.next-btn-container {
  padding-top: 66px;
  display: flex;
  justify-content: center;
  gap: 529px;
  padding-bottom: 75px;
}

.previous {
  color: #211F26;
  font-family: 'Lato';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #fff;
  stroke-width: 1px;
  stroke: rgba(0, 0, 0, 0.25);
  padding: 10px 31px 10px 32px;
  border-radius: 4px;
}
button{
  cursor: pointer;
}
.next {
  color: #FFF;
  font-family: 'Lato';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #7557D3;
  border: none;
  border-radius: 4px;
  padding: 10px 44px 10px 46px;
}

.btn-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.finish {
  color: #FFF;
  font-family: 'Lato';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #CECECE;
  padding: 11px 81px;
  border-radius: 4px;
  border: none;
}
</style>