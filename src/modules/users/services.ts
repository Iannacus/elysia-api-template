import { databaseUrl } from "../../config/variables";
import { users } from "../../db/schema";
import { drizzle } from "drizzle-orm/node-postgres";

interface User {
  email: string;
  password: string;
}

interface ReturnedUser extends User {
  id: number;
}

const db = drizzle(databaseUrl!);

export async function getAllUsers(): Promise<ReturnedUser[]> {
  const response = await db.select().from(users);

  return response;
}

export async function createUser(data: User) {
  const response = await db.insert(users).values({ ...data });
  console.log(response);
}
