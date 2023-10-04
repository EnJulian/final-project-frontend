<template>
    
        <div class="main">
          <h1>
            Entries - Batch 1 <img src="@/assets/icons/Polygon 2.9.svg" alt="logo" />
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
                    <img @click="ageAscending" class="Sorting" src="@/assets/icons/Sorting.svg" alt="Sorting" srcset="" />
  
                    
                  </figure>
                </div>
              </th>
              <th>Address</th>
              <th>University</th>
              <th class="th">
                <div>
                  <p>CGPA</p>
                  <figure>
                    <img @click="gpaAscending" class="Sorting" src="@/assets/icons/Sorting.svg" alt="Sorting" />
  
                    
                  </figure>
                </div>
              </th>
              <th class="th">
              <div>
                <p>Test Scores</p>
                <figure>
                  <img @click="testAscending" class="Sorting" src="@/assets/icons/Sorting.svg" alt="Sorting" srcset="" />
                  
                </figure>
              </div>
            </th>
            </tr>
            <tr class="table-rows" @click="router.push('profile-settings')">
              <td>Jackline Timah </td>
              <td>jackline@gmail.com</td>
              <td>18/12/2001-21</td>
              <td>GW-0003-3666</td>
              <td>University of Ghana</td>
              <td>3.75</td>
              <td>50</td>
            </tr>
          </table>
        </div>
  
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter()
  
  </script>
  
  <style scoped>
  .Sorting {
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
    color: #2B3C4E;
    font-family: Lato;
    font-size: 43.556px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.871px;
    margin-top: 101px;
    padding-left: 42px;
  }
  
  h2 {
    font-style: italic;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    margin-top: 3px;
    margin-bottom: 38px;
    color: #4f4f4f;
    padding-left: 42px;
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
    width: 12px;
    height: 12px;
    flex-shrink: 0;
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
  
  .table-rows:hover {
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-left: 7px solid #7557d3;
    border-radius: 8px 0px 0px 8px;
    margin-top: 20px;
    cursor: pointer;
  }
  .table-rows{
    color: #FFF;
    text-align: center;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  .th div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 5px;
  }
  
  .th p {
    align-self: flex-end;
    color: white;
 }

 th{
    align-self: flex-end;
    justify-self: center; 
    color: white;
 }
 
 </style>