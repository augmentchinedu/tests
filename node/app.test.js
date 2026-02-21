// app.test.js
import { describe, it, expect } from "vitest";
import request from "supertest";
import { createApp } from "../../../dev/node/express/app.js";

describe("Server", () => {
  it("should respond to health check", async () => {
    process.env.APP_NAME = "The Great Unknown";

    const app = createApp();
    const res = await request(app).get("/api/health");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      status: "ok",
      service: "The Great Unknown",
    });
  });
});