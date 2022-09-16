const treeAPI = require ('../mods/nftrees');

test("Expecting 0 trees", async ()=>{

    var stakeKey = "stake1u8a4yj2hyxqlukp349sa8guz6jg9l5fd0sjxcvfd3usfy7qczrgjn";
    var data = await treeAPI.get_trees(stakeKey);
    var out = [ { totalTrees: 0 } ]
    

    expect(data).toStrictEqual(out);

})

test("Expecting 550 trees", async ()=>{

    var stakeKey = "stake1u97ez423f87gz7x7vulcxwh702vzqwwa0ldlh6gurf6mjss73y8p7";
    var data = await treeAPI.get_trees(stakeKey);
    var out = [
        {
          plantingSite: 'Mtwapa Creek',
          treesPlanted: 325,
          treesGPS: 'Longitude: 39.709641 & Latitude: -3.9018096'
        },
        {
          plantingSite: 'Mtwapa Creek',
          treesPlanted: 225,
          treesGPS: 'Longitude: 39.709641 & Latitude: -3.9018096'
        },
        { totalTrees: 550 }
      ]
    

    expect(data).toStrictEqual(out);

})

test("Expect 11438", async ()=>{

    var stakeKey = "stake1uyd8cyqgpacgj28t8cwfm9arcluc5sqesr960x42wu36utq2dm0lw";
    var data = await treeAPI.get_trees(stakeKey);
    var out = [
        {
          plantingSite: 'Mtwapa Creek',
          treesPlanted: 1337,
          treesGPS: 'Longitude: 39.704676 & Latitude: -3.945136'
        },
        {
          plantingSite: 'Mtwapa Creek',
          treesPlanted: 10101,
          treesGPS: 'Longitude: 39.704676 & Latitude: -3.945136'
        },
        { totalTrees: 11438 }
      ]
    
    expect(data).toStrictEqual(out);


})