import express from "express";
import { configDotenv } from "dotenv";
import authRoutes from "./routes/authRoutes.js";
configDotenv({
    path:".env"
});

const app=express();
app.use(express.json());

app.use((req,res,next)=>{
    console.log(`Method ${req.method} Url ${req.url}`);
    next();
});

app.get("/",(req,res)=>{
    res.send("Hello from the root route");
});

app.use(authRoutes);

app.use((err,req,res,next)=>{
    console.log(err);
    const status=err.status || 500;
    res.status(status).json({
        message:err.message
    });
})


const port=process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
})

export default app;