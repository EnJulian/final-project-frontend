<template>
  <ModalComponent @approve="openApproveButton" @decline="openDenyButton" @close="closeModal" v-show="mainModalVisibility" class="main-modal" />
  <DeclineModalComponent @close="closeDecisionModal" v-show="declineVisibility" class="deny-decision" />
  <ApproveModalComponent @close="closeDecisionModal" v-show="approveVisibility" class="approve-decision" />
  
      <div class="main">
        <h1>
          Entries - Batch 1 <img src="@/assets/entries-logo.svg" alt="logo" />
        </h1>
        <h2>Comprises of all that applied for batch 1</h2>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th class="sorting">
                        DOB - Age
                        <div class="icons">
                            <button class="btn" @click="ageAscending"><img src="../../assets/icons/sortup.svg" alt="sortup" srcset=""></button>
                            <button class="btn" @click="ageDescending"><img src="../../assets/icons/sortdown.svg" alt="sortdown" srcset=""></button>
                        </div>
                    </th>
                    <th>Address</th>
                    <th>University</th>
                    <th class="sorting">
                        CGPA
                        <div class="icons">
                            <button class="btn" @click="cgpaAscending"><img src="../../assets/icons/sortup.svg" alt="sortup" srcset=""></button>
                            <button class="btn" @click="cgpaDescending"><img src="../../assets/icons/sortdown.svg" alt="sortdown" srcset=""></button>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="t-row" v-for="person in sortedPeople" :key="person.id" @click="openMainModal">
                    <td>{{ person.name }}</td>
                    <td>{{ person.email }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.address }}</td>
                    <td>{{ person.university }}</td>
                    <td>{{ person.cgpa }}</td>
                </tr>
            </tbody>
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
};

const closeDecisionModal = () => {
    approveVisibility.value = false;
    declineVisibility.value = false;
};

const people = ref([
    { id: 1, name: 'jack jack', age: 12, email: 'jack@mail.com', address: '21 adom str.', university: 'University of Lagos', cgpa: 2.54 },
    { id: 2, name: 'Bongo', age: 13, email: 'bongo@mail.com', address: '21 adom str.', university: 'University of Lagos', cgpa: 3.54 },
    { id: 3, name: 'congo', age: 14, email: 'congo@mail.com', address: '21 adom str.', university: 'University of Lagos', cgpa: 3.24 },
]);

const sortedPeople = computed(() => {
    return [...people.value].sort((a, b) => a.age - b.age || a.cgpa - b.cgpa);
});

const ageAscending = () => {
    people.value.sort((a, b) => a.age - b.age || a.cgpa - b.cgpa);
};
const ageDescending = () => {
    people.value.sort((a, b) => b.age - a.age || b.cgpa - a.cgpa);
};

const cgpaAscending = () => {
    people.value.sort((a, b) => a.cgpa - b.cgpa || a.age - b.age);
};
const cgpaDescending = () => {
    people.value.sort((a, b) => b.cgpa - a.cgpa || b.age - a.age);
};
</script>


<style scoped>

input {
  border: none;
  background-color: #2b3c4e;
}


h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 44px;
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

table {
  border-collapse: collapse;
  width: 100%;
  text-align: justify;
}

thead{
    background-color: #2B3C4E;
    color: #fff;
    padding: 8px;
}
th{
    color: #fff;
    padding: 14px 10px;
}
.sorting{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.icons{
    display: flex;
    flex-direction: column;
    gap: 3px;
}
img {
  cursor: pointer;
}

.t-row:hover {
  border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 5px 15px 0px rgba(33, 31, 38, 0.05);
    border-left: 7px #7557D3 solid;
    margin-left: 7px;
}

td{
    padding: 22px 10px;
    
}
.btn{
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
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

.th div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 5px;
}

.th p {
  align-self: flex-end;
  /* // justify-self: center; */
}
</style>