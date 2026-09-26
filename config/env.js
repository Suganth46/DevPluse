import { configDotenv } from "dotenv";
configDotenv({
    path:".env"
});

export const env = {
    port: Number(process.env.PORT || 3000),

    database: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 5432),
        name: process.env.DB_NAME
    },

    jwt: {
        secret: process.env.JWT_KEY,
        expiresIn: process.env.JWT_EXPERIES || "1h"
    }
};