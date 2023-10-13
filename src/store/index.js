import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";


// import axios from 'axios'

export const useDashboardStore = defineStore('dashboard', () => {
  const applicants = ref([]);
  const batches = ref([])
  // const countryData = ref([])
  // const countryName = ref('')
  // const selectedRegion = ref('');
  // const search = ref('')

  async function getApplicants() {
    try {
      const token = localStorage.getItem("token");
        let res = await axios.get("http://localhost:7006/api/v1/application", {
          headers: {
            Authorization: token,
          },
        });
        applicants.value = res.data.data;
        // return res;
        console.log(res)
      } catch (error) {
        console.log(error);
      }
  };

  async

 
  

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


  return { applicants,  getApplicants};
});
