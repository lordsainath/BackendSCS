const http = require('http');
// console.log(typeof http)
// console.log(http)

const Server = http.createServer((req,res)=>{
    console.log("we are using http moudle to create server")
    if(req.url == '/'){
        res.end("you are on a homepage")
    }else if(req.url == '/profile'){
        res.end("you are on a profilepage")
    }else if(req.url = "/about"){
        res.end("you are on a about page")
    }
    
    
});

Server.listen(3000)