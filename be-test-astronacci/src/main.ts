import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { API_CONFIG, swaggerSpec, swaggerUi } from "./config";
import { errorMiddleware, notFoundMiddleware } from "./middlewares";

import routes from "./routes";

const app = express();
const port = API_CONFIG.API_PORT;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", routes);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT ${port}`);
  console.log(`OPEN API RUNNING http://localhost:${port}/api/docs`);
});
