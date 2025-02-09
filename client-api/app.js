import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
const app = express();

//API security
app.use(helmet());
app.use(cors());

//Logger
app.use(morgan("combined"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000;

//Load routers
import userRouter from "./src/routers/user.router.js";
import ticketRouter from "./src/routers/ticket.router.js";

//Use routers
app.use("/v1/user", userRouter);
app.use("/v1/ticket", ticketRouter);

//Error Handler
import errorHandler from "./src/utils/errorHandler.js";

app.use((req, res, next) => {
  const error = new Error("Resource not found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  errorHandler(error, res);
});

app.listen(port, () => console.log(`API is ready on http://localhost:${port}`));
