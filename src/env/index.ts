import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
   PORT: z.coerce.number().describe('The port the server will listen on').default(8443),
   DATABASE_URL: z.string().describe('The string connection to the database').default('postgres://postgres:postgres@localhost:5432/postgres'),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
   console.error("⚠️ Invalid environment variables", _env.error.format());
   throw new Error("Invalid environment variables");
}

export const env = _env.data;
