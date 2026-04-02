const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/StayHub";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("connected to DB");
}

const initDB = async () => {
  try {
    await main(); // connect to DB

    // Delete old listings
    await Listing.deleteMany({});

    // Add owner and geometry to each listing
    const newData = initData.data.map((obj) => ({
      ...obj,
      owner: "68a59b259ddd182d7f64568b",
      geometry: {
        type: "Point",
        coordinates: [72.8777, 19.0760], // Mumbai coordinates
      },
    }));

    await Listing.insertMany(newData);
    console.log("data was initialized");
  } catch (err) {
    console.error("Error initializing DB:", err);
  } finally {
    await mongoose.connection.close(); // close connection so Node exits
    console.log("DB connection closed, script finished");
    process.exit(0);
  }
};

initDB(); // ✅ actually call the function



// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/StayHub";

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj) => ({
//     ...obj,
//      owner: "68a59b259ddd182d7f64568b",
//  owner: "68a59b259ddd182d7f64568b",
     
//     }));
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");

//   };

// initDB;