<template>
  <div class="container">
    <DashboardTitleComponent cardTitle="Assessment History" />

    <table style="width: 100%">
      <thead>
        <tr class="table-heading">
          <th>Batch</th>
          <th>Date Composed</th>
          <th>No of Questions</th>
          <th>Time Allocated</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-row" @click="router.push('assessment-result')">
          <td>Batch 1</td>
          <td>12/07/23</td>
          <td>30</td>
          <td>30 minutes</td>
          <td>Taken</td>
        </tr>
        <tr class="t-row" v-for="person in sortedPeople" :key="person.id" @click="openMainModal">
          <td>{{ person.batch }}</td>
          <td>{{ person.date }}</td>
          <td>{{ person.questions }}</td>
          <td>{{ person.time }}</td>
          <td>{{ person.status }}</td>
        </tr>
      </tbody>
      <!-- </tr> -->
    </table>
  </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'
import DashboardTitleComponent from '../../components/DashboardTitleComponent.vue';
const router = useRouter()

const people = ref([
  { id: 1, batch: 'jack jack', date: '12 dec 2020', question: '30', time: '30 mins', status: 'taken' },
  { id: 2, batch: 'Bongo', date: '12 dec 2020', question: '30', time: '30 mins', status: 'taken' },
  { id: 3, batch: 'congo', date: '12 dec 2020', question: '30', time: '30 mins', status: 'taken' },
]);

</script>
  
<style scoped>
input {
  border: none;
  background-color: #2b3c4e;

}

.table-heading {
  color: white;
  background: #2b3c4e;
  border-collapse: collapse;
  padding: 15px 0;
}

td {
  padding: 24px 26px;
}

table {
  border-collapse: collapse;
}
thead{
  background-color: #2B3C4E;
    color: #fff;
}


.container {
  padding: 60px 47px;
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

.table-row {
  color: #4F4F4F;
  text-align: center;
  font-family: 'Lato';
  font-size: 14.533px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.table-row:hover {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 7px solid #7557d3;
  border-radius: 8px 8px 8px 8px !important;
  /* margin-top: 20px; */
  cursor: pointer;
}

th {
  align-self: flex-end;
  justify-self: center;
  color: white;
}
</style>