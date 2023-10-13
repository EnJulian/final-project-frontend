<script setup>
import { RouterLink, useRoute, RouterView } from 'vue-router';
import {useAuthStore} from "@/store";
const route = useRoute();
const store = useAuthStore();
const userDetailsLS = localStorage.getItem("userDetails")
const userDetails = JSON.parse(userDetailsLS);

</script>

<template>
  <div class="layoutPart">
    
      <div class="sideNavigation">
        <div class="profilePart">
          <img class="profile-img" src="@/assets/icons/leftbanner.png" alt="profile picture" />
          <div class="details">
            <h1 class="profile-name">{{ userDetails.first_name }} {{ userDetails.last_name }}</h1>
            <p class="profile-gmail">{{ userDetails.email }}</p>
          </div>
        </div>

        <div class="sideNavigation-links">
          <RouterLink class="links" :to="{ name: 'dashboard' }" active-class="active">
            <div class="icons"><img src="@/assets/icons/dashboardicon.svg" alt="" /></div>
            <p class="link-text">Dashboard</p>
          </RouterLink>

          <RouterLink class="links" :to="{ name: 'assessment' }" active-class="active">
            <div class="icons"><img src="@/assets/icons/assessment.svg" alt="" /></div>
            <p class="link-text">Assessment</p>
          </RouterLink>

          <RouterLink class="links logout" :to="{ name: 'home' }">
            <div class="icons"><img src="@/assets/icons/logouticon.svg" alt="" /></div>
            <p class="link-text">Log Out</p>
          </RouterLink>
        </div>
      </div>
    
    <div class="rightContent">
      <RouterView />
    </div>
  </div>
</template>


<style scoped>
.sideNavigation {
  width: 292px;
  height: 100vh;
  font-family: 'Lato';
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  
}
.layoutPart {
  display: grid;
  grid-template-columns: 1fr 11fr;
  width: 100vh;
}




.profilePart {
  background: #7557D3;
  height: 255px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 13px;
  align-items: center;
  color: #fff;
}

.profile-img {
  width: 80px;
  border-radius: 80px;
  height: 80px;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  gap: 5px;
  align-items: center;
}

.profile-name {
  font-family: 'Lato';
  
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.4px;
}

.profile-gmail {
  color: #FFF;
  font-family: 'Lato';
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.32px;
}

.sideNavigation-links {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  gap: 20px;
  
}

.links {
  display: flex;
  gap: 21px;
  align-items: center;
  font-family: 'Lato';
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: #2B3C4E;
  text-align: center;
  padding: 15px;
  line-height: normal;
}

.icons {
 height: 15.789px;
  width: 12px;
}

.logout {
  margin-top: 32px;
}
.rightContent {
  height: 100vh;
  width: calc(100vw - 292px);
} 
.active {
  font-family: 'Lato';
  font-size: 16px;
  color: #2B3C4E;
  text-align: center;
  font-weight: 700;
  font-style: normal;
  border-left: 4px solid #7557D3;
 
}


</style>

