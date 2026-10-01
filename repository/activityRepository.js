import { pool } from "../config/index.js";

export const createActivity = async (id, body) => {
    const { activity_type, description, occurred_at } = body;
    const query = "INSERT INTO activity_log  (user_id, activity_type, description, occurred_at) VALUES ($1, $2, $3, $4) RETURNING *";
    const result = await pool.query(query, [id, activity_type, description, occurred_at]);
    return result.rows[0];
}

export const getAllActivity = async () => {
    const query = "SELECT * FROM activity_log";
    const result = await pool.query(query);
    return result.rows;
}

export const getActivityById= async (id) => {
    const query="SELECT * FROM activity_log WHERE id=$1";
    const result=await pool.query(query,[id]);
    return result.rows[0];
}