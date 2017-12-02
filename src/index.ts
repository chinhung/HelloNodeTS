import * as http from 'http';

function greeter(person: string) {
    return "Hello " + person;
}

let user = "John";

const server = http.createServer(function(request:http.IncomingMessage,response:http.ServerResponse):void{
    console.log("create a server...");
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write(greeter(user) + ', we use typescript to develop.');
    response.end();
});

server.listen(3000,function(){
    console.log("Server listening on port 3000");
    console.log("test...");
});