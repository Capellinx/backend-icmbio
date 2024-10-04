/*
  Warnings:

  - Added the required column `matricula` to the `collaborators` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "collaborators" ADD COLUMN     "matricula" VARCHAR(100) NOT NULL;
