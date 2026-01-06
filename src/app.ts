import express from "express";
import alertaRoutes from "./routes/alerta.routes";

const app = express();
app.use(express.json());

app.use("/api", alertaRoutes);

export default app;