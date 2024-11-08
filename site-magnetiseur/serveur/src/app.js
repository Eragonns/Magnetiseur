import express from "express";

import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import cors from "cors";
import "dotenv/config";
import "express-async-errors";

import errorHandler from "./middlewares/error-handler.middleware.js";
import notFound from "./middlewares/not-found.middleware.js";

import connectDB from "./config/db.config.js";

import contact from "./controllers/contact/route.contact.js";

const app = express();
app.use(express.json());

app.use(helmet());
app.set("trust proxy", 1);
app.use(
  rateLimit({
    windowMs: 15 * 30 * 1000, // 15 minutes
    max: 100, // Limite chaque IP à 100 requêtes par fenêtre
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.use(mongoSanitize());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

connectDB();

app.use("/api/v1", contact);
app.use(notFound);
app.use(errorHandler);

export default app;
