const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

// Handling Uncought Exception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to uncought Excetion`);

  process.exit(1);
});

// config
dotenv.config({ path: "backend/config/config.env" });

// connecting to DataBase
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});

// Unhandle Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to unhandle promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
