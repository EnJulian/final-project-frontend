<template>
    <div class="home" @click="close">
        <div class="alert-message">
            <p>Are you sure you want to approve this application?</p>
            <div class="buttons">
                <button class="btn1" @click="handleApprove">Yes</button>
                <button class="btn2">No</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from 'vue';

const applicant = ref({
    status: "Approved",
});

const close = () => {
    emit("close");
};

const handleApprove = () => {
    const userId = localStorage.getItem("userDetails");
    const token = localStorage.getItem('admin-token');

    // axios.put(`http://localhost:3000/api/v1/auth/user/${userId}`, applicant.value, {
    //     headers: {
    //         Authorization: `Basic ${token}`
    //     }
    // }).then((res) => {
    //     console.log(res);
    // }).catch((error) => {
    //     throw error;
    // });
};
</script>

<style scoped>
.home {
    width: 100%;
    height: 1050px;
    background: rgba(3, 17, 49, 0.2);
    backdrop-filter: blur(8px);
    opacity: 0.9.1;
}

.alert-message {
    width: 458px;
    height: 300px;
    background: #ffffff;
    border-radius: 4px;
    margin: 362px auto;
    z-index: 2;
}

p {
    width: 267px;
    height: 54px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    margin: 0 auto;
    padding-top: 75px;
}

.alert-message button {
    width: 125px;
    height: 48px;
    border-radius: 4px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border: none;
    margin-top: 48px;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-top: 48px;
}

.btn1 {
    background: #7557d3;
    color: #ffffff;
}

.btn2 {
    color: #4f4f4f;
    background: #ffffff;
}

button {
    cursor: pointer;
}</style>