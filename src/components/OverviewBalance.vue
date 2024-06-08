<script setup lang="ts">

// const axios = require('axios');
import { Label } from './ui/label';


// const bitcoinAddr = "bc1quy5nvh8npg0qdpnk35wctey8e923yms9udzfjr"
// getBitcoinBalance(bitcoinAddr);
// const res = await getBitcoinTransactions(bitcoinAddr);
// console.log(res)

const BALANCE = 0.00006482;
const USD =  9430.0;

</script>

<template>

    <div className="border rounded-lg p-2 w-1/3 ">
        
      <Label>Balance (BTC)</Label>
        
        <div className="flex items-center justify-center p-5 ">
            <p className="text-bold font-bold text-5xl">{{ BALANCE }}</p>
        </div>

        <div>
          <p className="flex items-center justify-center"> $ {{ USD }} </p>

          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
          <Label>Highest Received</Label>
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
          <Label>Total Received</Label>
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
          <Label>Total Send</Label>
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
          <Label>Last Moviment</Label>
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
          <Label>First Moviment</Label>
        </div>
 


    </div>


</template>

<style scoped>
</style>
