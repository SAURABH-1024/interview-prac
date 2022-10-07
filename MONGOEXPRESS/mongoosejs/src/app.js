// const mongoose = require("mongoose");

// //Connection establishment and creating a new db// 

// mongoose
//   .connect("mongodb://localhost:27017/Finals", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("connection succesfull"))
//   .catch((err) => console.log("error"));

// //Schema
// // it defines the structure of the document, default values validators

// //creating a schema//

// const playlistSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },

//   rollno: Number,
//   subject: String,
//   marks: Number,
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // creating a new collection using mongoose.model//

// const Score = new mongoose.model("Score", playlistSchema);

// // creating a new document

// const student = new Score({
//     name: "saurabh ambesange",
//     rollno: 01,
//     subject: "Mathematics",
//     marks : 100
// })

// student.save

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/newDatabase", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("connected to server"))
  .catch((err) => console.log(err));

// //Schema
// // it defines the structure of the document, default values validators

//creating a doc schema//

const dbSchema = new mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  rollno: Number,
  subject: String,
  marks: {
    type: Number,
    validate(value) {
      if (value < 0) {
      throw new Error("negative values cannot be used")
    }
  }
  },
  Attendance: String,
  date: {
    type: Date,
    default: Date.now.toDateString,
  },
});

// // creating a new collection using mongoose.model//

const newCollection = new mongoose.model("newCollection", dbSchema);

// creating a new document(two methods)
// 1-------- const documentName = new collectionName({doc to be added})

// const Student1 = new newCollection({
//   name: "Saurabh",
//   rollno: 03,
//   subject: "reactjs",
//   marks:99
// })
// Student1.save();

//using async method to create a documnent//
//preferred method//

// // 2 ----const function =  async()=>{
//   try{(document structure with details)
// const result = await   student1  .save(); console.log(result)} catch (err) { console.log(err); }
// }




// const Student = async () => {
//   try {
//     const React = new newCollection({
//       name: {
//         firstName: "Saurabh",
//         lastName: "Ambesange",
//       },
//       rollno: 03,
//       subject: "Reactjs",
//       marks: 95,
//     });


//     const result = await React.save()
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// Student();



// -----------INSERT MULTIPLE DOCUMENTS AT ONCE ----------------//

// // 2 ----const function =  async()=>{
//   try{(document structure with details)
// const result = await   collectionName.insertMany([docNames]); console.log(result)} catch (err) { console.log(err); }
// }

// const Student = async () => {
//   try {
//     const React = new newCollection({
//       name: {
//         firstName: "Saurabh",
//         lastName: "Ambesange",
//       },
//       rollno: 03,
//       subject: "Reactjs",
//       marks: 95,
//     });


//     const Express = new newCollection({
//       name: {
//         firstName: "Saurabh",
//         lastName: "Ambesange",
//       },
//       rollno: 03,
//       subject: "Expressjs",
//       marks: 90,
//     });
//     const Nodejs = new newCollection({
//       name: {
//         firstName: "Saurabh",
//         lastName: "Ambesange",
//       },
//       rollno: 03,
//       subject: "Nodejs",
//       marks: 98,
//     });

//     const result = await newCollection.insertMany([React, Express, Nodejs]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// Student();




//-----------READ OR GET DOCUMENTS---------//
// we can use different query operator and projections in this method //

// const getDocument = async () => {
//   const result = await newCollection.find({ marks: { $lt: 99 } }).select({subject: 1})
//   console.log(result);
// }
// getDocument()




// const updateDoc = async (_id) => {
//   try {
//     const result = await newCollection.updateOne({ _id}, { $set: { Efficiency: "Good"  } })
//     console.log(result);
//   }
//   catch (err) { console.log(err) }
// }

//   updateDoc("61dbd58d13bd466bb3e22545");

const updateDoc = async () => {
  try {
    const result = await newCollection.updateMany({ rollno:3}, { $set: { Attendance: "78%"  } })
    console.log(result);
  }
  catch (err) { console.log(err) }
}

  updateDoc();