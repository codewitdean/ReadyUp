import express from "express";
import cors from "cors";
import eventRoutes from "./routes/eventRoutes";

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ReadyUp API is running");
});

app.use("/api/events", eventRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});