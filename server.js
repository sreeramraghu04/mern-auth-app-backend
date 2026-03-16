/* import app from "./src/App.js";
import colors from "colors";
import config from "./src/config/config.js";
import mongoose from "mongoose";

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`App is running at PORT ${PORT}`.bgBlack.blue);
});

(async (req, res) => {
  try {
    await mongoose.connect(config.MONGODB_URL);
    console.log("successfully connected to mongodb".bgBlack.rainbow);
  } catch (error) {
    console.log(`Error in db connection ${error}`.bgRed.white);
    res.status(500).json({
      success: false,
      message: `Error in db connection ${error}`,
      error,
    });
  }
})(); */

import app from "./src/App.js";
import colors from "colors";
import config from "./src/config/config.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = config.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URL);
    console.log("Mongo URL:", config.MONGODB_URL);
    console.log("MongoDB connected".bgBlack.green);

    app.listen(PORT, () => {
      console.log(`App is running at PORT ${PORT}`.bgBlack.blue);
    });
  } catch (error) {
    console.log(`Error in db connection ${error}`.bgRed.white);
    process.exit(1);
  }
};

connectDB();
