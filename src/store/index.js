import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";


// import axios from 'axios'

export const useDashboardStore = defineStore('dashboard', () => {
  const usersData = ref([])
  // const countryData = ref([])
  // const countryName = ref('')
  // const selectedRegion = ref('');
  // const search = ref('')
  
  async function adminLogin() {
    try {
      const response = await axios.get(`http://localhost:7006/api/v1/users/login`)
      usersData.value = response.data;
    } catch (error) {
      console.error(error)
    }
  };

  // async function getCountryData() {
  //   try {
  //     const result = await axios.get(`https://restcountries.com/v3.1/name/${countryName.value}`)
  //     countryData.value = result.data;
  //   } catch (error) {
  //     console.error(error)
  //   }
  // };

  // function updateCountry(name){
  //   console.log(name)
  //   countryName.value = name
  // }

  // Define computed property for filtered countries
  // const filteredCountries = computed(() => {
  //   console.log(selectedRegion.value)
  //   if (search.value) {
  //     if(selectedRegion.value){
  //       return countriesData.value.filter(country => country.region === selectedRegion.value && country.name.common.toLowerCase().includes(search.value.toLocaleLowerCase()));
  //     }else{
  //       return countriesData.value.filter(country => country.name.common.toLowerCase().includes(search.value.toLocaleLowerCase()));
  //     }
  //     }
  //   else if(selectedRegion.value){
  //     return countriesData.value.filter(country => country.region === selectedRegion.value);
  //   }
  //  
  //    
  //  
  //   else {
  //     return countriesData.value
  //   }
  //
  //  
  // });

  return { adminLogin };

  // return { search, countryData,updateCountry, countryName, getCountryData, countriesData, adminLogin, selectedRegion, filteredCountries };
});
