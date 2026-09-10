import request from "supertest";
import { expect, test } from "@jest/globals";
import app from "../src/app";

test("GET / returns 200", async () => {
  const res = await request(app).get("/");

  expect(res.statusCode).toBe(200);
});