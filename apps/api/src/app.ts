import cors from "cors";
import express from "express";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Base & Health check routes
app.get("/", (req, res) => {
  res.send("✅ Praxys server is running...");
});

app.get("/api/health", (req, res) => {
  res.json({
    service: "praxys-api",
    status: "ok",
    timestamp: new Date().toLocaleString(),
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

export default app;
