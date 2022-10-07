// // // const fs = require('fs')
// // // const os = require('os')

// // // fs.writeFileSync("read.txt", "tiral 2")

// // // fs.appendFileSync("read.txt", "new data entered")


// // // const read = fs.readFileSync("read.txt", "utf-8")

// // // // const readnew = read.toString();
// // // console.log(read);
// // // // fs.renameSync("read.txt" ,"newread.txt")

// // // fs.unlinkSync("read.txt")

// // // const data  =  os.totalmem()

// // // console.log(`${data}`);

// // import chalk from "chalk";
// // import validator from "validator"

// // // console.log(chalk.inverse.green("hello"));

// // const res = validator.isEmail('dsd@gmai.com')
// // console.log(res? chalk.inverse.green(res) : chalk.inverse.redBright(res)  );







// import { createServer} from "http";

// const server = createServer((req, res) => {
//     res.end("Here is the info")
// })

// server.listen(8000, "127.0.0.1",() => {
//     console.log("req received");
// })



// import { createServer } from "http";

// const server = createServer((req, res) => {
//     res.end("correct")
// })
// server.listen(8000, "127.0.0.1", () => {
//     console.log("req received");
// } )

// import { writeFile } from 'fs';
// import { readFile } from 'fs';


// const bioData = {
//     name: "saurabh",
//     age: 25,
//     job: "unemployed"
// }

// const jsonData = JSON.stringify(bioData);
// // console.log(jsonData);

// writeFile("json1.json", jsonData, (err) => {
//     console.log("done");
// })

// readFile("json1.json",  "utf-8" , (err, data) => {
//     console.log(data);
//     const orgData = JSON.parse(data);
// console.log(orgData);
// } )


// import fs from 'fs';

// const bioData = {
//         name: "saurabh",
//         age: 25,
//         job: "unemployed"
// }


// const jsonData = JSON.stringify(bioData);
// // console.log(jsonData);


// // fs.writeFile("newJson.json", jsonData, (err) =>{
// //     console.log("mew file created");
// // })

// fs.readFile("newJson.json", "utf-8", (err, data) => {
//     console.log(data);

// const objData = JSON.parse(data)
// console.log(objData);
// }  )




