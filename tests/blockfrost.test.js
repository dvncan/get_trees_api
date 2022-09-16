const blockfrost = require('../mods/blockfrost');

const VERITREE_TOKEN_ASSETID = "f7c777fdd4531cf1c477551360e45b9684073c05c2fa61334f8f9add5665726974726565546f6b656e";
const VERITREE_TOKEN_POLICYID = "f7c777fdd4531cf1c477551360e45b9684073c05c2fa61334f8f9add";
const VERITREE_DONATION_POLICYID = "56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c";
const VERITREE_TEST_STAKEID = "stake1u97ez423f87gz7x7vulcxwh702vzqwwa0ldlh6gurf6mjss73y8p7";
const VERITREE_ASSETID="56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c445230363837";


test("Test AssetId_info", async ()=>{
    var data = await blockfrost.assetId_info(VERITREE_TOKEN_ASSETID);

    expect(data.asset).toStrictEqual(VERITREE_TOKEN_ASSETID);
});

test("Test GetAssetByID", async ()=>{
    var data = await blockfrost.getAssetByAssetID(VERITREE_TOKEN_POLICYID);

    expect(data.policyId).toStrictEqual(VERITREE_TOKEN_POLICYID);
});

test("Test StakeID_addresses // may fail bc test is centered around hard code address [0] ", async()=>{
    var data = await blockfrost.stakeId_addresses(VERITREE_TEST_STAKEID);

    expect(data[0].address).toStrictEqual("addr1qxp02aqzw9j0nmk55fk738j97d5cnms0a92xwedvqtfqs4raj924zj0us9udueelsva0u75cyqua6l7ml053cxn4h9pqqn7dp5");
})

test("Test stakeID-> asset response",async ()=>{

    var data = await blockfrost.stakeId_assets(VERITREE_TEST_STAKEID);

    var out = [
        {
          unit: '56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c445230363832',
          quantity: '1'
        },
        {
          unit: '56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c445230363837',
          quantity: '1'
        },
        {
          unit: 'f7c777fdd4531cf1c477551360e45b9684073c05c2fa61334f8f9add5665726974726565546f6b656e',
          quantity: '8092'
        }
    ]
    expect(data).toStrictEqual(out);
});