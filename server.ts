import express from "express";
import api from "./routes/api";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/api", api);

app.get("/", (req, res, next) => {
  res.end("Top Page");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
