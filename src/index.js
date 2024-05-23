import dotenv from "dotenv";

import { app } from "./app.js";
import { connectDB } from "./db/index.js";

dotenv.config({
  path: "./config.env"
});

await connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("ERROR::", err);
      throw err;
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed", err);
  });

const PORT = process.env.PORT || PORT;

app.listen(PORT, () => {
  console.log("app is listening at port 8000");
});
