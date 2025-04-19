const express = require("express");
// ... other imports ...

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  // Specific route for the backend root
  app.get("/", (req, res) => {
    res.send("Backend API is running in production...");
  });

  // This catch-all route MUST be defined AFTER all your API routes
  // and the specific backend root route.
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running in development...");
  });
}

// --------------------------deployment------------------------------

app.use(notFound);
app.use(errorHandler);

// ... rest of your server.js (port, socket.io)
