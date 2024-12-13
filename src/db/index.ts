import { drizzle } from 'drizzle-orm/node-postgres';
import { databaseUrl } from '../config/variables';

export const db = drizzle(databaseUrl!);
