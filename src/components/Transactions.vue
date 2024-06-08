<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getBitcoinTransactionsTest, Transaction } from '@/lib/wallet';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const bitcoinAddr = "bc1quy5nvh8npg0qdpnk35wctey8e923yms9udzfjr"
const transactions = ref<Transaction[]>([]);

onMounted(async () => {
  const transactionsList: Transaction[] = await getBitcoinTransactionsTest(bitcoinAddr);
  transactions.value = transactionsList;
});


</script>

<template>

    <div className="border rounded-lg w-11/12 ">
        <Table>
            <TableHeader className="table-header-group">
                <TableHead>ID</TableHead>
                <TableHead>Amount (BTC)</TableHead>
                <TableHead>USD</TableHead>
                <TableHead>Wallet</TableHead>
                <TableHead>Date</TableHead>
            </TableHeader>

            <TableBody>
                    <TableRow v-for="(tr, i) in transactions" :key="i">
                        <TableCell>{{i}}</TableCell>
                        <TableCell>{{tr.amount }}</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell>{{tr.address}}</TableCell>
                        <TableCell>{{tr.time}}</TableCell>
                    </TableRow>
            </TableBody>

        </Table>

    </div>


</template>

<style scoped>
</style>
