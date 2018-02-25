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
        let execution = client.methods.execute(args, function (data, response) {
            // console.log(typeof data);
            // console.log(data);
            // console.log(data.build);
            // console.log(data.run);
            // console.log(JSON.stringify(data));
            // return JSON.stringify(data);
            resolve(JSON.stringify(data));
        });
        execution.on('error', error => {
            console.log('Execution Eror');
            reject('Execution Eror');
        })
    });
    
}

module.exports = {
    execute
}