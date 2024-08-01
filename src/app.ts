import express, { json }  from "express";
import { temporaryAgentRouter } from "./routes/temporary-agent.routes";

export const app = express()

app.use(json())
app.use("/users", temporaryAgentRouter)