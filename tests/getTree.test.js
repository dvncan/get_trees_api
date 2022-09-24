const treeAPI = require ('../mods/nftrees');

test("Expecting 0 trees", async ()=>{

    var stakeKey = "stake1u8a4yj2hyxqlukp349sa8guz6jg9l5fd0sjxcvfd3usfy7qczrgjn";
    var data = await treeAPI.get_trees(stakeKey);
    var out = []
    

    expect(data).toStrictEqual(out);

})

test("Expecting 550 trees", async ()=>{

    var stakeKey = "stake1u97ez423f87gz7x7vulcxwh702vzqwwa0ldlh6gurf6mjss73y8p7";
    var data = await treeAPI.get_trees(stakeKey);
    var out = [
        {
          assetId: "56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c445230393935",
          plantingSite: 'Mtwapa Creek',
          treesPlanted: 552,
          treesGPS: 'Longitude: 39.709641 & Latitude: -3.9018096'
        },
        {
          assetId: "56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c445230363832",
          plantingSite: 'Mtwapa Creek',
          treesPlanted: 325,
          treesGPS: 'Longitude: 39.709641 & Latitude: -3.9018096'
        }]
    

    expect(data).toStrictEqual(out);

})

test("Expect 11438 ", async ()=>{

    var stakeKey = "stake1uyd8cyqgpacgj28t8cwfm9arcluc5sqesr960x42wu36utq2dm0lw";
    var data = await treeAPI.get_trees(stakeKey);
    var out = [
        {
          assetId: "56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c445230303032",
          plantingSite: 'Mtwapa Creek',
          treesPlanted: 1337,
          treesGPS: 'Longitude: 39.704676 & Latitude: -3.945136'
        },
        {
          assetId: "56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c445230313731",
          plantingSite: 'Mtwapa Creek',
          treesPlanted: 10101,
          treesGPS: 'Longitude: 39.704676 & Latitude: -3.945136'
        }]
    
    expect(data).toStrictEqual(out);
})