// import events from 'events';
// const eventEmitter = new events.EventEmitter();

// // create an event handler

// const newEventHandler = function () {
//     console.log("event created");
// }

// // assign the event handler to an event

// eventEmitter.on("event", newEventHandler);

// //Fire the event
// eventEmitter.emit('event');


// import events from "events"
// const eventEmitter = new events.EventEmitter();

// const eventHandler = function () {
//     console.log("event created");
// }


// eventEmitter.on('event', eventHandler);

// eventEmitter.emit("event")


// const Memoize = (func) => {
//     let result = {}
//     return (...args) => {
//         const argskey = JSON.stringify(...args)
//         if (!result[argskey]) {
//             result[argskey] = func(...args)
//         }
//     }

// }



// // const calculation = (num1) => {
// //     for (let i = 1; i <= 5; i++) { }
// //     return num1 * num1
// // }

// // var result = calculation()


// const square = num => {
//     let result = 0;
//     for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= num; j++) {
//             result++
//         }
//     }
//     return result;
// }


// const memoizedfunc = Memoize(square)
// console.log(result)


// console.time("firstcall")
// console.log(memoizedfunc(827));
// console.timeEnd("firstcall");

// console.time("firstcall")
// console.log(memoizedfunc(827));
// console.timeEnd("firstcall");




import eventEmitter from "events";
const EM = new eventEmitter()


EM.on("submitForm", () => {
    console.log("Form Submitted");
})

EM.emit("submitForm")