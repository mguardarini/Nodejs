import request from 'request';

export default function getQuote() {
    // var url = 'https://api.coindesk.com/v1/bpi/currentprice/CNY.json';
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
        //this variable i use to test the second 'if' (getStatusCode)
        // var url = "https://foo"
    return new Promise(function(resolve, reject) {
        //request for api
        request(url,
            function(error, response, body) {
                if (error) {
                    return reject(error);
                } else {
                    let getStatusCode = response.statusCode;
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
