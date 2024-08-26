import express, { json } from "express";
import usersRouter from "./routes/users";
import notFound from "./middleware/not-found";
import connect from "./db/connection";
import configDevEnv from "../config";
import errorHandler from "./middleware/error-handler";
import morgan from "morgan";
import cors from "cors";
import { productsRouter } from "./routes/products";
import { stonesRouter } from "./routes/stones";
import { categoriesRouter } from "./routes/categories";

configDevEnv();
connect();

const app = express();
//middleware chain:
app.use(json());
app.use(morgan("dev"));
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5172"] }));

//routes
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/stones", stonesRouter);
app.use("/api/categories", categoriesRouter);

app.use("/public", express.static("public"));
app.use(errorHandler);
app.use(notFound);

//start the server:
app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
  console.log(`App is running in ${process.env.NODE_ENV} mode`);
});