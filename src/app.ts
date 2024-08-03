import "express-async-errors"
import express, { json, NextFunction, Request, Response }  from "express";
import { temporaryAgentRouter } from "./routes/temporary-agent.routes";
import { handleErrors } from "./middlewares/handle-error.middleware";

export const app = express()

app.use(json())
app.use(express.json())

app.use("/users", temporaryAgentRouter)

app.use(handleErrors.execute)