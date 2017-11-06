import getQuote from "./coindesk.js";

  export default async function main() {

        let quote = await getQuote();
        let data = JSON.parse(quote);

        const coin = {

            disclaimer:data.disclaimer,
            eur:data.bpi.EUR.rate,
            usd:data.bpi.USD.rate,
            gbp:data.bpi.GBP.rate
        };

        console.log("\n******CoinDesk Bitcoin Price Index API******\n" +
            "\nDisclaimer: " + coin.disclaimer + "\n"
        );

        const coinValidation = () =>
            process.argv[2] == 'USD' ? console.log("The Bitcoin price in United States Dollar: " + coin.usd + "\n") :
            process.argv[2] == "EUR" ? console.log("\nThe Bitcoin price in Euro: " + coin.eur + "\n") :
            process.argv[2] == "GBP" ? console.log("\nThe Bitcoin price in British Pound Sterling: " + coin.gbp + "\n") : ""

        coinValidation();
  }
