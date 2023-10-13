<script setup>
import { RouterLink, useRoute, RouterView } from 'vue-router';
const route = useRoute();

const adminDetailsLS = localStorage.getItem("adminDetails")
const adminDetails = JSON.parse(adminDetailsLS);

</script>

<template>
    <div class="layoutPart">
        <div class="sidebar">
            <div class="sideNavigation">
                <div class="profilePart">
                    <img class="profile-img" src="@/assets/icons/leftbanner.png" alt="profile picture" />
                    <div class="details">
                        <h1 class="profile-name">{{ adminDetails.first_name }} {{adminDetails.last_name}}</h1>
                        <p class="profile-gmail">{{ adminDetails.email }}</p>
                    </div>
                </div>

                <div class="sideNavigation-links">
                    <RouterLink class="links" :to="{ name: 'AdminDashboard' }" active-class="active">
                        <div class="icons"><img src="@/assets/icons/dashboardicon.svg" alt="" /></div>
                        <p class="link-text">Dashboard</p>
                    </RouterLink>

                    <RouterLink class="links" :to="{ name: 'creatapp' }" active-class="active">
                        <div class="icons"><img src="@/assets/icons/createicon.svg" alt="" /></div>
                        <p class="link-text">Create Application</p>
                    </RouterLink>

                    <RouterLink class="links" :to="{ name: 'applicationentries' }" active-class="active">
                            <div class="icons"><img src="@/assets/icons/entriesicon.svg" alt="" /></div>
                            <p class="link-text">Application Entries</p>
                        </RouterLink>
                    <RouterLink class="links" :to="{ name: 'composeassessment' }" active-class="active">
                        <div class="icons"><img src="@/assets/icons/composeicon.svg" alt="" /></div>
                        <p class="link-text">Compose Assessment</p>
                    </RouterLink>
                    <RouterLink class="links" :to="{ name: 'assessmentHistory' }" active-class="active">
                            <div class="icons"><img src="@/assets/icons/historyicon.svg" alt="" /></div>
                            <p class="link-text">Assessment History</p>
                        </RouterLink>
                    <RouterLink class="links" :to="{ name: 'assessmentResult' }" active-class="active">
                        <div class="icons"><img src="@/assets/icons/results.svg" alt="" /></div>
                        <p class="link-text">Results</p>
                    </RouterLink>
                    <RouterLink class="links" :to="{ name: 'settings' }" active-class="active">
                        <div class="icons"><img src="@/assets/icons/settingicon.svg" alt="" /></div>
                        <p class="link-text">Settings</p>
                    </RouterLink>

                    <RouterLink class="links logout" :to="{ name: 'adminlogin' }">
                        <div class="icons"><img src="@/assets/icons/logouticon.svg" alt="" /></div>
                        <p class="link-text">Log Out</p>
                    </RouterLink>
                </div>
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
    overflow-y: hidden;
    font-family: 'Lato';
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);

}
.sideNavigation:hover{
    overflow-y: scroll;
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
    gap: 15px;
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
    overflow-y: scroll;
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

