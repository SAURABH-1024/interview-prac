const express = require('express')
const app = express()
const cluster = require('cluster')
const os = require('os')



// const numCpu = os.cpus().length

// app.get("/", (req, res) => {

//     for (let i = 0; i < 1e8; i++) {
//     //some long running task
//     }
//     res.send(`server ${process.pid} running`);
//     // cluster.worker.kill()
// })

// if (cluster.isMaster) {
//     for (let i = 0; i < numCpu; i++) {
//         cluster.fork()
//     }
//     cluster.on('exit', (worker) => {
//         console.log(`worker ${worker.process.pid} died`);
//         cluster.fork()
//     })
// } else {
//     app.listen(8000, () => {
//         console.log(`server ${process.pid} running at 8000`);
//     })
// }

// // app.listen(8000, () => {
// //     console.log(`server ${process.pid} running at 8000`);
// // })




const numCpu = os.cpus().length

app.get("/", (req,res) => {
    for (let i = 0; i < 1e5; i++){
        //
    }
    res.send(`server ${process.pid} sending a req`)
    cluster.worker.kill()
})

// if (cluster.isMaster) {
//     for (let i = 0; i < numCpu; i++){
//         cluster.fork()
//     }

//     cluster.on("exit", (worker) => {
//         console.log(`worker with id ${worker.process.pid} died`);
//         cluster.fork()
//     })

// } else {
//     app.listen(8000, () => {
//         console.log(`server ${process.pid} running on port 8000`);
//     })
// }

app.listen(8000, () => {
    console.log(`server running on port 8000`);
})