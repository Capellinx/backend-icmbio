/*
  Warnings:

  - The primary key for the `temporary_agent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[email]` on the table `temporary_agent` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "temporary_agent" DROP CONSTRAINT "temporary_agent_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ADD CONSTRAINT "temporary_agent_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "temporary_agent_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "temporary_agent_email_key" ON "temporary_agent"("email");
