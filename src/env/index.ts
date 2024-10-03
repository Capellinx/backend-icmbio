import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
   PORT: z.coerce.number().describe('The port the server will listen on').default(8443),
   DATABASE_URL: z.string().describe('The string connection to the database').default('postgres://postgres:postgres@localhost:5432/postgres'),
   JWT_SECRET: z.string().describe('The secret used to sign the JWT'),
   JWT_REFRESH_SECRET: z.string().describe('The secret used to sign the refresh JWT'),
   EMAIL_HOST: z.string().describe('The email host'),
   EMAIL_PORT: z.coerce.string().describe('The email port'),
   EMAIL_USER: z.string().describe('The email user'),
   EMAIL_PASS: z.string().describe('The email password'),
   BASE_URL: z.string().describe('The base url of the application (front-end)'),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
   console.error("⚠️ Invalid environment variables", _env.error.format());
   throw new Error("Invalid environment variables");
}

export const env = _env.data;
