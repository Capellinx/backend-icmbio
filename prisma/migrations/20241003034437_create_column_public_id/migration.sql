/*
  Warnings:

  - Added the required column `public_id` to the `collaborators` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "collaborators" ADD COLUMN     "public_id" VARCHAR(200) NOT NULL;
