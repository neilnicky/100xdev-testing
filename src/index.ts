import express from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  const result = a + b;

  res.json({ answer: result });
});



app.post("/multiply", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (a > 1000000 || b > 1000000) {
    return res.status(422).json({
      message: "Numbers must be less than 1,000,000",
    });
  }

  const result = a * b;

  res.json({ answer: result });
});
