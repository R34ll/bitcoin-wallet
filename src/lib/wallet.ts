import axios from 'axios';

async function getBitcoinBalance(address: String): Promise<void>{
    try{
        const response = await axios.get(`https://blockchain.info/q/addressbalance/${address}`);
        const balanceInSatoshis = response.data;
        const balanceBTC = balanceInSatoshis / 100000000; // Convert satoshis to BTC
        
        console.log(`Balance for addresss ${address}: ${balanceBTC} BTC`);
    }catch(error){
        console.log("Error fetching balance: ", error);
    }
};


export interface wallet{
    balance:number,
    transactions: Transaction[],
    // total_received,
    // total_send  


}

enum TransactionCategory{
    Send,
    Receive
}

export interface Transaction{
    id: String,
    time: String,//Date,
    amount: number,
    address: String, // Walled involved in transaction(not owner of wallet)
    category: TransactionCategory,

}

async function getBitcoinTransactions(address: String): Promise<Transaction[]>{
  try{
    const response = await axios.get(`https://blockchain.info/rawaddr/${address}`);
    const transactions = response.data.txs;

    // console.log(response.data)

    const transactionList: Transaction[] = transactions.map((tx: any)=>{
        console.log(typeof(tx))
        console.log(tx.input)

        // Determine the category by checking if the addr is an input or output
        let category: TransactionCategory;
        let amount = 0;
        let involvedAddr = '';
        
        console.log("--->")
        console.log(tx.input)

        

        category  = TransactionCategory.Receive;

        return {
            category: category,
            amount: amount,
            id: tx.hash,
            time: new Date(tx.time * 1000),
            address: involvedAddr,
        };

    });

    return transactionList;

    // console.log(`Transactions for address ${address}:`);

    // transactions.forEach((tx:any, idx:Number) => {
    //   console.log(`Transaction ${idx}: `)
    //   console.log(`Hash: ${tx.hash}`);
    //   console.log(`Time: ${new Date(tx.time * 1000)}`)
      
    //   console.log("Inputs:");
    //     tx.inputs.forEach((input:any)=>{
    //       console.log(`    Address: ${input.prev_out.addr}, Value: ${input.prev_out.value / 100000000} BTC`);
    //     })
      
    //   console.log("Outputs: ")
    //   tx.out.forEach((output:any) =>{
    //     console.log(`    Address: ${output.addr}, Value: ${output.value / 100000000} BTC`);
    //   })

    //   console.log('');


  }catch(error){
    console.log("Error fetching transactions: ", error);
    return[]
  }
}


async function getBitcoinTransactionsTest(address: String): Promise<Transaction[]>{
    const list:Transaction[] = [
        {
            "category": 1,
            "amount": 4343.0,
            "id": "6796c54b2b0c8922c332b0de18b4e156df44bc91bf5d231fe106f8ff44513fee",
            "time": "2024-04-29T09:00:11.000Z",
            "address": "bc1quy5nvh8npg0qdpnk35wctey8e923yms9udzfjr"
        },
        {
            "category": 1,
            "amount": 132.32,
            "id": "ff0e3163f9a95c88b51d3f2a2414227d6dd0d25818bcd6c8cbb98a24839da42e",
            "time": "2024-04-29T08:59:22.000Z",
            "address": "bc1quy5nvh8npg0qdpnk35wctey8e923yms9udzfjr"
        },
        {
            "category": 1,
            "amount": 4343.23,
            "id": "3e45e67d3d9ca1c7518b98f696008ca34a25fb2221ddcad987b0f63556633248",
            "time": "2024-05-07T11:57:44.000Z",
            "address": "bc1quy5nvh8npg0qdpnk35wctey8e923yms9udzfjr"
        },
        {
            "category": 1,
            "amount": 12.31,
            "id": "c04c0ee2e83572988441cbc435c112fac4a7834a711ae485a97de86beb3b250e",
            "time": "2024-04-28T18:29:42.000Z",
            "address": "bc1quy5nvh8npg0qdpnk35wctey8e923yms9udzfjr"
        },
        {
            "category": 1,
            "amount": 0.3232,
            "id": "aa463351e4048ce2247d0f75b8299be85cf0eb34d2fa44a2bafa29a334918993",
            "time": "2024-03-21T14:46:36.000Z",
            "address": "bc1quy5nvh8npg0qdpnk35wctey8e923yms9udzfjr"
        },
        {
            "category": 1,
            "amount": 4343.4,
            "id": "17ac592fe620f6df06166a070dbddc7cc7d9dafd2658ee2bcc2c19220d798193",
            "time": "2024-02-15T22:44:08.000Z",
            "address": "bc1quy5nvh8npg0qdpnk35wctey8e923yms9udzfjr"
        }
    ]
    

    return list;
}

export { getBitcoinBalance, getBitcoinTransactionsTest };

