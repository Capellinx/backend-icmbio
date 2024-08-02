/*
  Warnings:

  - Changed the type of `role` on the `temporary_agent` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "temporary_agent" DROP COLUMN "role",
ADD COLUMN     "role" INTEGER NOT NULL;
