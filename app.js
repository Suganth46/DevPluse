import express from "express";
import { env } from "./config/index.js";
import authRoutes from "./routes/authRoutes.js";
import { authenticate } from "./middleware/authMiddleware.js";
import activityRoutes from "./routes/activityRoutes.js";



const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Method ${req.method} Url ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Hello from the root route");
});

app.use(authRoutes);
app.use(authenticate);
app.use(activityRoutes);
app.use((err, req, res, next) => {
    console.log(err);
    if (err.code === "23505") {
        return res.status(400).json({
            success: false,
            status: 400,
            message: "Duplicate email"
        })
    }
    if (err.operational) {
        return res.status(err.status).json({
            success: false,
            status: err.status,
            message: err.message
        });
    }
    return res.status(500).json({
        success: false,
        status: 500,
        message: "Internal Server Error"
    });
})


const port = env.port;
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})

export default app;