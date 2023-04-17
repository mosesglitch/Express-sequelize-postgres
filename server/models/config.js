const Sequelize = require("sequelize");
const UserModel = require("./user");

const sequelize = new Sequelize("serviojs", "paps", "chapo", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

const models = {
  User: UserModel(sequelize, Sequelize),
  // Add more models here if needed
};
// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

module.exports = {
  sequelize,
  ...models,
};
