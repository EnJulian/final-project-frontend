<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import DashboardTitleComponent from '../../components/DashboardTitleComponent.vue';
const router = useRouter()

</script>

<template>
  <div class="container">
    <DashboardTitleComponent cardTitle="Entries - Batch 1"
      cardText="Comprises of all that applied for batch 1"
    />

    <table style="width: 100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th class="sorting">
            DOB - Age
            <div class="icons">
              <figure class="btn" @click="ageAscending"><img src="../../assets/icons/sortup.svg" alt="sortup"
                  srcset=""></figure>
              <figure class="btn" @click="ageDescending"><img src="../../assets/icons/sortdown.svg" alt="sortdown"
                  srcset=""></figure>
            </div>
          </th>
          <th>Address</th>
          <th>University</th>
          <th class="sorting">
            CGPA
            <div class="icons">
              <figure class="btn" @click="cgpaAscending"><img src="../../assets/icons/sortup.svg" alt="sortup" srcset=""></figure>
              <figure class="btn" @click="cgpaDescending"><img src="../../assets/icons/sortdown.svg" alt="sortdown"
                  srcset=""></figure>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="t-row" v-for="person in sortedPeople" :key="person.id" @click="openMainModal">
          <td>{{ person.name }} {{ person.email }}</td>
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
  

  
<style scoped>
.container {
  height: 100vh;
  padding: 60px 47px;
  overflow-y: scroll;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 38px;
}

thead {
  background-color: #2B3C4E;
  color: #fff;
}
tr{
  border-radius: 10px;
}
th {
  padding: 0 10px;
  color: #fff;
  /* padding: 14px 10px; */
}

.sorting {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icons {
  display: flex;
  flex-direction: column;
  /* gap: 3px; */
}

img {
  cursor: pointer;
}

.t-row:hover {
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(33, 31, 38, 0.05);
  border-radius: 10px;
  border-left: 7px #7557D3 solid;
  margin-left: 7px;
  cursor: pointer;
}

td {
  padding: 22px 10px;
  text-align: center;
}

.btn {
  border: none;
  background-color: transparent;
  border: #7557D3 1px solid;
}
</style>