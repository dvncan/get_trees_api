const axios = require('axios');
require('dotenv').config();

const base_url = "https://cardano-mainnet.tangocrypto.com/c013e2b423c644a8b731b13a6e0fe8a9/v1/"
const config = {
    headers:{
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY
    }
}

const VERITREE_TOKEN_POLICYID = "f7c777fdd4531cf1c477551360e45b9684073c05c2fa61334f8f9add5665726974726565546f6b656e";
const VERITREE_DONATION_POLICYID = "56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c";
const VERITREE_TEST_STAKEID = "stake1u97ez423f87gz7x7vulcxwh702vzqwwa0ldlh6gurf6mjss73y8p7";
const VERITREE_ASSETID="56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c445230363837";




//////////////
/// BLOCKS ///
//////////////

async function getLatestBlock(){
    const modifier = "blocks/latest";
    const url = base_url + modifier
    try{
        var data = await axios.get(base_url+modifier, config);
        // console.log(data);
        return data.data;
    }catch(err){
        console.log(err);
    }
}

async function getBlock(blockId){
    const modifier = `blocks/${blockId}`;
    const url = base_url + modifier
    try{
        var data = await axios.get(base_url+modifier, config);
        // console.log(data);
        return data.data;
    }catch(err){
        console.log(err);
    }
}


async function getBlockTransactionsByNum(num){
    const modifier = `blocks/${num}/transactions`;
    const url = base_url + modifier
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            // console.log(res.data.data);
            return res.data.data;
        });
    }catch(err){
        console.log(err);
    }

}

// getBlockTransactionsByNum(7732120);


///////////////
/// ADDRESS ///
///////////////

async function getAddressSummary(address){
    const modifier = "addresses/"+address;
    const url = base_url + modifier
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            return res.data;
        });
    }catch(err){
        console.log(err);
    }
}

async function getAddressUTXO(address){
    const modifier = `addresses/${address}/utxos`;
    const url = base_url + modifier
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            return res.data;
        });
    }catch(err){
        console.log(err);
    }
}

async function getAddressAssets(address){
    const modifier = `addresses/${address}/assets`;
    const url = base_url + modifier
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            return res.data;
        });
    }catch(err){
        console.log(err);
    }
}

async function getAddressTransactions(address){
    const modifier = `addresses/${address}/transactions`;
    const url = base_url + modifier
    // logger.log(`GET FROM ${url}`);
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            // logger.info("Success");
            return res.data;
        });
    }catch(err){
        console.log(err);
    }
}

async function getAddressModified(address, mod){
    const modifier = `addresses/${address}/${mod}`;
    const url = base_url + modifier
    // logger.log(`GET FROM ${url}`);
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            // logger.info("Success");
            return res.data;
        });
    }catch(err){
        console.log(err);
    }
}


////////////////////
/// TRANSACTIONS ///
////////////////////

async function getTransactionByHash(hash){
    const modifier = `transactions/${hash}`;
    const url = base_url + modifier
    // logger.log(`GET FROM ${url}`);
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            // logger.info("Success");
            return res.data;
        });
    }catch(err){
        console.log(err);
    }
}

async function getTransactionByHashUTXO(hash){
    const modifier = `transactions/${hash}/utxos`;
    const url = base_url + modifier
    // logger.log(`GET FROM ${url}`);
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            // logger.info("Success");
            return res.data;
        });
    }catch(err){
        console.log(err);
    }
}

async function getTransactionByHashMetadata(hash){
    const modifier = `transactions/${hash}/metadata`;
    try{
        //these objects that are returned are bonkers. how do i search for a key without knowing it and not being able to iterate through list?
        // var firstKey = Object.keys(myObject)[0];
        return await axios.get(base_url+modifier, config).then(res => {
            let build = {
                label: res.data.data[0].label,
                json: res.data.data[0].json
            }
            return build;
        });
    }catch(err){
        console.log(err);
    }
}

async function getTransactionModified(hash, mod){
    const modifier = `transactions/${hash}/${mod}`;
    const url = base_url + modifier
    // logger.log(`GET FROM ${url}`);
    try{
        if(mod === "utxos"){
            return await axios.get(base_url+modifier, config).then(res => {
                // logger.info("Success")
                console.log(res.data);
                return res.data;
            });
        }if(mod === "metadata"){
            return await axios.get(base_url+modifier, config).then(res => {
                let build = {
                    label: res.data.data[0].label,
                    json: res.data.data[0].json
                }
                // logger.info("Success")
                return build;
            });
        }
    }catch(err){
        console.log(err);
    }
}

///////////////
/// WALLETS ///
///////////////

async function getWalletSummary(stakeKey){
    const modifier = `wallets/${stakeKey}`;
    const url = base_url + modifier
    // logger.log(`GET FROM ${url}`);
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            // console.log(res.data);
            // logger.info("Success");
            return res.data;
        });
    }catch(err){
        console.log(err);
    }
}

async function getWalletList(stakeKey){
    const modifier = `wallets/${stakeKey}/addresses`;
    const url = base_url + modifier
    // logger.log(`GET FROM ${url}`);
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            // console.log(res.data);
            // logger.info("Success");
            return res.data.data;
        });
    }catch(err){
        console.log(err);
    }
}


//////////////
/// ASSETS ///
//////////////

async function retrieveAsset(assetId){
    // assetId = PolicyID + Hex encoded Asset name
    const modifier = `assets/${assetId}`;
    const url = base_url + modifier
    // logger.log(`GET FROM ${url}`);
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            return res.data;
            // logger.info("Success");
        });
    }catch(err){
        console.log(err);
    }
}

async function retrieveAssetFP(assetFP){
    // assetId = PolicyID + Hex encoded Asset name
    const modifier = `assets/${assetFP}`;
    const url = base_url + modifier
    // logger.log(`GET FROM ${url}`);
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            // logger.info("Success");
            return res.data;
        });
    }catch(err){
        console.log(err);
    }
}

async function listAssetAddresses(assetId){
    // assetId = PolicyID + Hex encoded Asset name
    const modifier = `assets/${assetId}/addresses`;
    const url = base_url + modifier
    // logger.log(`GET FROM ${url}`);
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            return res.data;
            // logger.info("Success");
        });
    }catch(err){
        console.log(err);
    }
}

async function listAssetAddressesByFP(assetFP){
    const modifier = `assets/fingerprint/${assetFP}/addresses`;
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            return res.data;
            // logger.info("Success");
        });
    }catch(err){
        console.log(err);
    }

}

//////////////
/// POLICY /// 
//////////////


async function getAssetByPolicyId(policy_id){
    const modifier = `policies/${policy_id}/assets`;
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            return res.data;
            // logger.info("Success");
        });
    }catch(err){
        console.log(err);
    }

}

//////////////
/// EPOCHS /// 500 response
//////////////

async function getProtocolParameters(num){
    const modifier = `epochs/${num}/parameters`;
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            return res.data;
            // logger.info("Success");
        });
    }catch(err){
        console.log(err);
    }

}

async function getEpochInfo(){
    const modifier = `epochs/current`;
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            return res.data;
            // logger.info("Success");
        });
    }catch(err){
        console.log(err);
    }

}

/////////////
/// POOLS /// 
/////////////

async function getPoolMetadata(pool_id){
    const modifier = `pools/${pool_id}`;
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            return res.data;
            // logger.info("Success");
        });
    }catch(err){
        console.log(err);
    }

}

async function getPoolDelegations(pool_id){
    const modifier = `pools/${pool_id}/delegations`;
    try{
        return await axios.get(base_url+modifier, config).then(res => {
            console.log(res.data);
            return res.data;
            // logger.info("Success");
        });
    }catch(err){
        console.log(err);
    }

}



async function callit(){
    // var w2 = await listAssetAddresses("56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c445230363837");
    var w2 = await listAssetAddressesByFP("asset1gkycvet3psdwsfdq8sxn4nwv8wsqhdksld9pup");
    console.log(w2);
}

// callit()


async function callme(){
    //var data  = await getAddressSummary("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre");
    // var data = await getWalletList("stake1u97ez423f87gz7x7vulcxwh702vzqwwa0ldlh6gurf6mjss73y8p7");
    // var data = await getWalletSummary("stake1u97ez423f87gz7x7vulcxwh702vzqwwa0ldlh6gurf6mjss73y8p7");
    var data = await getAddressModified("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre", "assets");
    var data2 = await getAddressAssets("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre");
    // console.log(data);
    if(data == data2){
        console.log("Passed");
    }
    console.log(data); 
    console.log(data2);
}

//callme();



module.exports = { getTransactionModified,getTransactionByHashMetadata, getTransactionByHashUTXO, getTransactionByHash, 
                getAddressModified, getAddressTransactions, getAddressAssets, getAddressUTXO, getAddressSummary, getLatestBlock,
                getWalletSummary, getWalletList, getBlock, getBlockTransactionsByNum, retrieveAsset, retrieveAssetFP,
                listAssetAddresses, listAssetAddressesByFP, getAssetByPolicyId, getEpochInfo, getPoolDelegations, 
                getPoolMetadata }




//getAddressSummary("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre");

//getAddressUTXO("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre");
// getAddressModified("addr1q8rm2txzxpfzazrkq4qzfnrxmp5fewqe87845rugr7jp9na5y67g75jhpw9gt6dzp0kfr08ml0sdkheff08ncfw79wcs53qkre", "transactions");

//getTransactionByHash("48a2996ff008deabedaa8d8a0a50843eb5c1c862eececad05354f6536a9a8c48");
//getTransactionByHashUTXO("48a2996ff008deabedaa8d8a0a50843eb5c1c862eececad05354f6536a9a8c48");
//getTransactionByHashMetadata("48a2996ff008deabedaa8d8a0a50843eb5c1c862eececad05354f6536a9a8c48");
//getTransactionModified("48a2996ff008deabedaa8d8a0a50843eb5c1c862eececad05354f6536a9a8c48", "utxos");
//getTransactionModified("48a2996ff008deabedaa8d8a0a50843eb5c1c862eececad05354f6536a9a8c48", "metadata");

//getWalletSummary("stake1u97ez423f87gz7x7vulcxwh702vzqwwa0ldlh6gurf6mjss73y8p7");
// getWalletList("stake1u97ez423f87gz7x7vulcxwh702vzqwwa0ldlh6gurf6mjss73y8p7");

// getAssetByPolicyId(VERITREE_DONATION_POLICYID);

// getEpochInfo();
// getPoolDelegations("pool1h40kkf28nr3amhs6nsmqn75aderg6cutmygr47czu2dw2dxzvgm");
// getPoolMetadata("pool1h40kkf28nr3amhs6nsmqn75aderg6cutmygr47czu2dw2dxzvgm");
