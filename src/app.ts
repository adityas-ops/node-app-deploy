import express from "express";
import type { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Server is running and I am Aditya Sharma");
});

export default app;