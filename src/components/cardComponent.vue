<script setup>
const props = defineProps(["cardTitle", "cardText"]);
</script>


<template>
    <div class="card">
      <h4 class="card-title">
        {{ cardTitle }}
      </h4>
      <p class="card-text">{{ cardText }}</p>
    </div>


    
</template>

<style scoped>
.card{
    max-width: 292px;
    width: 100%;
    padding: 24px;
    background-color: rgba(117, 87, 211, 0.10);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .card-title{
    color: #211F26;
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    letter-spacing: 0.16px;
  }
  .card-text{
    color: rgba(33, 31, 38, 0.60);
    font-size: 14px;
    line-height: 21.84px;
    letter-spacing: 0.14px;
  }

</style>