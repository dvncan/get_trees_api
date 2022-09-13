const tango = require("../mods/tango");

test("Testing Get Transaction UTXO", async ()=>{
    const out1 = await tango.getTransactionByHashUTXO("48a2996ff008deabedaa8d8a0a50843eb5c1c862eececad05354f6536a9a8c48");
    const out2 = await tango.getTransactionModified("48a2996ff008deabedaa8d8a0a50843eb5c1c862eececad05354f6536a9a8c48", "utxos");
    
    expect(out1).toStrictEqual(out2);
});

test("Testing Get Transaction Metadata", async ()=>{
    const out1 = await tango.getTransactionByHashMetadata("48a2996ff008deabedaa8d8a0a50843eb5c1c862eececad05354f6536a9a8c48");
    const out2 = await tango.getTransactionModified("48a2996ff008deabedaa8d8a0a50843eb5c1c862eececad05354f6536a9a8c48", "metadata");

    expect(out1).toBe(out2);
})