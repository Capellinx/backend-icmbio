import express, { json }  from "express";
import { temporaryAgentRouter } from "./routes/temporary-agent.routes";
import { handleErrors } from "./middlewares/handle-error.middleware";
import "express-async-errors"

export const app = express()

app.use(json())
app.use(express.json())

app.use("/users", temporaryAgentRouter)

app.use(handleErrors.execute)