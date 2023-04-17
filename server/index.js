const express = require("express");
const { sequelize, User } = require("./models/config");
const routes = require("./routes/user.js");
// const User = require("./models/user");
const app = express();

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("An error occurred while connecting to the database:", error);
  });

User.create({
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
  password: "secret",
}).then((user) => {
  console.log("User created:", user.toJSON());
});
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });
app.use(express.json());
app.use("/api", routes);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
