"use strict";

const argv = require('yargs').argv
var request = require('request');

function getQuote() {
    // var url = 'https://api.coindesk.com/v1/bpi/currentprice/CNY.json';
    var url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
        //this variable i use to test the second 'if' (getStatusCode)
        // var url = "https://foo"
    return new Promise(function(resolve, reject) {
        //request for api
        request(url,
            function(error, response, body) {
                if (error) {
                    return reject(error);
                } else {
                    var getStatusCode = response.statusCode;
                    try {
                        if (getStatusCode != 200) {
                            console.log('Request Failed, HTTP Status Code: ' + getStatusCode);
                            reject(error);
                        } else {
                            resolve(body);
                        }
                    } catch (error) {
                        console.log("Unknown Error[API]: " + error);
                    }
                }
            });
    });
}

async function main() {

    var quote = await getQuote();
    var data = JSON.parse(quote);
    var eur = data.bpi.EUR.rate;
    var usd = data.bpi.USD.rate;
    var gbp = data.bpi.GBP.rate;
    var disclaimer = data.disclaimer;


    console.log("\n******CoinDesk Bitcoin Price Index API******\n" +
        "\nDisclaimer: " + disclaimer + "\n"
    );

    if(argv.BPI == 'USD'){
        console.log("\nThe Bitcoin price in United States Dollar: " + usd + "\n");
    }else if (argv.BPI == 'EUR') {
        console.log("\nThe Bitcoin price in Euro: " + eur + "\n");
    }else if (argv.BPI == 'GBP') {
        console.log("\nThe Bitcoin price in British Pound Sterling: " + gbp + "\n");
    }else{
      console.log("Sorry, I don't identify this option, please utilize this options USD, EUR or GBP follow the example: node server.js --BPI=USD\n");
    }

}
main();
