-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "temporary_agent" (
    "id" SERIAL NOT NULL,
    "role" "Roles" NOT NULL DEFAULT 'USER',
    "name" VARCHAR(225) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,

    CONSTRAINT "temporary_agent_pkey" PRIMARY KEY ("id")
);
