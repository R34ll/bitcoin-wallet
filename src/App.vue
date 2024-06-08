<script setup lang="ts">
import OverviewBalance from './components/OverviewBalance.vue';
import SearchBar from './components/SearchBar.vue';
import Transaction from './components/Transactions.vue';
</script>

<template>
  
  <div className="w-screen h-screen flex items-center justify-center " >

    <div className="h-5/6 w-5/6 ">
      <div className="">
        <SearchBar/>
      </div>

      <div className="flex w-full h-full gap-4">
        <Transaction />
        <OverviewBalance/>
      </div>

    </div>
      
  </div>


  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>


</style>
