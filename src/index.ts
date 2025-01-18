import express from "express";
import { prismaClient } from "./db";

export const app = express();
app.use(express.json());

app.post("/multiply", async (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (a > 1000000 || b > 1000000) {
    res.status(422).json({
      message: "Numbers must be less than 1,000,000",
    });
    return;
  }

  const result = a * b;

  await prismaClient.request.create({
    data: {
      a: a,
      b: b,
      answer: result,
      type: "Multiply",
    },
  });

  res.json({ answer: result });
});
