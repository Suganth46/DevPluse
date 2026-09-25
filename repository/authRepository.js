import { pool } from "../config/database.js";

export const register=async (email,password) => {
    const result=await pool.query("INSERT INTO users (email, password_hash) VALUES ($1 ,$2) RETURNING *",[email,password]);
    return result.rows[0];
}