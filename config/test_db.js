import { pool } from "./database.js";

const check=async()=>{
    const result=await pool.query("Select * from users");
    console.log(result.rows);
}
check();