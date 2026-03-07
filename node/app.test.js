import { describe, it, expect } from "vitest";
import request from "supertest";
import { createApp } from "../../../dev/node/express/app.js";
import { serve } from "@hono/node-server";

describe("Server", () => {
  it("should respond to health check", async () => {
    process.env.APP_NAME = "The Great Unknown";

    const app = createApp();

    const server = serve({ fetch: app.fetch, port: 0 }); // port: 0 = random free port

    await request(server).get("/api/v1/health").expect(200);
    server.close();
  });
});
