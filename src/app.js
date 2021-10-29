import express from "express";
import config from "./config";

import productsRoutes from "./routes/products.routes";

const cors = require("cors");

const app = express();
app.use(cors());

//settings
app.set("port", config.port);

app.use(productsRoutes);

export default app;
