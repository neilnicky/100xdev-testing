import express from "express";
import z from "zod";

export const app = express();
app.use(express.json());

const sumInput = z.object({
  a: z.number(),
  b: z.number(),
});

app.post("/sum", (req, res) => {
  const parsedResponse = sumInput.safeParse(req.body);

  if (!parsedResponse.success) {
    return res.status(411).json({
        message: "Incorrect Input"
    })
  }
});

app.post("/sum", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  const result = a + b;

  res.json({ answer: result });
});
