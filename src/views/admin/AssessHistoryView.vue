<template>
   
        <div class="main">
          <h1>
            Assessment History 
          </h1>

          <table style="width: 100%">
        <!-- <tr class="table-heading"> -->
            <tr class="table-heading"> 
              <th>Batch</th>
              <th>Date Composed</th>
              <th>No of Questions</th>
              <th>Time Allocated</th>
              <th>Status</th>
            </tr>
        <!-- </tr> -->
            <tr class="table-row" @click="router.push('assessment-result')"> 
              <td>Batch 1</td>
              <td>12/07/23</td>
              <td>30</td>
              <td>30 minutes</td>
              <td>Taken</td>
            </tr>
          </table>
        </div>
  
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router'
  const router = useRouter()

  
  </script>
  
  <style scoped>
  
  
  input {
    border: none;
    background-color: #2b3c4e;
    
  }
  
  
  h1 {
    color: #2B3C4E;
    font-family: Lato;
    font-size: 43.556px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.871px;
    margin-top: 111px;
    margin-bottom:62px ;
}
  
  
  
  .table-heading {
    width: 100%;
    height: 41.783px;
    color: white;
    background: #2b3c4e;
    border-collapse: collapse;
  }
  
  td {
    padding: 24px 26px;
  }
  
  table {
    border-collapse: collapse;
  }
  
  
  .main {
    margin-right: 40px;
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
  .table-row{
    color: #4F4F4F;
    text-align: center;
    font-family: Lato;
    font-size: 14.533px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  .table-row:hover {
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-left: 7px solid #7557d3;
    border-radius: 8px 0px 0px 8px;
    margin-top: 20px;
    cursor: pointer;
  }
  
  th  {
    align-self: flex-end;
    justify-self: center; 
    color: white;
  }
  </style>