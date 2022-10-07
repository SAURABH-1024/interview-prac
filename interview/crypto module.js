// import {createHmac,cipher } from 'crypto';

// const key = "saurabh"
// const hash = createHmac('sha256', key)
//     .update('Ambesange')
//     .digest('hex')
// console.log(hash);

//__________________________________________________________________//


// Node.js program to demonstrate the     
// crypto.createCipheriv() nd createDecipheriv() method

// const cipher = crypto.createCipheriv('aes192', "saurabh@1024")
// var encrypted = cipher.update("saurabh", "utg-8", "hex");

// encrypted += cipher.finalize('hex')
// console.log(encrypted);


// crypto module
// import { randomBytes, createCipheriv, createDecipheriv } from "crypto";

// const algorithm = "aes-256-cbc"; 

// // generate 16 bytes of random data
// const initVector = randomBytes(16);

// // protected data
// const message = "This is a secret message";

// // secret key generate 32 bytes of random data
// const Securitykey = randomBytes(32);

// // the cipher function
// const cipher = createCipheriv(algorithm, Securitykey, initVector);

// // encrypt the message
// // input encoding
// // output encoding
// let encryptedData = cipher.update(message, "utf-8", "hex");

// encryptedData += cipher.final("hex");

// console.log("Encrypted message: " + encryptedData);


// // the decipher function
// const decipher = createDecipheriv(algorithm, Securitykey, initVector);

// let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

// decryptedData += decipher.final("utf8");

// console.log("Decrypted message: " + decryptedData);









// Node.js program to demonstrate the     
// crypto.createHash() method

// Includes crypto module
const crypto = require('crypto');

// Defining key
const secret = 'Hi';

// Calling createHash method
const hash = crypto.createHash('sha256', secret)

    // updating data
    .update('How are you?')

    // Encoding to be used
    .digest('hex');

// Displays output
console.log(hash);