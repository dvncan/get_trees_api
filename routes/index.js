var express = require('express');
var router = express.Router();
var fs = require ('fs');
var blockfrost = require('../mods/blockfrost');
var nftree = require('../mods/nftrees');
var discord = require('discord.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res)=>{
  //send me the policyId.AssetName I will remove the "." and post to Blockfrost / returning all metadata / parse for number of trees and assign role
  console.log(req.body.id);
  const stakeId = req.body.id;
  const treeList = await nftree.get_trees(stakeId);
  res.send(JSON.stringify(treeList)).status(200);
  
  //res.send(treeList).status(200);
  
})

module.exports = router;
