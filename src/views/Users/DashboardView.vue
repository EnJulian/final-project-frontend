<script setup>
import DashboardTitleComponent from '../../components/DashboardTitleComponent.vue';
import { RouterLink } from 'vue-router'


</script>

<template>
    <div class="container">
        <DashboardTitleComponent cardTitle="Dashboard"
            cardText="Your Application is currently being review, you wil be notified if successful" />

        <div class="applicant-info">
            <div class="date">
                <h5 class="date-title">Date of Application</h5>
                <h3 class="text">09.09.19</h3>
                <div class="line"></div>
                <h6>4 days since applied</h6>
            </div>
            <div class="date">
                <h5 class="date-title">Application Status</h5>
                <h3 class="text">Pending</h3>
                <div class="line yellow"></div>
                <h6>We will get back to you</h6>
            </div>
        </div>

        <div class="cards">
            <div class="card">
                <h6 class="card-title">Updates</h6>
                <div class="card-content">
                    <hr>
                    <hr>
                    <hr>
                    <hr>
                </div>
            </div>
            <div class="card">
                <h6 class="card-title">Take Assessment</h6>
                <div class="card-assessment">
                    <p>
                        We have 5 days left until the next assessment Watch this space
                    </p>
                    
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
    font-family: 'Lato';
   
}

.applicant-info {
    display: flex;
    gap: 87px;
}

.date-title {
    color: #4F4F4F;
    font-family: 'Lato';
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
    color: #2B3C4E;
    font-family: 'Lato';
    line-height: normal;
    font-weight: 300;
    font-size: 48px;
    font-style: normal;
    
}

h6 {
    color: #4F4F4F;
    font-family: 'Lato';
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
    background: #006DF0;
   
}

.yellow {
    background: #F09000;
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
    width: 482px;
    height: 453px;
    display: flex;
    flex-direction: column;
    gap: 87px;
    border-radius: 4px;
    border: 1px solid #ECECF9;
    padding: 34px;
    
}

.card-title {
    color: #2B3C4E;
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
    background-color: #B1B1B1;
    padding: 10px 40px;
}

p {
    color: #4F4F4F;
    text-align: center;
    font-family: 'Lato';
    font-size: 16.727px;
    max-width: 343px;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
}
</style>