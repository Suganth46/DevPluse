import pg from "pg";
import { configDotenv } from "dotenv";
const {Pool}=pg;
configDotenv({
    path:".env"
});
export const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME
});
