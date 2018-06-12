var express = require('express');
var router = express.Router();
var bchaddr = require('bchaddrjs');
var isLegacyAddress = bchaddr.isLegacyAddress;
var isBitpayAddress = bchaddr.isBitpayAddress;
var isCashAddress = bchaddr.isCashAddress;
var isMainnetAddress=bchaddr.isMainnetAddress;
var isTestnetAddress=bchaddr.isTestnetAddress;
var isP2PKHAddress=bchaddr.isP2PKHAddress;
var isP2SHAddress=bchaddr.isP2SHAddress;

/* GET home page. */
router.get('/', function(req, res, next) {
  try{
    let address=req.query.address;
    console.log(address)
    let result=[];
    if(isLegacyAddress(address)){
      result.push('isLegacyAddress')
    }
    if(isBitpayAddress(address)){
      result.push('isBitpayAddress')
    }
    if(isCashAddress(address)){
      result.push('isCashAddress')
    }
    if(isMainnetAddress(address)){
      result.push('isMainnetAddress')
    }
    if(isTestnetAddress(address)){
      result.push('isTestnetAddress')
    }
    if(isP2PKHAddress(address)){
      result.push('isP2PKHAddress')
    }
    if(isP2SHAddress(address)){
      result.push('isP2SHAddress')
    }
    res.send({result:result})  
  }catch(e){
    console.log(e)
    res.send({'error':e})
  }

});


module.exports = router;
