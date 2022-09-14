const tango = require("../mods/tango");

test("Testing Address Assets", async ()=>{
    const out1 = await tango.getAddressAssets("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre");
    const out2 = await tango.getAddressModified("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre", "assets");

    expect(out1).toStrictEqual(out2);
});


test("Testing Address Summary", async ()=>{
    const out1 = await tango.getAddressSummary("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre");
    const out2 = await tango.getAddressModified("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre", "");

    expect(out1).toStrictEqual(out2);
})

test("Testing Address Transactions", async ()=>{
    const out1 = await tango.getAddressTransactions("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre")
    const out2 = await tango.getAddressModified("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre", "transactions");

    expect(out1).toStrictEqual(out2);
})

test("Testing Address UTXO", async ()=>{
    const out1 = await tango.getAddressUTXO("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre")
    const out2 = await tango.getAddressModified("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre", "utxos");

    expect(out1).toStrictEqual(out2);
})




/*
test("TEST TITLE", async ()=>{


    expect().toBe();
})

test("Testing Get Latest Block w known list length", async ()=>{
    const obj = await tango.getLatestBlock();
    const out1 = Object.keys(obj);
    const keyList = [
        'hash',        'epoch_no',
        'slot_no',     'epoch_slot_no',
        'block_no',    'previous_block',
        'slot_leader', 'out_sum',
        'fees',        'confirmations',
        'size',        'time',
        'tx_count',    'vrf_key',
        'op_cert'
      ]
    var count = 0;
    expect(out1.length).toBe(keyList.length);

    
    keyList.forEach((e) => {
        var i = keyList.indexOf(e);
        if(e === out1[i]){
            count++;
        }
    });

    expect(count).toBe(out1.length);
    
    
    //expect(first).toBe("hash");
})
*/