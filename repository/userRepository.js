import { pool } from "../config/index.js";

export const getByEmail=async (email) => {
    const query="SELECT * FROM users WHERE email=$1";
    const result=await pool.query(query,[email]);
    return result.rows[0];
}
export const getById=async (id) => {
    const query="SELECT * FROM users WHERE id=$1";
    const result=await pool.query(query,[id]);
    return result.rows[0];
}