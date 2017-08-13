"use strict";

const argv = require('yargs').argv
var request = require('request');

function getQuote() {

    // var url = 'https://api.coindesk.com/v1/bpi/currentprice/CNY.json';
    var url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
        // var url = "https://foo"

    return new Promise(function(resolve, reject) {

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
                        console.log("Unknown Error: " + error);
                    }
                }
            });
    });
}

async function main() {

    var quote = await getQuote();

    var data = JSON.parse(quote);

    console.log("\n******CoinDesk Bitcoin Price Index API******" +
        "\nDisclaimer: " + data.disclaimer + "\n"
    );

    switch (argv.BPI) {

        case argv.BPI == 'USD':
            {
                console.log("\nThe Bitcoin price in United States Dollar: " + data.bpi.USD.rate);
                break;
            }
        case argv.BPI == 'EUR':
            {
                console.log("\nThe Bitcoin price in Euro: " + data.bpi.EUR.rate);
                break;
            }
        case argv.BPI == 'GBP':
            {
                console.log("\nThe Bitcoin price in British Pound Sterling: " + data.bpi.GBP.rate);
                break;
            }
        default:
            {
                console.log("Sorry, I don't identify this option, please utilize this options USD, EUR or GBP follow the example: node server.js --BPI=USD\n");
                break;
            }


    }

}

main();

exports.module = getQuote;