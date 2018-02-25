var Client = require('node-rest-client').Client;
var client = new Client();


// registering remote methods 
client.registerMethod("execute", "http://localhost:5000/execution", "POST");
 

function execute(codeAndLanguage) {
    return new Promise((resolve, reject) => {
        const args = {
            data: codeAndLanguage,
            headers: { "Content-Type": "application/json" }
        }
        // the data received form execution server will be a json object
        //  - which has properties can be directly accessed
        client.methods.execute(args, function (data, response) {
            // console.log(typeof data);
            // console.log(data);
            // console.log(data.build);
            // console.log(data.run);
            // console.log(JSON.stringify(data));
            // return JSON.stringify(data);
            resolve(JSON.stringify(data));
        }).on('error', function (err) {
            console.log('something went wrong on the request', err.request.options);
            reject("ERROR: something went wrong on the request");
        });

        // handling client error events 
        client.on('error', function (err) {
            console.error('Something went wrong on the client', err);
            reject("ERROR: Something went wrong on the client");
        });
    });
    
}

module.exports = {
    execute
}