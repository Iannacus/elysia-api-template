import { t } from "elysia";
export const userValidation = {
  body: t.Object(
    {
      email: t.String({
        format: "email",
        error: "Email no proivded",
      }),
      password: t.String({
        error: "No password provided",
      }),
    },
    {
      error: "Invalid data",
    },
  ),
};
