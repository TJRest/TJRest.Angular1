//npm install http
//npm install httpdispatcher

var http = require('http');
var dispatcher = require('httpdispatcher');


//Lets define a port we want to listen to
const PORT=8080; 

function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('resources');

//A sample GET request    
dispatcher.onGet("/data/propertySchema", function(req, res) {
    var resp = {};
    var codeResp = 200;
    switch(req.params.id){
        case "project.property":
            resp['type'] = 'property';
            break;
        case "project.balance":
            resp['type'] = 'balance';
            break;
        default:
            codeResp = 500;
            break;
    }


    res.writeHead(codeResp, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(resp));
});    

//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});