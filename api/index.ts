import { Hono } from "hono";
import { handle } from "hono/nextjs";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.get(
  "/",
  async (c, next) => {
    const start = Date.now();
    await next();
    const end = Date.now();

    return c.json({ "X-Response-Time": `${end - start}` });
    
  }
);

export default handle(app);
