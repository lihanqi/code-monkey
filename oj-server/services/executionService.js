var Client = require('node-rest-client').Client;
var client = new Client();


// registering remote methods 
client.registerMethod("execute", "http://localhost:5000/execution", "POST");
 


function execute(codeAndLanguage) {
    const args = {
        data: codeAndLanguage,
        headers: { "Content-Type": "application/json" }
    }

    client.methods.execute(args, function (data, response) {
        // console.log("execution");
        // parsed response body as js object 
        // console.log(JSON.parse(data));
        console.log(typeof data);
        console.log(data.toString());
        // raw response 
        // console.log(response);
    });
}

module.exports = {
    execute
}