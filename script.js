var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var doge=document.getElementById("dogecoin");
var tether=document.getElementById("tether");
var solana=document.getElementById("solana");
var cardano=document.getElementById("cardano");


var settings={
    "async" : true,
    "scrossDomain":true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Csolana%2Ccardano&vs_currencies=usd",
    "method": "GET",
    "headers":{}
}

$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    tether.innerHTML = response.tether.usd;
    solana.innerHTML = response.solana.usd;
    cardano.innerHTML = response.cardano.usd;

});
