const tango = require("../mods/tango");

test("Testing Wallet Summary Call", async ()=>{
    const out1 = await tango.getWalletSummary("stake1u97ez423f87gz7x7vulcxwh702vzqwwa0ldlh6gurf6mjss73y8p7");
    const out2 = [
            'pool_id',
            'active',
            'active_epoch',
            'controlled_total_stake',
            'rewards_sum',
            'withdrawals_sum',
            'reserves_sum',
            'treasury_sum',
            'withdraw_available'
          ];
    var pass =0;
    var keys = Object.keys(out1);
    out2.forEach((a)=>{
        var i = out2.indexOf(a)
        if(a == keys[i])
            pass++;
    });
    
    expect(pass).toBe(out2.length);
})