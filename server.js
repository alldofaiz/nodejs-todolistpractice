const express = require("express");
const cors = require("cors"); // Tambahkan import untuk cors
const { sequelize } = require("./config/db");

const app = express();

// Konfigurasi CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Sesuaikan dengan origin frontend Anda
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// Verifikasi koneksi ke database
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
    return sequelize.query("SELECT NOW() AS now"); // Query sederhana
  })
  .then(([results]) => {
    console.log("Current time from DB:", results[0].now);
  })
  .catch((err) => {
    console.error("Unable to connect to the database or execute query:", err);
  });

// Middleware dan routes
app.use(express.json());
app.use("/tasks", require("./routes/taskRoutes"));

// Mulai server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
