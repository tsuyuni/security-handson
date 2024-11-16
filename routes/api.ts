import express from "express";

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.setHeader("X-Timestamp", Date.now());
  let message = req.query.message;
  const lang = req.headers["x-lang"];
  if (message === "") {
    res.status(400);
    if (lang === "en") {
      message = "Message is empty";
    } else {
      message = "メッセージが空です";
    }
  }
  res.send({ message });
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

export default router;
