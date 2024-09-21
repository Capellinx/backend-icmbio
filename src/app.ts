
import express, { json } from "express";
import { HandleErros } from "./middleware/handle-errors.middleware";
import helmet from "helmet";

export const app = express()

app.use(helmet())
app.use(json())
app.use(HandleErros.execute)