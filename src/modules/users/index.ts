import Elysia from "elysia";
import { createUser, getAllUsers } from "./services";
import { userValidation } from "./validations";

export const users = new Elysia()
  .get("/users", async () => {
    return await getAllUsers();
  })
  .get("/users/healt-check", ({ set }) => {
    set.status = 200;
    return "Ok";
  })
  .post("/users", async ({body}) => {
    await createUser(body);
  }, {
    ...userValidation
  })
