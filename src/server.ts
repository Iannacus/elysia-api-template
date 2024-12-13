import { Elysia } from "elysia";
import { users } from "./users";

const server = new Elysia()
  .use(users)
  .listen(3000);

export { server };
