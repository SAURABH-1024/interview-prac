// // const EventEmitter = require('events');
// // const eventEmitter = new EventEmitter();

// // // First listener
// // eventEmitter.on('event', (arg1)=> {
// //   console.log(`Helloooo! first listener ${arg1}`);
// // });
// // // Second listener
// // eventEmitter.on('event', (arg1, arg2)=> {
// //   console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
// // });
// // // Third listener
// // eventEmitter.on('event', (...args)=> {
// // //   const parameters = args.join('_');
// //   console.log(`event with parameters ${args} in third listener`);
// // });


// // eventEmitter.emit('event', 1, 2, 3,4,5,6,7);
// // console.log(eventEmitter.listeners('event'));


// const event = require('events');
// const eventemitter = new event()

// eventemitter.on("hello", (fullname) => {
//     console.log(`my fullname is ${fullname}`);
// })


// eventemitter.emit("hello", "saurabh Ambesange")


// //_____________________________________________________________________________________________________________________//

// // CRUD Opreation using Node Fs Modules

// // const fs = require('fs');
// // /const { isTypedArray } = require('util/types');
// // import { createServer } from "http";

// // const server = createServer((req, res) => {
// //     res.setHeader("content-type", "text/plain")
// //     res.end()
// // }).listen(8000, "127.0.0.1", () => {
// //     console.log('server created');
// // })

// // ---CREATE FOLDER-------// fs.mkdirSync("final practice") //create a folder
// // ---CREATE NEW FILE-------//// fs.writeFileSync("final practice/bio.txt","My name is saurabh") //create a file using write method..
// // if we use write method on same file twice the first data will be overriden
// // ---UPDATE EXISITING FILE-------//fs.appendFileSync("final practice/bio.txt", " I am a MERN stack developer.
// // I have been practicing for almost 9 month now.I need a job")
// //to update a file without overriding it, use append method
// // ---READ FILE-------//const read= fs.readFileSync("final practice/bio.txt", "utf-8")
// // console.log(read.toString());
// //when using read method the utf-8 should be specified otherwise we will get buffer data. and we also have to use the toString() method to convert
// // the data to string

// // ---DELETE-------//
// // fs.unlinkSync("final practice/bio.txt")



// // let a = 10
// // console.log(a);

// // function task() {
// //     let a = 20
// //     console.log(20);
// //     if (true) {
// //         let a = 30
// //         console.log(a);
// //     }
// //     console.log(a);
// // }

// // task()

// // console.log(a);

// //10, 20 30 20  10






// // var a = 10
// // console.log(a);

// // function task() {
// //     var a = 20
// //     console.log(20);
// //     if (true) {
// //         var a = 30
// //         console.log(a);
// //     }
// //     console.log(a);
// // }

// // task()

// // console.log(a);

// // 10 20 30 30 10

// //______________________________________________________________________________________-//

// // Morning("saurabh")
// // Evening("Ambesange")

// // function Morning(name) {
// //     console.log(`Good Morning ${name}`);
// // }


// // function Evening(name) {
// //     console.log(`Good Evening ${name}`);
// // }


// //______________________________________________________________________________________-//

// // Morning("saurabh")
// // Evening("Ambesange")
// // this will give error saying morning is not a function

// // var Morning = function(name) {
// //     console.log(`Good Morning ${name}`);
// // }


// // var Evening = function(name) {
// //     console.log(`Good Evening ${name}`);
// // }

// // Morning("saurabh")
// // Evening("Ambesange")


// //______________________________________________________________________________________-//

// // Morning("saurabh")
// // Evening("Ambesange")

// // // this will give error saying cannot access morning before initialisation


// // let Morning = function(name) {
// //     console.log(`Good Morning ${name}`);
// // }


// // let Evening = function(name) {
// //     console.log(`Good Evening ${name}`);
// // }


// // if we call a simple function before defining isTypedArray, it will not give error
// // if we store the functions in the variables then the results would be:
// // ---if we use VAR and call it before defining it, it will give an error saying , the "funcName" is not a function
// // ---if we use LET and call it before defining it, it will give an error saying , cannot access the function before initialising it

// //______________________________________________________________________________________-//


// // Q: This object

// // function printThis() {
// //     return console.log(this);
// // }

// // var global = printThis()
// // global //  when gloabl is set to printThis() this will give error as global is not a function, it is a variable, but when global is set to printThis(no parenthesis is used after printThis)then we can call it as global()
// // printThis()    // this will print the global obj as this is a global obj


// // let obj = {
// //     a: 1, b: 2, c: printThis
// // }

// // obj.c()



// // var url = require('url')

// // var address = "http://localhost:8000/default.html?year=2019&month=april"

// // const q = url.parse(address, true)

// // console.log(q.host); // localhost:8000
// // console.log(q.pathname); // /default.html
// // console.log(q.search); //?year=2019&month=april
// // console.log(q.query);  // returns an object {year:2019, month:april}




// // const callMe = new Promise((resolve, reject) => {
// //     let truth = null

// //     if (truth) {
// //         resolve("Resolved")
// //     } else {
// //         reject("Rejected")
// //     }
// // })

// // callMe
// //     .then(result => console.log(result))
// //     .catch(err => console.log(err))






// // const news = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log(" promise result");
// //     }, 2000)
// // })

// // news
// //     .then(result => console.log("resolved"))
// //     .catch(err => console.log("rejected"))






// // let myPromise = new Promise(function (myResolve, myReject) {
// //     setTimeout(() => {
// //         console.log("understanding promises")
// //         let api = [1, 2, 3, 4, 5, 6, 7, 8]
// //         myResolve(api)
// //         myReject("error")
// //     }, 2000)
// // })


// // const myDisplayer = (index) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout((index) => {
// //             let bio = {
// //                 name: "saurabh",
// //                 age: 25,
// //                 city: "pune"
// //             }
// //             resolve(`my age is ${index} and my name is ${bio.name}`)
// //         }, 2000, index)
// //     })
// // }


// // myPromise
// //     .then((api) => {
// //         console.log(api)
// //         myDisplayer(api[2]).then((trial) => {
// //        console.log(trial);
// //     })
// //     })
// //     .catch(() => { console.log("error while handling") })



// //______________________CLOSURE SIMPLE EXAMPLE_________________________________________________________________________//

// // function func1() {
// //     var hello = "trial";
// //     console.log("hello");

// //     const func2 = () => {
// //         console.log(hello);
// //     };
// //     return func2();
// // }
// // func1()

// //________________________________________________________________________________________________________________________--//

// //process.nextTick()- runs at the beginning of the next iteration
// // if we use both together then function with process.nextTick will run first and then func with setImmediate will run
// //setImmediate- runs at the end of the next iteration



// // function sum() {

// //     setImmediate(() => {
// //         console.log("executed last but at the end of q");
// //     })

// //     console.log("executed ifrst");


// //     process.nextTick(() => {
// //         console.log("executed at the end of a first iteration");
// //     })
// // }
// // sum()




// // function func2() {
// //     console.log("executed");
// // }
// // func2()

// // function func1() {
// //     console.log("executed first");
// // }
// // func1()

// // ________________________________________________________________________________________________________________________--//


// // Q:
// //  diffn between readfile and create readStream


// // require('fs').readFile("input1.txt", "utf-8", (err, data) => {
// //     if (err) {
// //         console.log("error");
// //     } else {
// //         console.log(data);
// //     }
// // })

// // require('fs').createReadStream("input1.txt", 'utf-8',{ start: 10, end: 15 })


// // ________________________________________________________________________________________________________________________--//

// // const http = require('http')

// // http.createServer((req, res) => {
// //     res.writeHead(200, { "Content-Type": "text/plain" })
// //     res.end("Server Created")
// // }).listen(8000,"127.0.0.1")







// // function news(name) {
// //     console.log(`Hello ${name}`);
// // }

// // var x = news
// // x("saurabh")

// // ________________________________________________________________________________________________________________________--//




// // let names = {
// //     fname: "saurabh",
// //     lname:"Ambesange"
// // }
// // console.log(names);
// // console.log(names.fname);
// // console.log(names.isPrototypeOf);




// // class Animals {
// //     constructor(name, species, age) {
// //         this.name = name;
// //         this.species = species;
// //         this.age = age;
// //     }

// //     action() {
// //         return `${this.name} is ${this.age} years old and its species is ${this.species}`
// //     }
// // }

// // let trial = new Animals("tiger", "king", 5)
// // console.log(trial.action());

// // class birds extends Animals {
// //     constructor(name, species, age, color) {
// //         super(name, species, age)
// //         this.color = color
// //     }

// //     newInfo() {
// //         return `${super.action()} with ${this.color} stripes`
// //     }
// // }

// // let newAnimal = new birds("vulture","carnivore", 5, "brown");
// // console.log(newAnimal.newInfo());
// // console.log(newAnimal);




// // const coder = {
// //     isStudying: false,
// //     printIntro: function () {
// //         console.log(`my name is ${this.name} and i am ${this.isStudying} studying`);
// //     }
// // }

// // const me = Object.create(coder)
// // me.name = "saurabh"
// // me.printIntro()

// // ________________________________________________________________________________________________________________________--//

// // fname += lname
// // mname += num

// // console.log(fname);
// // console.log(num);
// // console.log(mname);

// // var fname = "saurabh"
// // var lname = "Ambesange"
// // var mname = 5
// // var num = 8



// // console.log(fname += lname)
// // console.log(fname += mname += num);


// // function funcone(parameters) {
// //     console.log("saurabh");

// // }


// // let func1 = funcone


// // let func2 = function () {
// //     console.log("Ambesange");
// // }

// // func2()
// // func1(arguments)

// //______________________________________________________________________________//  when



// // Q: how to call an array of promises asynchronously
// //Q: how to aggregate results from multiple asynchronous operations


// // var myFirstPromise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log("first promise has been resolved");
// //         resolve(10);
// //     }, 1000)
// // })


// // var mySecondPromise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log("second promise has been resolved");

// //         resolve(20);
// //     }, 1500)
// // })


// // var myThirdPromise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log("third promise has been resolved");
// //         resolve(30);
// //     }, 2000)
// // })

// // Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(results => {
// //     const total = results.reduce((a, b) => a + b)
// //     console.log(total);

// // }).catch((err)=>{ console.log(err)})


// //______________________________________________________________________________//  when


// // Q:Recursive functions

// // a function that calls itself until it does not complete

// // A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely.
// //  So a recursive function typically looks like the following:

// // function recurse() {
// //     if(condition) {
// //         // stop calling itself
// //         //...
// //     } else {
// //         recurse();
// //     }
// // }




// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10)
//         console.log("first promise");
//     }, 1000)
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(20)
//         console.log("second promise");
//     }, 1500)
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30)
//         console.log("third promise");
//     }, 2000)
// })


// Promise.all([promise1, promise2, promise3]).then((results) => {
//     let total = results.reduce(((a, b) => a + b)
//     )
//     console.log(total);
// }).catch((err) => { console.log(err) })



// // Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(results => {
// //     const total = results.reduce((a, b) => a + b)
// //     console.log(total);

// // }).catch((err)=>{ console.log(err)})


const eventEmitter = require('events')
const EventEmitter = new eventEmitter()


EventEmitter.on("world", () => {
    console.log("hello world")
})
EventEmitter.emit("world")