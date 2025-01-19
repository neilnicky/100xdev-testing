import express from "express";
import { prismaClient } from "./db";
import { z } from "zod";

export const app = express();
app.use(express.json());

const sumInput = z.object({
  a: z.number(),
  b: z.number(),
});

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

  const request = await prismaClient.request.create({
    data: {
      a: a,
      b: b,
      answer: result,
      type: "Multiply",
    },
  });

  res.json({ answer: result, id: request.id }); 
});

app.post("/sum", async (req, res) => {
  const parsedResponse = sumInput.safeParse(req.body);

  if (!parsedResponse.success) {
    res.status(411).json({
      message: "Incorrect inputs",
    });
    return;
  }

  const answer = parsedResponse.data.a + parsedResponse.data.b;

  await prismaClient.request.create({
    data: {
      a: parsedResponse.data.a,
      b: parsedResponse.data.b,
      answer: answer,
      type: "Sum",
    },
  });

  res.json({
    answer,
  });
});
