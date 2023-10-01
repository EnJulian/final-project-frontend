<template>
  <ModalComponent @approve="openApproveButton" @decline="openDenyButton" @close="closeModal" v-show="mainModalVisibility" class="main-modal" />
  <DeclineModalComponent @close="closeDecisionModal" v-show="declineVisibility" class="deny-decision" />
  <ApproveModalComponent @close="closeDecisionModal" v-show="approveVisibility" class="approve-decision" />
  
      <div class="main">
        <h1>
          Entries - Batch 1 <img src="@/assets/entries-logo.svg" alt="logo" />
        </h1>
        <h2>Comprises of all that applied for batch 1</h2>

        <table style="width: 100%">
          <tr class="table-heading">
            <th>Name</th>
            <th>Email</th>
            <th class="th">
              <div class="sort-header">
                <p>DOB - Age</p>
                <figure>
                  <img @click="ageAscending" class="sortup" src="@/assets/sortup.svg" alt="sortup" srcset="" />

                  <img @click="ageDescending" class="sortdown" src="@/assets/sortdown.svg" alt="sortdown" srcset="" />
                </figure>
              </div>
            </th>
            <th>Address</th>
            <th>University</th>
            <th class="th">
              <div>
                <p>CGPA</p>
                <figure>
                  <img @click="gpaAscending" class="sortup" src="@/assets/sortup.svg" alt="sortup" />

                  <img @click="gpaDescending" class="sortdown" src="@/assets/sortdown.svg" alt="sortdown" />
                </figure>
              </div>
            </th>
          </tr>
          <tr  @click="openMainModal()"
            class="rowss">
            <td>
              jACK Ice
            </td>
            <td>llllll</td>
            <td>lllll</td>
            <td>hhhhhhh</td>
            <td>kkkkk</td>
            <td>pppppp</td>
          </tr>
        </table>
      </div>

</template>

<script setup>
import { ref, computed } from 'vue';
import ApproveModalComponent from '../../components/ApproveModalComponent.vue'
import DeclineModalComponent from '../../components/DeclineModalComponent.vue'
import ModalComponent from '../../components/ModalComponent.vue'


const mainModalVisibility = ref(false);
const declineVisibility = ref(false);
const approveVisibility = ref(false);



const openMainModal = () => {
  mainModalVisibility.value = true;
};

const openDenyButton = () => {
  mainModalVisibility.value = false;
  declineVisibility.value = true;
};

const openApproveButton = () => {
  mainModalVisibility.value = false;
  approveVisibility.value = true;
};

const closeModal = () => {
  mainModalVisibility.value = false;
  // store.commit("clearApplicant");
};

const closeDecisionModal = () => {
  approveVisibility.value = false;
  declineVisibility.value = false;
};


</script>

<style scoped>
.sortup {
  padding-bottom: 2px;
}

input {
  border: none;
  background-color: #2b3c4e;
}

/* .numbs {
  right: 130px;
} */
h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}

h2 {
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  margin-top: 3px;
  margin-bottom: 38px;
  color: #4f4f4f;
}

.table-heading {
  width: 1042px;
  height: 46px;
  color: white;
  background: #2b3c4e;
  border-collapse: collapse;
}
.sort-header{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
td {
  padding: 24px 26px;
}

table {
  border-collapse: collapse;
}

img {
  cursor: pointer;
}

.main {
  margin-right: 40px;
}

.main-modal {
  position: absolute;
}

.deny-decision {
  position: absolute;
}

.approve-decision {
  position: absolute;
}

figure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  align-self: center;
}

tr {
  border-radius: 8px 0px 0px 8px;
}

.rowss:hover {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 7px solid #7557d3;
  border-radius: 8px 0px 0px 8px;
  margin-top: 20px;
  cursor: pointer;
}

.th div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 5px;
}

.th p {
  align-self: flex-end;
  /* // justify-self: center; */
}</style>