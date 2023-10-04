<template>
    <div @click="close" class="home">
        <div class="alert-message">
            <p>Are you sure you want to decline this application?</p>

            <div class="buttons">
                <button class="btn1">Yes</button>
                <button class="btn2">No</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const applicant = ref({
    status: "Declined",
});

const close = () => {
    emit("close");
};

</script>


<style>

</style>