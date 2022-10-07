// import { createServer } from 'http';
// import fs from 'fs'

// const server = createServer((req, res) => {
//     if (req.url == "/") {
//         res.end("Home")
//     } else if (req.url == "/About") {
//         res.end("About")
//     } else if (req.url == "/userapi") {
//         fs.readFile("./userApi/userapi.json", "utf-8", (err, data) => {
//             console.log(objData[1].employee_name);
//             const objData = JSON.parse(data);
//             res.end(objData[1].employee_name)
//        })

//     } else {
//         res.writeHead(404, { "content-type": "text/html" });
//         res.end("<h1>Page does not exist<h1/>")
//     }

// // res.end("req returned succesfully")
// })

// server.listen(8000, "127.0.0.1", () => {
//     console.log("req recieved");
// })

//--------- how to read data from an api using node server ---------//

// import { createServer } from 'http'
// import fs from "fs"

// const server = createServer((req, res) => {
//     if (req.url == "/") {
//         res.end("Home")
//     }
//     else if (req.url == "/About") {
//         res.end("About")
//     }
//     else if (req.url == "/userapi") {
//         fs.readFile("./userApi/userapi.json", "utf-8", (err, data) => {
//             const objData = JSON.parse(data)
//             res.end(objData);
//             res.writeHead(200, { "content-type": "application/json" });
//             console.log(objData);

//             // console.log(objData[2].employee_name);
//             // console.log(objData[2].employee_age);
//             // console.log(objData[2].employee_salary);
//         } )

//     }
//     else {
//         res.writeHead(404, { "content-type": "text/html" });
//         res.end("<h1>Page does not exist<h1/>")
//     }

//     // res.end("data sent")
// })
// server.listen(8000, "127.0.0.1", () => {
//     console.log("req recieved");
// })

//_____________________________________________________________________________________________________________________//


// import { createServer } from "http";
// import fs from "fs";

// const server = createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("home");
//   } else if (req.url == "/error") {
//     res.end("successful");
//   } else if (req.url == "/userapi") {
//     fs.readFile("./userApi/userapi.json", "utf-8", (err, data) => {
//         const objData = JSON.parse(data);
//         // res.end(objData[3].employee_name);
//       res.end(objData[2].employee_age);

//     //   console.log(objData[3].employee_age);
//     //   console.log(objData[3].employee_salary);


//     });
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.end("error");
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("request recieved");
// });


//_____________________________________________________________________________________________________________________//


// import { createServer } from "http";

// const server = createServer((req, res) => {
//     res.end("done")
// })

// server.listen(8000, "127.0.0.1", () => {
//     console.log("server created sucessfully");
// })


//_____________________________________________________________________________________________________________________//


// import { createServer } from "http";

// createServer(function (req, res) {
//     // Send the HTTP header
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     res.writeHead(200, { 'Content-Type': 'text/plain' });

//     // Send the response body as "Hello World"
//     res.end('Hello World')
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');



//_____________________________________________________________________________________________________________________//



// import { createServer } from "http";

// const server = createServer((req, res) => {
//     res.setHeader("content-type", "text/plain")
//     res.end("home")
// }).listen(8000, "127.0.0.1", () => {
//     console.log('server created');
// })
//_____________________________________________________________________________________________________________________//


// var events = require("events")
// var eventEmitter = new events.EventEmitter();

//Create an event handler:
// const myEvent = () => {
//     console.log(" I heard a scream");
// }

//Fire the 'scream' event:
//Assign the event handler to an event:
// eventEmitter.on('end', myEvent)
// eventEmitter.emit("end")

//_____________________________________________________________________________________________________________________//

// const EventEmitter = require('events')
// const eventEmitter = new EventEmitter()

// eventEmitter.on('start', () => {
//     console.log('started')
//   })
//   eventEmitter.emit('start')




// const events = require("events")
// const eventEmitter = new events.EventEmitter();
// eventEmitter.on("open", () => {

//     setTimeout(() => {
//         const a = "rohan solunke"
//         console.log( "my name is saurabh . ${a} My age is 24");
// },1000,)
//     })
// eventEmitter.emit("open")

// cout<< my name rohan solunke<< a





const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        })
        res.end('Home Page')
    }
    else if (req.url == "/about") {
        res.end("about page")
    }
    else {
        res.writeHead(404, {
            ContentType: 'text/plain'
        })
        res.end("error")
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("node server created and running on port 8000");
})
