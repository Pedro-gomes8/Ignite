import cors from "cors";
import express from "express";

import { dashboardRoutes } from "./routes/dashboard.routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/dashboard", dashboardRoutes);

app.listen(3333, () => console.log("server running"));
