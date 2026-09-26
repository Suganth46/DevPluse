import pg from "pg";
import { env } from "./index.js";
const {Pool}=pg;
export const pool = new Pool({
    user: env.database.user,
    password: env.database.password,
    host: env.database.host,
    port: Number(env.database.port),
    database: env.database.name
});
