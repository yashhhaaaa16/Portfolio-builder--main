import dotenv from 'dotenv';
dotenv.config({ path: 'Config/.env' });

import express from 'express';
import cors from 'cors';
import authRouter from "./Views/msAuth.js";

const app = express();

const corsOptions = {
    origin: process.env.FRONTENDURL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'auth-token', 'Accept', 'Code', 'Origin', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use(authRouter);

app.listen(process.env.PORT || 5001, () => {
    console.log("🚀 Server listening on PORT", process.env.PORT || 5001);
});
