const express = require("express");
const { sequelize } = require("./models");
const routes = require("./routes/user.js");

const app = express();

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("An error occurred while connecting to the database:", error);
  });

app.use(express.json());
app.use("/api", routes);

app.listen(8000, () => {
  console.log("Server started on port 3000");
});
