<template>
    <div class="main-container">
        <div @click="close" class="background"></div>

        <div class="application-entries">
            <div class="profile-picture">
                <img src="" alt="app profile picture" />
            </div>
            <p class="modal-text">Personal Details</p>
            <hr />
            <div class="main-form">
                <div class="section-1">
                    <label for="">Name</label>
                    <input placeholder="Ify Chinke" value="fullName" type="text" readonly />

                    <label for="">Address</label>
                    <input placeholder="3 Sabo Ave, Yaba, Lagos" value="applicant.address" type="text" readonly />

                    <label for="">Course of study</label>
                    <input placeholder="Computer Science" value="applicant.course" type="text" readonly />

                    <label for="">CGPA</label>
                    <input placeholder="5.0" value="applicant.cgpa" type="text" readonly />

                    <button @click="approve">
                        Approve
                    </button>
                </div>

                <div class="section-2">
                    <label for="">Email</label>
                    <input placeholder="ify@enyata.com" value="applicant.emailAddress" type="text" readonly />

                    <label for="">University</label>
                    <input placeholder="University of Nigeria Nsukka" value="applicant.university" type="text" readonly />

                    <label for="">Date of birth</label>
                    <input placeholder="12/09/19 - 22" value="applicantDate" type="text" readonly />

                    <label for="">CV</label>
                    <input value="applicant.cv" type="text" />

                    <button @click="decline">
                        Decline
                    </button>
                </div>
            </div>
            <div>
                <p>Pending</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { ref } from "vue";

const denyModalVisibility = ref(false);
const approveModalVisibility = ref(false);

const openApproveModal = () => {
    approveModalVisibility.value = true;
}

// const store = useStore();

// const fullName = computed(() => {
//     return store.getters.getApplicant.firstName + " " + store.getters.getApplicant.lastName;
// });

// const applicant = computed(() => {
//     return store.getters.getApplicant;
// });

// const applicantDate = computed(() => {
//     return `${props.date} - ${props.age}`;
// });

function close() {
    emit("close");
}

function approve() {
    emit("approve");
}

function decline() {
    emit("decline");
}
</script>

<style scoped>
.main-container {
    display: flex;
    width: 100%;
    height: 100%;
}

.background {
    width: 80%;
    height: 1050px;
    background: rgba(3, 17, 49, 0.2);
    backdrop-filter: blur(4px);
}

.application-entries {
    width: 600px;
    background: #ffffff;
    padding: 95px 58px 145px 48px;
}

.profile-picture {
    width: 179px;
    height: 179px;
    margin-bottom: 42px;
    background-color: #7557d3;
}

.modal-text {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #7d7d7d;
    margin-bottom: 14px;
}

hr {
    width: 498px;
    height: 1px;
    background: #f2f2f2;
    margin-bottom: 32px;
    border: none;
}

.main-form {
    display: flex;
    gap: 0 32px;
}

.main-form label {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #b1b1b1;
}

.main-form input {
    width: 231px;
    height: 48px;
    border-radius: 4px;
    margin-bottom: 36px;
    border: 1px solid #cdcfd6;
    border-radius: 4px;
}

.main-form button {
    width: 125px;
    height: 48px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border-radius: 4px;
}

.section-1 button {
    background: #7557d3;
    color: #ffffff;
    border: 1px solid #cdcfd6;
    margin-left: 115px;
}

.section-2 button {
    color: #4f4f4f;
    border: 1px solid #cecece;
    background: #ffffff;
}

button {
    cursor: pointer;
}

input {
    padding: 14px 18px;
}

img {
    width: 100%;
    height: 100%;
}

.status-approved {
    color: #31d283;
}

.status-declined {
    color: red;
}

.status {
    text-align: center;
}</style>