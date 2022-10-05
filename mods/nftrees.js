var blockfrost = require('./blockfrost');

const VERITREE_TOKEN_POLICYID = "f7c777fdd4531cf1c477551360e45b9684073c05c2fa61334f8f9add5665726974726565546f6b656e";
const VERITREE_DONATION_POLICYID = "56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c";
const VERITREE_TEST_STAKEID = "stake1u97ez423f87gz7x7vulcxwh702vzqwwa0ldlh6gurf6mjss73y8p7";
const VERITREE_ASSETID="56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c445230363837";


async function get_trees(stakeId) {
    try{
        const data = await blockfrost.stakeId_assets(stakeId);
        const policyId = VERITREE_DONATION_POLICYID;
        const veritreeTokenPolicyId = VERITREE_TOKEN_POLICYID;
        const treeList = [];

        //console.log(policyId.length);
        
        var treesTotal = 0;
        
        for(i in data){
            let res = data[i].unit;
            //console.log(res);
            //console.log(res.length);
            
            let first56 = res.substring(0, policyId.length);
            
            console.log("Comparing " + policyId + " /****/ " + first56);
            
            if(policyId === first56){
                /*let trees = data.onchain_metadata['Trees Planted'];
                console.log(data.onchain_metadata['Trees Planted']);
                treeList.push(trees);
                treesTotal += trees;*/
                console.log("******************MATCH******************")
                let data2 = await blockfrost.assetId_info(res);
                console.log(data2)
                let trees = parseInt(data2.onchain_metadata['Trees Planted']);
                let plantingSite = data2.onchain_metadata['Planting Site'];
                let assetFingerprint = data2.fingerprint;
                // console.log(assetFingerprint);
                console.log(plantingSite);
                console.log(trees + " added to list");
                let treeObj = {
                    assetId: assetFingerprint,
                    plantingSite: plantingSite.Name,
                    treesPlanted: trees,
                    treesGPS: "Longitude: " + plantingSite.Longitude + " & Latitude: " + plantingSite.Latitude
                }
                console.log(treeObj);
                treeList.push(treeObj);
                treesTotal += trees;
            }else{
                console.log(policyId + " != " + first56);
            }
        }
        console.log("Total Trees = " + treesTotal);
        console.log(treeList.length);
        (treeList.forEach(element => {
            console.log("***************DONATION RECORD************************");
            console.log("Planting Site: " + element.plantingSite);
            console.log("Number of trees: " + element.treesPlanted);
            console.log("Planting Location: " + element.treesGPS);
            console.log("******************************************************\n");
        }));
        // if (treesTotal===0){
        //     treeList.push({totalTrees: 0});
        // }else{
        //     treeList.push({totalTrees: treesTotal})
        // }
        return treeList;
    }catch(err){
        console.log("here" + err);
    }
}

//get_trees(VERITREE_TEST_STAKEID);

module.exports = {get_trees}

get_trees(VERITREE_TEST_STAKEID);